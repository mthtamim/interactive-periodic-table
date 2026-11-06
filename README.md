# Interactive Periodic Table — Android অ্যাপ

ইন্টারেক্টিভ পর্যায় সারণী (Periodic Table) — React + Vite দিয়ে বানানো ওয়েব অ্যাপ, [Capacitor](https://capacitorjs.com/) দিয়ে Android অ্যাপে মোড়ানো। মৌলে ট্যাপ করলে তার বিস্তারিত বৈশিষ্ট্য, সার্চ, দুটো মৌলের তুলনা, কোয়ান্টাম মডেল, আর Gemini চ্যাটবট আছে। বাংলা ও ইংরেজি দুটো ভাষাতেই চলে।

## ফিচার

- ১১৮টি মৌলের ইন্টারেক্টিভ সারণী, ক্যাটাগরি অনুযায়ী রঙ
- মৌলের বিস্তারিত তথ্য: পারমাণবিক ভর, ইলেকট্রন বিন্যাস, আইসোটোপ
- সার্চ, ফিল্টার (গ্রুপ / ব্লক), তুলনা ভিউ
- Gemini চ্যাটবট (API key থাকলে)
- বাংলা / ইংরেজি ভাষা, লাইট / ডার্ক থিম

## ওয়েবে চালানো

```bash
npm install
npm run dev
```

## Android APK বানানো

`android/` ফোল্ডার repo-তে রাখা হয় না — CI-তে Capacitor দিয়ে নতুন করে তৈরি হয়।

```bash
npm install
npm run build
npx cap add android   # প্রথমবার
npx cap sync android
cd android && ./gradlew assembleDebug
```

GitHub Actions-এ প্রতিটি push-এ debug APK তৈরি হয় আর **v1.0.0 release-এ APK** যুক্ত হয়।

## Gemini চ্যাটবট (ঐচ্ছিক)

চ্যাটবট ছাড়া সারণীর সবকিছু পুরো চলে। চ্যাটবট চালাতে `.env` ফাইলে key বসাতে হবে:

```
VITE_GEMINI_API_KEY=তোমার-key
```

Key পাওয়া যাবে https://aistudio.google.com/apikey থেকে। key ছাড়া চ্যাটবট খুললে error মেসেজ দেখাবে, অ্যাপ ক্র্যাশ করবে না।

## জানা সীমাবদ্ধতা

- অ্যাপটি ইন্টারনেট ছাড়া পুরো ডিজাইন দেখাবে না — Tailwind CSS CDN থেকে লোড হয়। সারণীর ডেটা ফোনেই থাকে।
- চ্যাটবটের জন্য ইন্টারনেট + Gemini API key লাগবে।

## তথ্য

- Package: `com.mthtamim.periodictable`
- Version: 1.0 (versionCode 1)
- মূল AI Studio অ্যাপ: https://ai.studio/apps/cde3281d-e35d-4009-95be-fdee6ce7ae9b
