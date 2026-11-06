import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, Part } from '@google/genai';
import { PeriodicElement } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  role: 'user' | 'model';
  content: string;
  sources?: { uri: string; title: string }[];
}

type ChatMode = 'standard' | 'lite' | 'pro' | 'grounded';

interface ChatbotProps {
  isVisible: boolean;
  onClose: () => void;
  selectedElement: PeriodicElement | null;
}

const Chatbot: React.FC<ChatbotProps> = ({ isVisible, onClose, selectedElement }) => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: t('chatbotInitialGreeting'),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<ChatMode>('standard');
  const aiRef = useRef<GoogleGenAI | null>(null);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isVisible) return;
    
    const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY as string | undefined;
    if (!apiKey) {
        setMessages([{ role: 'model', content: t('chatbotError') }]);
        return;
    }
    if (!aiRef.current) {
        aiRef.current = new GoogleGenAI({ apiKey });
    }
    const ai = aiRef.current;
    
    if (mode === 'grounded') {
        chatRef.current = null;
        setMessages([
          {
            role: 'model',
            content: selectedElement 
              ? t('chatbotGreetingWithElement', { elementName: selectedElement.name })
              : t('chatbotInitialGreeting'),
          },
        ]);
        return;
    }

    let modelName: string;
    let config: any = {};

    switch (mode) {
      case 'lite':
        modelName = 'gemini-flash-lite-latest';
        break;
      case 'pro':
        modelName = 'gemini-2.5-pro';
        config.thinkingConfig = { thinkingBudget: 32768 };
        break;
      default:
        modelName = 'gemini-2.5-flash';
        break;
    }

    let systemInstruction = "You are a helpful assistant knowledgeable about the periodic table of elements. Answer questions related to chemistry, physics, and the elements.";
    if (selectedElement) {
        systemInstruction += ` The user currently has the element "${selectedElement.name}" selected. If their question seems to be about a specific element without naming it, assume they are referring to ${selectedElement.name}.`;
    }
    
    config.systemInstruction = systemInstruction;

    chatRef.current = ai.chats.create({
        model: modelName,
        config: config
    });
    
    setMessages([
      {
        role: 'model',
        content: selectedElement 
          ? t('chatbotGreetingWithElement', { elementName: selectedElement.name })
          : t('chatbotInitialGreeting'),
      },
    ]);

  }, [mode, selectedElement, isVisible, t]);
  
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !aiRef.current) return;

    const userMessageContent = input.trim();
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessageContent }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
        if (mode === 'grounded') {
            const ai = aiRef.current;
            const history: { role: string; parts: Part[] }[] = messages.map(msg => ({
                role: msg.role,
                parts: [{ text: msg.content }]
            }));

            let systemInstruction = "You are a helpful assistant knowledgeable about the periodic table of elements. Answer questions related to chemistry, physics, and the elements.";
            if (selectedElement) {
                systemInstruction += ` The user currently has the element "${selectedElement.name}" selected. If their question seems to be about a specific element without naming it, assume they are referring to ${selectedElement.name}.`;
            }

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [...history, { role: 'user', parts: [{ text: userMessageContent }] }],
                config: {
                    systemInstruction,
                    tools: [{ googleSearch: {} }],
                },
            });

            const text = response.text;
            const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
            
            const sources: { uri: string; title: string }[] = [];
            if (groundingChunks) {
                for (const chunk of groundingChunks) {
                    if (chunk.web) {
                        sources.push({ uri: chunk.web.uri, title: chunk.web.title || chunk.web.uri });
                    }
                }
            }
            setMessages(prev => [...prev, { role: 'model', content: text, sources: sources.length > 0 ? sources : undefined }]);
        } else {
            if (!chatRef.current) throw new Error("Chat not initialized");
            const stream = await chatRef.current.sendMessageStream({ message: userMessageContent });
          
            let botResponse = '';
            setMessages((prev) => [...prev, { role: 'model', content: '' }]);

            for await (const chunk of stream) {
                const chunkText = chunk.text;
                botResponse += chunkText;
                setMessages((prev) => {
                  const updatedMessages = [...prev];
                  updatedMessages[updatedMessages.length - 1].content = botResponse;
                  return updatedMessages;
                });
            }
        }
    } catch (error) {
      console.error('Gemini API error:', error);
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage.role === 'model' && lastMessage.content === '') {
            const updated = [...prev];
            updated[prev.length - 1].content = t('chatbotError');
            return updated;
        }
        return [...prev, { role: 'model', content: t('chatbotError') }];
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
     <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isVisible ? 'bg-black/60' : 'bg-transparent pointer-events-none'}`} onClick={onClose} aria-hidden={!isVisible}>
        <div
        className={`fixed top-0 bottom-0 right-0 z-50 h-full w-full max-w-lg transform transition-transform duration-300 ease-in-out ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
        } bg-white dark:bg-gray-800 shadow-2xl flex flex-col`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbot-title"
        >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 id="chatbot-title" className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">{t('chatbotTitle')}</h2>
            <button onClick={onClose} aria-label={t('chatbotCloseLabel')} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </header>
        
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <fieldset>
                <legend className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">{t('chatbotResponseMode')}</legend>
                <div className="flex justify-around gap-2 text-sm">
                    {(['standard', 'lite', 'pro', 'grounded'] as ChatMode[]).map((m) => (
                        <div key={m}>
                            <input type="radio" id={m} name="chat-mode" value={m} checked={mode === m} onChange={() => setMode(m)} className="sr-only peer" disabled={isLoading} />
                            <label htmlFor={m} className="block w-full text-center px-3 py-2 rounded-md cursor-pointer transition-colors bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white peer-checked:bg-cyan-600 peer-checked:text-white peer-disabled:opacity-50 peer-disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600">
                                {m === 'standard' && t('chatbotModeStandard')}
                                {m === 'lite' && t('chatbotModeLite')}
                                {m === 'pro' && t('chatbotModePro')}
                                {m === 'grounded' && t('chatbotModeGrounded')}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs md:max-w-md lg:max-w-lg`}>
                        <div className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                            {msg.role === 'model' && msg.content === '' && isLoading && index === messages.length - 1 ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-400 dark:bg-cyan-300 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-cyan-400 dark:bg-cyan-300 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-cyan-400 dark:bg-cyan-300 rounded-full animate-pulse"></div>
                                </div>
                            ) : (
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                            )}
                        </div>
                         {msg.sources && msg.sources.length > 0 && (
                            <div className="mt-2 p-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                                <h4 className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-400">{t('chatbotSources')}</h4>
                                <ul className="text-xs space-y-1">
                                    {msg.sources.map((source, i) => (
                                        <li key={i} className="truncate">
                                            <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                                                {source.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chatbotInputPlaceholder')}
                className="flex-1 p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                aria-label="Chat input"
                disabled={isLoading}
            />
            <button type="submit" className="p-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed" disabled={isLoading || !input.trim()} aria-label={t('chatbotSendLabel')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
            </form>
        </div>
        </div>
     </div>
  );
};

export default Chatbot;