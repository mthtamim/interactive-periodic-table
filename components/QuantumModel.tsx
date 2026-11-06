import React, { useState } from 'react';
import { PeriodicElement } from '../types';

interface QuantumModelProps {
    element: PeriodicElement | null;
    paletteSvgColors: Record<string, string>;
}

const QuantumModel: React.FC<QuantumModelProps> = ({ element, paletteSvgColors }) => {
    const [hoveredShell, setHoveredShell] = useState<number | null>(null);
    
    if (!element) {
        return null;
    }

    const { shells, category, name } = element;
    const nucleusColor = paletteSvgColors[category];
    const electronColor = '#67e8f9'; // Tailwind cyan-300

    const shellInfo = hoveredShell !== null 
        ? `Shell ${hoveredShell + 1}: ${shells[hoveredShell]} electron${shells[hoveredShell] > 1 ? 's' : ''}` 
        : null;
        
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    return (
        <div className="my-4 aspect-square max-w-[300px] mx-auto" aria-label={`Atomic model of ${name}`}>
            <svg viewBox="-120 -120 240 240" role="img">
                <title>Interactive Atomic Model of {name}</title>
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Nucleus */}
                <circle cx="0" cy="0" r="10" fill={nucleusColor} className="nucleus-pulse-animation" />

                {/* Shells and Electrons */}
                {shells.map((electronCount, shellIndex) => {
                    if (electronCount === 0) return null;

                    const radius = 25 + shellIndex * 15;
                    const isHovered = hoveredShell === shellIndex;

                    return (
                        <g key={shellIndex}>
                            <title>Shell {shellIndex + 1}</title>
                            
                            {/* Orbit path */}
                            <circle 
                                cx="0" 
                                cy="0" 
                                r={radius}
                                fill="none" 
                                stroke={isHovered ? electronColor : (theme === 'dark' ? 'rgba(75, 85, 99, 0.4)' : 'rgba(156, 163, 175, 0.4)')}
                                strokeWidth={isHovered ? 1.5 : 0.75}
                                className="transition-all duration-300"
                            />

                            {/* Electrons */}
                            {Array.from({ length: electronCount }).map((_, electronIndex) => {
                                const angle = (electronIndex / electronCount) * 360;
                                // Vary speed per shell, and direction for some shells for visual interest
                                const animationDuration = `${8 + shellIndex * 3}s`;
                                const animationDirection = shellIndex % 2 === 0 ? 'normal' : 'reverse';

                                return (
                                    <g
                                        key={electronIndex}
                                        style={{
                                            animation: `rotate-clockwise ${animationDuration} linear infinite ${animationDirection}`,
                                            transformOrigin: 'center',
                                            transform: `rotate(${angle}deg)`
                                        }}
                                    >
                                        <circle 
                                            cx={radius} 
                                            cy="0" 
                                            r="3.5" 
                                            fill={electronColor}
                                            filter="url(#glow)"
                                        />
                                    </g>
                                );
                            })}
                            
                            {/* Hover target */}
                            <circle
                                cx="0"
                                cy="0"
                                r={radius}
                                fill="transparent"
                                stroke="transparent"
                                strokeWidth="12"
                                className="cursor-pointer"
                                onMouseEnter={() => setHoveredShell(shellIndex)}
                                onMouseLeave={() => setHoveredShell(null)}
                            />
                        </g>
                    );
                })}
                 {/* Shell Info Text */}
                 {shellInfo && (
                    <text
                        x="0"
                        y="-110"
                        textAnchor="middle"
                        fontSize="8"
                        fill={theme === 'dark' ? '#cbd5e1' : '#334155'}
                        className="font-semibold"
                        style={{ pointerEvents: 'none' }}
                    >
                        {shellInfo}
                    </text>
                )}
            </svg>
        </div>
    );
};

export default QuantumModel;