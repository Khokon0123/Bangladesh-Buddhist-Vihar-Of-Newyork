import Link from "next/link";
import { getLang } from "@/lib/getLang";
import { notFound } from "next/navigation";
import { articles } from "../articles";
import { loc } from "@/lib/i18n";

const en = {
  back: "Back to Blog",
  backAll: "Back to All Articles",
  cat: (c: string) => c,
  read: (r: string) => `${r} read`,
};

const bn: typeof en = {
  back: "ব্লগে ফিরে যান",
  backAll: "সকল প্রবন্ধে ফিরে যান",
  cat: (c: string) => ({ Meditation: "ধ্যান", Teachings: "শিক্ষা", Practice: "অনুশীলন", Wellness: "সুস্থতা" } as Record<string, string>)[c] ?? c,
  read: (r: string) => `পড়তে ${r}`,
};

// Article bodies; title, author, date etc. come from ../articles.ts
const articleContent: Record<string, { en: string[]; bn: string[] }> = {
  "understanding-mindfulness": {
    en: [
      "Mindfulness is the practice of paying deliberate attention to the present moment without judgment. It is one of the most fundamental teachings in Buddhism and has been practiced for over 2,500 years. In recent decades, mindfulness has gained widespread recognition in the West as a powerful tool for reducing stress, improving mental clarity, and cultivating inner peace.",
      "At its core, mindfulness means being fully present — aware of where we are, what we are doing, and how we are feeling, without being overly reactive or overwhelmed by what is happening around us. It sounds simple, yet in our fast-paced, distraction-filled world, truly being present is one of the most challenging practices we can undertake.",
      "The practice begins with the breath. By directing our attention to the natural rhythm of breathing — the rise and fall of the chest, the feeling of air entering and leaving the nostrils — we anchor ourselves in the present moment. When the mind wanders, as it inevitably will, we simply notice this with kindness and return our attention to the breath. This returning is itself the practice.",
      "Beyond formal sitting meditation, mindfulness can be cultivated in every activity of daily life. Washing dishes, walking, eating, listening — each of these can become an opportunity for mindful awareness. The key is to bring full attention to whatever we are doing, rather than letting the mind drift to past regrets or future worries.",
      "Research has shown that regular mindfulness practice can reduce anxiety, improve focus, strengthen relationships, and even change the physical structure of the brain. But perhaps more importantly, mindfulness helps us reconnect with the richness of our own experience — with the colors, sounds, tastes, and sensations that make up each moment of our lives.",
      "To begin your mindfulness practice, start with just five minutes each day. Sit comfortably, close your eyes, and bring your attention to the breath. When thoughts arise, acknowledge them without judgment and gently return to the breath. Over time, you can gradually extend the length of your sessions and bring mindful awareness into more areas of your daily life.",
    ],
    bn: [
      "সচেতনতা (মাইন্ডফুলনেস) হলো কোনো বিচার ছাড়াই ইচ্ছাকৃতভাবে বর্তমান মুহূর্তে মনোযোগ দেওয়ার অনুশীলন। এটি বৌদ্ধধর্মের সবচেয়ে মৌলিক শিক্ষাগুলোর একটি এবং ২,৫০০ বছরেরও বেশি সময় ধরে চর্চিত হয়ে আসছে। সাম্প্রতিক দশকগুলোতে মানসিক চাপ কমানো, মনের স্বচ্ছতা বাড়ানো এবং অন্তরের শান্তি গড়ে তোলার শক্তিশালী উপায় হিসেবে পশ্চিমা বিশ্বেও সচেতনতা ব্যাপক স্বীকৃতি পেয়েছে।",
      "মূলত সচেতনতা মানে পুরোপুরি উপস্থিত থাকা—আমরা কোথায় আছি, কী করছি এবং কেমন অনুভব করছি, সে সম্পর্কে সজাগ থাকা, অথচ চারপাশের ঘটনায় অতিরিক্ত প্রতিক্রিয়া না দেখানো বা অভিভূত না হওয়া। শুনতে সহজ মনে হলেও, আমাদের দ্রুতগতির ও মনোযোগ-বিক্ষেপে ভরা পৃথিবীতে সত্যিকারভাবে উপস্থিত থাকাই সবচেয়ে কঠিন অনুশীলনগুলোর একটি।",
      "অনুশীলন শুরু হয় শ্বাস দিয়ে। শ্বাস-প্রশ্বাসের স্বাভাবিক ছন্দে—বুকের ওঠানামা, নাসারন্ধ্র দিয়ে বাতাস ঢোকা ও বের হওয়ার অনুভূতিতে—মনোযোগ দিয়ে আমরা নিজেদের বর্তমান মুহূর্তে স্থির করি। মন যখন অনিবার্যভাবে অন্যদিকে চলে যায়, তখন আমরা সদয়ভাবে তা লক্ষ করি এবং আবার শ্বাসে মনোযোগ ফিরিয়ে আনি। এই ফিরে আসাই আসল অনুশীলন।",
      "আনুষ্ঠানিকভাবে বসে ধ্যানের বাইরেও দৈনন্দিন জীবনের প্রতিটি কাজে সচেতনতা চর্চা করা যায়। থালাবাসন ধোয়া, হাঁটা, খাওয়া, শোনা—এর প্রতিটিই হয়ে উঠতে পারে সচেতনতার সুযোগ। মূল কথা হলো, অতীতের অনুশোচনা বা ভবিষ্যতের দুশ্চিন্তায় মনকে ভেসে যেতে না দিয়ে যা করছি তাতে পূর্ণ মনোযোগ দেওয়া।",
      "গবেষণায় দেখা গেছে, নিয়মিত সচেতনতা চর্চা উদ্বেগ কমায়, মনোযোগ বাড়ায়, সম্পর্ক দৃঢ় করে এবং এমনকি মস্তিষ্কের গঠনেও পরিবর্তন আনে। তবে সম্ভবত এর চেয়েও গুরুত্বপূর্ণ হলো, সচেতনতা আমাদের নিজেদের অভিজ্ঞতার সমৃদ্ধির সাথে—জীবনের প্রতিটি মুহূর্ত গঠনকারী রং, শব্দ, স্বাদ ও অনুভূতির সাথে—আবার যুক্ত হতে সাহায্য করে।",
      "সচেতনতা চর্চা শুরু করতে প্রতিদিন মাত্র পাঁচ মিনিট দিয়ে শুরু করুন। আরাম করে বসুন, চোখ বন্ধ করুন এবং শ্বাসে মনোযোগ আনুন। চিন্তা এলে বিচার না করে তা স্বীকার করুন এবং আলতোভাবে শ্বাসে ফিরে আসুন। সময়ের সাথে সাথে ধীরে ধীরে সেশনের দৈর্ঘ্য বাড়াতে পারেন এবং দৈনন্দিন জীবনের আরও নানা ক্ষেত্রে সচেতনতা নিয়ে আসতে পারেন।",
    ],
  },
  "compassion-practice": {
    en: [
      "Compassion — the wish for all beings to be free from suffering — is considered the very heart of Buddhist practice. The Pali word for compassion is karuna, and it is one of the four Brahmaviharas, or divine abodes, alongside loving-kindness (metta), sympathetic joy (mudita), and equanimity (upekkha).",
      "The practice of compassion begins with ourselves. This may seem counterintuitive — we often think of compassion as directed outward toward others. But the Buddha taught that we cannot truly love and care for others if we are unable to extend that same care to ourselves. Self-compassion is not selfishness; it is the foundation upon which genuine compassion for others is built.",
      "Loving-kindness meditation (metta bhavana) is one of the most beautiful and transformative practices in the Buddhist tradition. It involves the systematic cultivation of goodwill toward all beings, beginning with oneself and gradually expanding outward to include loved ones, neutral people, difficult people, and ultimately all living beings without exception.",
      "The practice typically begins with the silent repetition of phrases such as: 'May I be happy. May I be healthy. May I be safe. May I live with ease.' As the heart softens and opens, we then extend these wishes outward: 'May you be happy. May you be healthy. May you be safe. May you live with ease.'",
      "Through regular compassion practice, we begin to notice a shift in how we relate to others. We become less reactive, more patient, and more able to see the humanity and suffering in those around us — even those who have hurt us. Compassion does not mean approving of harmful behavior, but it does mean recognizing that all beings, including ourselves, are doing the best they can with the understanding they have.",
      "Begin your compassion practice today by taking a few moments to place your hand on your heart and offer yourself the wish: 'May I be well. May I be at peace.' Notice what arises with kindness and curiosity, and let this be the beginning of a lifelong journey of the open heart.",
    ],
    bn: [
      "করুণা—সকল প্রাণী দুঃখমুক্ত হোক, এই কামনা—বৌদ্ধ সাধনার প্রাণ হিসেবে বিবেচিত। পালি ভাষায় একে বলা হয় করুণা, এবং মৈত্রী (মেত্তা), মুদিতা ও উপেক্ষার সাথে এটি চার ব্রহ্মবিহারের একটি।",
      "করুণার চর্চা শুরু হয় নিজেকে দিয়ে। এটি বিপরীত মনে হতে পারে—আমরা সাধারণত করুণাকে অন্যের প্রতি নিবেদিত বলেই ভাবি। কিন্তু বুদ্ধ শিখিয়েছেন, নিজের প্রতি সেই একই যত্ন দেখাতে না পারলে আমরা অন্যকে সত্যিকারভাবে ভালোবাসতে ও যত্ন নিতে পারি না। নিজের প্রতি করুণা স্বার্থপরতা নয়; এটিই সেই ভিত্তি, যার ওপর অন্যের প্রতি প্রকৃত করুণা গড়ে ওঠে।",
      "মৈত্রী ভাবনা (মেত্তা ভাবনা) বৌদ্ধ ঐতিহ্যের সবচেয়ে সুন্দর ও রূপান্তরকারী অনুশীলনগুলোর একটি। এতে সকল প্রাণীর প্রতি শুভকামনা পর্যায়ক্রমে গড়ে তোলা হয়—নিজেকে দিয়ে শুরু করে ধীরে ধীরে প্রিয়জন, নিরপেক্ষ মানুষ, কঠিন মানুষ এবং শেষ পর্যন্ত কোনো ব্যতিক্রম ছাড়াই সকল জীবের প্রতি তা বিস্তৃত করা হয়।",
      "অনুশীলনটি সাধারণত শুরু হয় মনে মনে এমন বাক্য পুনরাবৃত্তি করে: 'আমি সুখী হই। আমি সুস্থ থাকি। আমি নিরাপদ থাকি। আমি স্বস্তিতে বাঁচি।' হৃদয় কোমল ও উন্মুক্ত হলে আমরা এই কামনা অন্যদের প্রতি বিস্তৃত করি: 'তুমি সুখী হও। তুমি সুস্থ থাকো। তুমি নিরাপদ থাকো। তুমি স্বস্তিতে বাঁচো।'",
      "নিয়মিত করুণা চর্চার মাধ্যমে আমরা লক্ষ করতে শুরু করি, অন্যদের সাথে আমাদের সম্পর্কের ধরন বদলে যাচ্ছে। আমরা কম প্রতিক্রিয়াশীল, আরও ধৈর্যশীল হই এবং চারপাশের মানুষের—এমনকি যারা আমাদের কষ্ট দিয়েছে তাদেরও—মানবিকতা ও দুঃখ দেখতে পাই। করুণা মানে ক্ষতিকর আচরণ সমর্থন করা নয়; বরং এই উপলব্ধি যে নিজেদের সহ সকল প্রাণী তাদের বোধ অনুযায়ী যথাসাধ্য চেষ্টা করছে।",
      "আজই করুণা চর্চা শুরু করুন—কয়েক মুহূর্ত বুকে হাত রেখে নিজেকে এই কামনা জানান: 'আমি ভালো থাকি। আমি শান্তিতে থাকি।' যা অনুভূত হয়, তা সদয়তা ও কৌতূহল নিয়ে লক্ষ করুন, আর এটিই হোক উন্মুক্ত হৃদয়ের আজীবন যাত্রার সূচনা।",
    ],
  },
  "four-noble-truths-modern-life": {
    en: [
      "The Four Noble Truths are the foundation of all Buddhist teaching. Spoken by the Buddha in his very first discourse after his enlightenment, they offer a precise and compassionate diagnosis of the human condition and a clear path toward liberation. Far from being abstract philosophy, these truths are immediately relevant to every aspect of modern life.",
      "The First Noble Truth is dukkha — often translated as suffering, but more accurately meaning unsatisfactoriness or dis-ease. The Buddha was not teaching pessimism; he was pointing to something we all know to be true: life involves difficulty, impermanence, and a fundamental sense that things are not quite right. We experience this in our relationships, our health, our work, and our endless pursuit of happiness through external circumstances.",
      "The Second Noble Truth identifies the cause of suffering: tanha, or craving. This craving manifests in three ways — craving for pleasant experiences, craving to avoid unpleasant experiences, and craving for existence or non-existence. In modern life, we see this in our addiction to phones, our avoidance of discomfort, and our endless striving for more — more success, more possessions, more approval.",
      "The Third Noble Truth offers genuine hope: the cessation of suffering is possible. Nibbana, or liberation, is not a distant mystical state available only to monks in caves. It is accessible here and now, in the moments when we release our grip on craving and aversion and allow things to be as they are.",
      "The Fourth Noble Truth is the Noble Eightfold Path — the practical means by which we move from suffering toward liberation. This path covers every dimension of human life: our understanding, our intentions, our speech, our actions, our livelihood, our effort, our mindfulness, and our concentration.",
      "To apply these truths in daily life, begin by simply noticing when you are suffering — not to wallow in it, but to investigate it with curiosity. What are you craving or avoiding? Can you release your grip just slightly, just in this moment? This is the practice of the Four Noble Truths, lived one breath at a time.",
    ],
    bn: [
      "চার আর্যসত্য সমস্ত বৌদ্ধ শিক্ষার ভিত্তি। বোধি লাভের পর বুদ্ধ তাঁর প্রথম ধর্মদেশনাতেই এগুলো ব্যক্ত করেছিলেন। এগুলো মানুষের অবস্থার একটি সুনির্দিষ্ট ও করুণাময় নির্ণয় এবং মুক্তির একটি স্পষ্ট পথ দেখায়। বিমূর্ত দর্শন তো নয়ই, বরং এই সত্যগুলো আধুনিক জীবনের প্রতিটি দিকে সরাসরি প্রাসঙ্গিক।",
      "প্রথম আর্যসত্য হলো দুঃখ—যাকে প্রায়ই 'কষ্ট' বলা হয়, তবে আরও সঠিক অর্থে অতৃপ্তি বা অস্বস্তি। বুদ্ধ হতাশাবাদ শেখাননি; তিনি এমন কিছুর দিকে ইঙ্গিত করেছেন যা আমরা সবাই জানি: জীবনে আছে কষ্ট, অনিত্যতা এবং একটা মৌলিক অনুভূতি যে কিছু একটা ঠিক নেই। সম্পর্ক, স্বাস্থ্য, কাজ এবং বাইরের পরিস্থিতির মাধ্যমে সুখের অন্তহীন খোঁজে আমরা এটি অনুভব করি।",
      "দ্বিতীয় আর্যসত্য দুঃখের কারণ চিহ্নিত করে: তণ্হা বা তৃষ্ণা। এই তৃষ্ণা তিনভাবে প্রকাশ পায়—সুখকর অভিজ্ঞতার তৃষ্ণা, অপ্রীতিকর অভিজ্ঞতা এড়ানোর তৃষ্ণা এবং ভব বা বিভবের তৃষ্ণা। আধুনিক জীবনে আমরা এটি দেখি ফোনের প্রতি আসক্তিতে, অস্বস্তি এড়ানোর প্রবণতায় এবং আরও বেশি—আরও সাফল্য, আরও সম্পদ, আরও স্বীকৃতি—পাওয়ার অন্তহীন প্রচেষ্টায়।",
      "তৃতীয় আর্যসত্য প্রকৃত আশার বাণী শোনায়: দুঃখের নিরোধ সম্ভব। নির্বাণ বা মুক্তি কেবল গুহাবাসী ভিক্ষুদের জন্য কোনো দূরবর্তী রহস্যময় অবস্থা নয়। এটি এখানে, এখনই লভ্য—সেই মুহূর্তগুলোতে, যখন আমরা তৃষ্ণা ও বিদ্বেষের বাঁধন আলগা করে সবকিছুকে যেমন আছে তেমনভাবে থাকতে দিই।",
      "চতুর্থ আর্যসত্য হলো আর্য অষ্টাঙ্গিক মার্গ—দুঃখ থেকে মুক্তির দিকে এগিয়ে যাওয়ার ব্যবহারিক উপায়। এই পথ মানবজীবনের প্রতিটি দিককে স্পর্শ করে: আমাদের দৃষ্টি, সংকল্প, বাক্য, কর্ম, জীবিকা, প্রচেষ্টা, স্মৃতি ও সমাধি।",
      "দৈনন্দিন জীবনে এই সত্যগুলো প্রয়োগ করতে, প্রথমে শুধু লক্ষ করুন কখন আপনি দুঃখ পাচ্ছেন—তাতে ডুবে থাকার জন্য নয়, বরং কৌতূহল নিয়ে তা পরীক্ষা করার জন্য। আপনি কী কামনা করছেন বা কী এড়াতে চাইছেন? এই মুহূর্তে কি বাঁধনটা একটু আলগা করা যায়? এটিই চার আর্যসত্যের সাধনা—প্রতিটি শ্বাসে যাপিত।",
    ],
  },
  "walking-meditation": {
    en: [
      "Walking meditation is one of the foundational practices of the Theravada Buddhist tradition. Often practiced in conjunction with sitting meditation, it offers a way to cultivate mindfulness through movement and can be an invaluable bridge between formal meditation and the activities of daily life.",
      "The practice is deceptively simple. Find a quiet path of about ten to twenty steps in length. Stand still for a moment, feeling the weight of your body on your feet, the contact of the ground beneath you. Take a breath. Then begin to walk, very slowly, paying careful attention to the physical sensations of each step.",
      "As you walk, you may internally note the movement of each foot: 'lifting, moving, placing.' Feel the heel leave the ground, the shift of weight, the ball of the foot making contact. Walk as if you are kissing the earth with each step — a phrase beloved of the Vietnamese Zen master Thich Nhat Hanh.",
      "When you reach the end of your path, pause, turn mindfully, and walk back. The turning itself is an opportunity for awareness — notice the shifting of weight, the rotation of the body, the change of direction.",
      "Walking meditation is particularly valuable for people who find sitting difficult, or for those whose minds are very restless. The movement of the body gives the mind something to anchor to, making it easier to stay present. It is also a wonderful way to practice outdoors, in nature, where the sounds and sights of the natural world can deepen rather than distract from awareness.",
      "Try beginning with just ten minutes of walking meditation each day, ideally before or after your sitting practice. Over time, you may find that the qualities of mindfulness cultivated on the meditation path begin to infuse your ordinary walking — through the park, to the bus stop, through the corridors of your workplace. Every step becomes a homecoming.",
    ],
    bn: [
      "চংক্রমণ ধ্যান থেরবাদ বৌদ্ধ ঐতিহ্যের মৌলিক অনুশীলনগুলোর একটি। প্রায়ই বসে ধ্যানের সাথে মিলিয়ে চর্চা করা হয়। এটি চলাফেরার মধ্য দিয়ে সচেতনতা গড়ে তোলার একটি উপায় এবং আনুষ্ঠানিক ধ্যান ও দৈনন্দিন কাজকর্মের মাঝে এক অমূল্য সেতুবন্ধ।",
      "অনুশীলনটি দেখতে খুবই সহজ। দশ থেকে বিশ কদম দৈর্ঘ্যের একটি নিরিবিলি পথ বেছে নিন। কিছুক্ষণ স্থির হয়ে দাঁড়ান, পায়ের ওপর শরীরের ভার এবং নিচের মাটির স্পর্শ অনুভব করুন। একটি শ্বাস নিন। তারপর খুব ধীরে হাঁটতে শুরু করুন এবং প্রতিটি পদক্ষেপের শারীরিক অনুভূতিতে মনোযোগ দিন।",
      "হাঁটার সময় মনে মনে প্রতিটি পায়ের গতি লক্ষ করতে পারেন: 'তোলা, এগোনো, রাখা।' গোড়ালি মাটি ছাড়ছে, ভার সরে যাচ্ছে, পায়ের সামনের অংশ মাটি স্পর্শ করছে—অনুভব করুন। এমনভাবে হাঁটুন যেন প্রতিটি পদক্ষেপে পৃথিবীকে চুম্বন করছেন—ভিয়েতনামি জেন গুরু থিক নাত হানের প্রিয় একটি উক্তি।",
      "পথের শেষে পৌঁছে থামুন, সচেতনভাবে ঘুরে দাঁড়ান এবং ফিরে আসুন। ঘোরার মুহূর্তটিও সচেতনতার সুযোগ—ভারের পরিবর্তন, শরীরের ঘূর্ণন, দিক বদল লক্ষ করুন।",
      "যাঁদের বসে থাকা কঠিন মনে হয় বা যাঁদের মন খুব অস্থির, তাঁদের জন্য চংক্রমণ ধ্যান বিশেষভাবে উপকারী। শরীরের চলাচল মনকে একটি অবলম্বন দেয়, ফলে উপস্থিত থাকা সহজ হয়। প্রকৃতির মাঝে বাইরে অনুশীলনেরও এটি এক চমৎকার উপায়, যেখানে প্রকৃতির শব্দ ও দৃশ্য সচেতনতাকে বিক্ষিপ্ত না করে বরং গভীর করে।",
      "প্রতিদিন মাত্র দশ মিনিট চংক্রমণ ধ্যান দিয়ে শুরু করুন, সম্ভব হলে বসে ধ্যানের আগে বা পরে। সময়ের সাথে আপনি হয়তো দেখবেন, ধ্যানের পথে গড়ে ওঠা সচেতনতা আপনার সাধারণ হাঁটাচলাতেও মিশে যাচ্ছে—পার্কে, বাস স্টপে যাওয়ার পথে, কর্মস্থলের করিডোরে। প্রতিটি পদক্ষেপ হয়ে ওঠে ঘরে ফেরা।",
    ],
  },
  "karma-understanding": {
    en: [
      "Karma is perhaps the most misunderstood concept in Buddhist teaching. In popular culture, it is often reduced to a simple cosmic scorecard — do good things and good things happen to you; do bad things and bad things happen. While this contains a kernel of truth, the Buddhist understanding of karma is far more subtle, profound, and immediately practical.",
      "The word karma simply means action. More specifically, it refers to intentional action — actions that arise from volition, from the choices we make moment by moment. The Buddha taught that it is our intentions that shape our experience, both inner and outer. As he said: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a corrupt mind, suffering follows, as the wheel follows the hoof of an ox.'",
      "Karma is not fate or predestination. We are not locked into a predetermined future based on past actions. Every moment offers the opportunity to act differently, to choose more wisely, to cultivate greater kindness and awareness. This is the liberating teaching within the doctrine of karma: we are not victims of our past; we are the architects of our present and future.",
      "Understanding karma helps us take responsibility for our lives without falling into guilt or blame. When difficulties arise, rather than asking 'Why is this happening to me?', we can ask 'What can I learn from this? How can I respond wisely?' When things go well, rather than attributing our success entirely to luck or external factors, we can recognize the role our own choices and efforts have played.",
      "The cultivation of positive karma is not about earning cosmic rewards. It is about the immediate effect that our actions have on our minds and hearts. When we act with kindness, we feel more open and connected. When we act with greed or anger, we feel contracted and isolated. Karma is less about future consequences and more about the quality of the mind we cultivate right now.",
      "To work skillfully with karma in daily life, begin by pausing before significant actions and asking: 'What is my intention here? Is this action rooted in wisdom and compassion, or in greed, hatred, or delusion?' This simple practice of intentional awareness is the heart of karmic cultivation.",
    ],
    bn: [
      "কর্ম সম্ভবত বৌদ্ধ শিক্ষার সবচেয়ে ভুল বোঝা ধারণা। জনপ্রিয় সংস্কৃতিতে একে প্রায়ই একটি সরল মহাজাগতিক হিসাবখাতায় নামিয়ে আনা হয়—ভালো করলে ভালো হবে, মন্দ করলে মন্দ। এতে সত্যের একটি বীজ থাকলেও, কর্ম সম্পর্কে বৌদ্ধ উপলব্ধি অনেক বেশি সূক্ষ্ম, গভীর ও সরাসরি ব্যবহারিক।",
      "কর্ম শব্দের অর্থ সহজভাবে কাজ। আরও নির্দিষ্টভাবে, এটি বোঝায় চেতনাপ্রসূত কাজ—যা আসে ইচ্ছা থেকে, মুহূর্তে মুহূর্তে আমাদের নেওয়া সিদ্ধান্ত থেকে। বুদ্ধ শিখিয়েছেন, আমাদের চেতনাই আমাদের ভেতর ও বাইরের অভিজ্ঞতাকে গড়ে তোলে। তিনি বলেছেন: 'মনই সকল ধর্মের অগ্রগামী। মনই শ্রেষ্ঠ, সবকিছু মনোময়। কেউ যদি কলুষিত মনে কথা বলে বা কাজ করে, তবে দুঃখ তাকে অনুসরণ করে, যেমন চাকা অনুসরণ করে বলদের পা।'",
      "কর্ম মানে নিয়তি বা পূর্বনির্ধারণ নয়। অতীত কাজের ভিত্তিতে আমরা কোনো পূর্বনির্ধারিত ভবিষ্যতে বন্দি নই। প্রতিটি মুহূর্ত ভিন্নভাবে কাজ করার, আরও প্রজ্ঞার সাথে সিদ্ধান্ত নেওয়ার, আরও দয়া ও সচেতনতা গড়ে তোলার সুযোগ দেয়। এটিই কর্মতত্ত্বের মুক্তিদায়ী শিক্ষা: আমরা অতীতের শিকার নই; আমরাই আমাদের বর্তমান ও ভবিষ্যতের স্থপতি।",
      "কর্মকে বোঝা আমাদের অপরাধবোধ বা দোষারোপে না পড়ে নিজের জীবনের দায়িত্ব নিতে সাহায্য করে। কষ্ট এলে 'আমার সাথেই কেন এমন হচ্ছে?' না ভেবে আমরা জিজ্ঞেস করতে পারি, 'এ থেকে আমি কী শিখতে পারি? কীভাবে প্রজ্ঞার সাথে সাড়া দিতে পারি?' আবার সবকিছু ভালো গেলে, সাফল্যকে পুরোপুরি ভাগ্য বা বাইরের কারণে আরোপ না করে আমরা নিজেদের সিদ্ধান্ত ও প্রচেষ্টার ভূমিকাও স্বীকার করতে পারি।",
      "কুশল কর্মের চর্চা মহাজাগতিক পুরস্কার অর্জনের জন্য নয়। এটি আমাদের কাজের সেই তাৎক্ষণিক প্রভাব নিয়ে, যা আমাদের মন ও হৃদয়ে পড়ে। দয়ার সাথে কাজ করলে আমরা আরও উন্মুক্ত ও সংযুক্ত বোধ করি। লোভ বা ক্রোধ নিয়ে কাজ করলে নিজেকে সংকুচিত ও বিচ্ছিন্ন মনে হয়। কর্ম ভবিষ্যতের ফলাফলের চেয়েও বেশি এখনকার মনের গুণমান নিয়ে।",
      "দৈনন্দিন জীবনে দক্ষতার সাথে কর্মের চর্চা করতে, গুরুত্বপূর্ণ কোনো কাজের আগে একটু থেমে নিজেকে জিজ্ঞেস করুন: 'এখানে আমার চেতনা কী? এই কাজের মূলে কি প্রজ্ঞা ও করুণা, নাকি লোভ, দ্বেষ বা মোহ?' চেতনার প্রতি এই সহজ সচেতনতাই কর্ম-সাধনার প্রাণ।",
    ],
  },
  "morning-routine": {
    en: [
      "How we begin the morning sets the tone for the entire day. In the Buddhist tradition, the morning hours are considered especially auspicious for practice — the mind is fresh, the day's activities have not yet begun to crowd in, and there is a natural quality of stillness in the early hours that supports meditation and reflection.",
      "A mindful morning routine need not be elaborate or time-consuming. Even fifteen to thirty minutes of intentional practice can make a profound difference in the quality of your day. The key is consistency — a modest practice done daily is far more valuable than an ambitious practice done rarely.",
      "Begin by waking gently, without immediately reaching for your phone. Take a few moments to simply notice that you are alive — feel the warmth of your body, the weight of the blanket, the quality of the morning light. Offer a brief moment of gratitude for this new day and the opportunity it brings.",
      "After rising, you might begin with a short period of sitting meditation — even five or ten minutes of following the breath can center the mind and establish a quality of awareness that carries through the day. Some practitioners chant or recite the Three Refuges and Five Precepts as a way of reaffirming their commitment to the Buddhist path.",
      "Breakfast can itself become a meditation — eating slowly, savoring each bite, and reflecting on the many beings whose efforts have contributed to the food on your plate. This practice of conscious eating cultivates both mindfulness and gratitude.",
      "Before moving into the activities of the day, take a moment to set an intention. What quality do you wish to cultivate today? Patience? Generosity? Attentiveness? Holding this intention lightly as you go through your day is a powerful way to live more deliberately and align your actions with your deepest values.",
    ],
    bn: [
      "আমরা কীভাবে সকাল শুরু করি, তা পুরো দিনের সুর বেঁধে দেয়। বৌদ্ধ ঐতিহ্যে সকালের সময়টুকু সাধনার জন্য বিশেষ শুভ বলে বিবেচিত—মন থাকে সতেজ, দিনের কাজকর্মের ভিড় তখনো শুরু হয়নি, আর ভোরের প্রহরে একটি স্বাভাবিক স্থিরতা থাকে যা ধ্যান ও চিন্তনে সহায়ক।",
      "সচেতন সকালের রুটিন জটিল বা সময়সাপেক্ষ হওয়ার প্রয়োজন নেই। মাত্র পনেরো থেকে ত্রিশ মিনিটের সচেতন অনুশীলনও দিনের মানে গভীর পরিবর্তন আনতে পারে। মূল কথা হলো নিয়মিততা—মাঝে মাঝে করা উচ্চাভিলাষী অনুশীলনের চেয়ে প্রতিদিন করা ছোট অনুশীলন অনেক বেশি মূল্যবান।",
      "ঘুম থেকে আলতোভাবে জাগুন, সঙ্গে সঙ্গে ফোনের দিকে হাত না বাড়িয়ে। কয়েক মুহূর্ত শুধু লক্ষ করুন যে আপনি বেঁচে আছেন—শরীরের উষ্ণতা, কম্বলের ভার, সকালের আলোর রূপ অনুভব করুন। এই নতুন দিন এবং তার আনা সুযোগের জন্য এক মুহূর্ত কৃতজ্ঞতা জানান।",
      "ওঠার পর অল্প সময়ের জন্য বসে ধ্যান দিয়ে শুরু করতে পারেন—পাঁচ বা দশ মিনিট শ্বাস অনুসরণ করাও মনকে কেন্দ্রীভূত করে এবং এমন একটি সচেতনতা তৈরি করে যা সারা দিন বয়ে চলে। কোনো কোনো সাধক বৌদ্ধ পথের প্রতি অঙ্গীকার নবায়নের জন্য ত্রিশরণ ও পঞ্চশীল পাঠ বা আবৃত্তি করেন।",
      "সকালের নাস্তাও হয়ে উঠতে পারে ধ্যান—ধীরে খাওয়া, প্রতিটি গ্রাসের স্বাদ উপভোগ করা এবং যাঁদের পরিশ্রমে খাবার আপনার পাতে এসেছে তাঁদের কথা ভাবা। সচেতন আহারের এই অনুশীলন সচেতনতা ও কৃতজ্ঞতা দুটোই গড়ে তোলে।",
      "দিনের কাজে নামার আগে একটু সময় নিয়ে একটি সংকল্প স্থির করুন। আজ আপনি কোন গুণটি চর্চা করতে চান? ধৈর্য? দানশীলতা? মনোযোগ? দিনভর এই সংকল্পটি হালকাভাবে মনে রাখা আরও সচেতনভাবে বাঁচার এবং নিজের গভীরতম মূল্যবোধের সাথে কাজকে মিলিয়ে নেওয়ার একটি শক্তিশালী উপায়।",
    ],
  },
  "dealing-with-anxiety": {
    en: [
      "Anxiety is one of the most common forms of suffering in the modern world. Characterized by worry, fear, and a sense of impending threat, anxiety can be both deeply uncomfortable and profoundly disabling. The Buddhist tradition offers time-tested practices that can help us understand and work skillfully with anxious states of mind.",
      "From a Buddhist perspective, anxiety often arises from our relationship with impermanence and uncertainty. We want things to be stable and predictable, and when they are not — when the future is uncertain, when things we value are threatened — we experience fear. The mind generates anxious thoughts in an attempt to control what is fundamentally uncontrollable.",
      "One of the most powerful Buddhist teachings for working with anxiety is the practice of turning toward, rather than away from, the experience of anxiety. Rather than trying to suppress or escape the anxious feeling, we can investigate it with curious, compassionate attention: Where is it in the body? What does it feel like? Does it have a color or shape? What thoughts are associated with it?",
      "The practice of mindfulness is particularly helpful for anxiety because it interrupts the habitual chain of anxious thinking. When we notice that we are caught in a cycle of worry, we can gently redirect attention to the present moment — to the breath, the body, the sounds around us. This does not make the anxiety disappear, but it prevents us from adding fuel to the fire through continued rumination.",
      "Loving-kindness meditation can also be a powerful antidote to anxiety. Anxiety often involves a contracted, self-focused quality of attention. By deliberately expanding our circle of care to include others — by wishing others well, by recognizing that suffering is a shared human experience — we can soften the intensity of our own distress.",
      "If you are struggling with anxiety, be gentle with yourself. Begin with very small practices — a few mindful breaths, a moment of self-compassion, a brief loving-kindness meditation. Over time, these small practices accumulate and can create a significant shift in how you relate to anxiety and to the uncertainties of life.",
    ],
    bn: [
      "উদ্বেগ আধুনিক বিশ্বে দুঃখের সবচেয়ে সাধারণ রূপগুলোর একটি। দুশ্চিন্তা, ভয় এবং আসন্ন বিপদের অনুভূতিতে ভরা উদ্বেগ যেমন গভীর অস্বস্তিকর, তেমনি জীবনকে অচলও করে দিতে পারে। বৌদ্ধ ঐতিহ্য এমন সব পরীক্ষিত অনুশীলন দেয়, যা উদ্বিগ্ন মনকে বুঝতে এবং দক্ষতার সাথে সামলাতে সাহায্য করে।",
      "বৌদ্ধ দৃষ্টিকোণ থেকে, উদ্বেগ প্রায়ই জন্ম নেয় অনিত্যতা ও অনিশ্চয়তার সাথে আমাদের সম্পর্ক থেকে। আমরা চাই সবকিছু স্থির ও অনুমেয় থাকুক, আর যখন তা থাকে না—যখন ভবিষ্যৎ অনিশ্চিত, যখন প্রিয় কিছু হুমকির মুখে—তখন আমরা ভয় পাই। যা মূলত নিয়ন্ত্রণের বাইরে, তা নিয়ন্ত্রণ করার চেষ্টায় মন উদ্বিগ্ন চিন্তা তৈরি করে।",
      "উদ্বেগ সামলানোর সবচেয়ে শক্তিশালী বৌদ্ধ শিক্ষাগুলোর একটি হলো উদ্বেগের অভিজ্ঞতা থেকে মুখ না ফিরিয়ে তার মুখোমুখি হওয়া। উদ্বিগ্ন অনুভূতিকে দমন বা এড়িয়ে যাওয়ার চেষ্টা না করে আমরা কৌতূহলী ও করুণাময় মনোযোগে তা পরীক্ষা করতে পারি: শরীরের কোথায় এটি? কেমন অনুভূত হয়? এর কি কোনো রং বা আকার আছে? এর সাথে কোন চিন্তাগুলো জড়িত?",
      "উদ্বেগের ক্ষেত্রে সচেতনতার চর্চা বিশেষভাবে সহায়ক, কারণ এটি উদ্বিগ্ন চিন্তার অভ্যাসগত শৃঙ্খল ভেঙে দেয়। যখন লক্ষ করি যে দুশ্চিন্তার চক্রে আটকে গেছি, তখন আলতোভাবে মনোযোগ বর্তমান মুহূর্তে—শ্বাসে, শরীরে, চারপাশের শব্দে—ফিরিয়ে আনতে পারি। এতে উদ্বেগ মিলিয়ে যায় না, কিন্তু অবিরাম ভাবনা দিয়ে আগুনে ঘি ঢালা বন্ধ হয়।",
      "মৈত্রী ভাবনাও উদ্বেগের একটি শক্তিশালী প্রতিষেধক হতে পারে। উদ্বেগে মনোযোগ প্রায়ই সংকুচিত ও আত্মকেন্দ্রিক হয়ে পড়ে। সচেতনভাবে আমাদের যত্নের পরিধি অন্যদের পর্যন্ত বিস্তৃত করে—অন্যের মঙ্গল কামনা করে, দুঃখ যে সকল মানুষের অভিন্ন অভিজ্ঞতা তা উপলব্ধি করে—আমরা নিজেদের কষ্টের তীব্রতা কমাতে পারি।",
      "আপনি যদি উদ্বেগের সাথে লড়াই করেন, নিজের প্রতি কোমল হোন। খুব ছোট অনুশীলন দিয়ে শুরু করুন—কয়েকটি সচেতন শ্বাস, নিজের প্রতি এক মুহূর্তের করুণা, সংক্ষিপ্ত মৈত্রী ভাবনা। সময়ের সাথে এই ছোট অনুশীলনগুলো জমে উঠে উদ্বেগ ও জীবনের অনিশ্চয়তার সাথে আপনার সম্পর্কে উল্লেখযোগ্য পরিবর্তন আনতে পারে।",
    ],
  },
  "sutra-study": {
    en: [
      "The sutras — the recorded teachings of the Buddha — are among the world's most profound and beautiful spiritual literature. For over two thousand years, Buddhist practitioners have drawn wisdom, inspiration, and guidance from these ancient texts. Yet for many Westerners approaching Buddhism, the sutras can seem daunting, filled with unfamiliar terminology and structured in ways that differ significantly from modern reading material.",
      "Sutra study is traditionally understood as one of three essential supports for Buddhist practice, alongside meditation and ethical conduct. The Buddha himself encouraged his disciples to hear the teachings, reflect on them carefully, and then put them into practice — this three-fold approach of study, reflection, and meditation is sometimes called the path of learning, contemplation, and cultivation.",
      "For beginners, the Dhammapada is perhaps the most accessible entry point into the Buddhist canon. This collection of verses attributed to the Buddha covers topics ranging from the nature of mind to the cultivation of virtue, and its wisdom is expressed in clear, poetic language that speaks across centuries. Another excellent starting point is the Discourse on the Full Awareness of Breathing (Anapanasati Sutta), which provides detailed instructions for mindfulness of breathing.",
      "When approaching a sutra, it is helpful to begin with a moment of settling — taking a few breaths, setting an intention to be open and receptive. Read slowly, allowing the words to land. When a passage strikes you — whether with clarity, confusion, or resonance — pause and sit with it. Sutra study is not primarily an intellectual exercise; it is a contemplative practice.",
      "It can also be enormously valuable to study sutras in a group setting, where different perspectives and questions can illuminate aspects of the text that might be missed in solitary reading. Many Buddhist centers, including our own, offer regular sutra study groups that provide both guidance and community.",
      "As you deepen your sutra study, you will begin to notice connections between different teachings, and between the teachings and your own experience. This is one of the great joys of the Buddhist path — the discovery that ancient wisdom speaks directly to our contemporary lives, offering guidance and comfort as fresh and relevant as if the Buddha had spoken the words this very morning.",
    ],
    bn: [
      "সূত্র—বুদ্ধের লিপিবদ্ধ শিক্ষা—বিশ্বের সবচেয়ে গভীর ও সুন্দর আধ্যাত্মিক সাহিত্যের অন্যতম। দুই হাজার বছরেরও বেশি সময় ধরে বৌদ্ধ সাধকেরা এই প্রাচীন গ্রন্থগুলো থেকে প্রজ্ঞা, অনুপ্রেরণা ও দিকনির্দেশনা পেয়ে আসছেন। তবু বৌদ্ধধর্মে নতুন অনেকের কাছে সূত্রগুলো কঠিন মনে হতে পারে—অপরিচিত পরিভাষায় ভরা এবং আধুনিক পাঠ্যের থেকে ভিন্নভাবে বিন্যস্ত।",
      "ঐতিহ্যগতভাবে ধ্যান ও শীলের পাশাপাশি সূত্র অধ্যয়নকে বৌদ্ধ সাধনার তিনটি অপরিহার্য অবলম্বনের একটি হিসেবে গণ্য করা হয়। বুদ্ধ নিজেই শিষ্যদের উৎসাহিত করেছেন শিক্ষা শুনতে, গভীরভাবে চিন্তা করতে এবং তারপর অনুশীলনে প্রয়োগ করতে—শ্রবণ, চিন্তন ও ভাবনার এই ত্রিবিধ পথকে কখনো শ্রুতময়, চিন্তাময় ও ভাবনাময় প্রজ্ঞার পথ বলা হয়।",
      "নবীনদের জন্য ধম্মপদ সম্ভবত বৌদ্ধ ত্রিপিটকে প্রবেশের সবচেয়ে সহজ দ্বার। বুদ্ধের বাণী হিসেবে গৃহীত এই গাথা-সংকলনে মনের প্রকৃতি থেকে শুরু করে সদ্গুণের চর্চা পর্যন্ত নানা বিষয় রয়েছে, এবং এর প্রজ্ঞা প্রকাশিত হয়েছে এমন স্পষ্ট ও কাব্যিক ভাষায় যা শতাব্দী পেরিয়েও কথা বলে। আরেকটি চমৎকার সূচনা হলো আনাপানস্মৃতি সূত্র, যেখানে শ্বাস-প্রশ্বাসে সচেতনতার বিস্তারিত নির্দেশনা রয়েছে।",
      "কোনো সূত্র পড়ার আগে একটু স্থির হয়ে নেওয়া সহায়ক—কয়েকটি শ্বাস নিন, উন্মুক্ত ও গ্রহণশীল থাকার সংকল্প করুন। ধীরে পড়ুন, শব্দগুলোকে মনে বসতে দিন। কোনো অংশ যখন আপনাকে নাড়া দেয়—স্পষ্টতা, বিভ্রান্তি বা অনুরণন যা-ই জাগাক—থামুন এবং তার সাথে কিছুক্ষণ থাকুন। সূত্র অধ্যয়ন মূলত বুদ্ধিবৃত্তিক অনুশীলন নয়; এটি একটি ধ্যানমগ্ন সাধনা।",
      "দলগতভাবে সূত্র অধ্যয়নও অত্যন্ত মূল্যবান হতে পারে, যেখানে ভিন্ন ভিন্ন দৃষ্টিভঙ্গি ও প্রশ্ন পাঠের এমন দিক উন্মোচন করে যা একা পড়লে চোখ এড়িয়ে যেতে পারে। আমাদের বিহারসহ অনেক বৌদ্ধ কেন্দ্র নিয়মিত সূত্র অধ্যয়ন দলের আয়োজন করে, যা দিকনির্দেশনা ও সংঘ—দুটোই দেয়।",
      "সূত্র অধ্যয়ন যত গভীর হবে, ততই আপনি বিভিন্ন শিক্ষার মধ্যে এবং শিক্ষা ও নিজের অভিজ্ঞতার মধ্যে যোগসূত্র খুঁজে পাবেন। এটিই বৌদ্ধ পথের এক মহান আনন্দ—এই আবিষ্কার যে প্রাচীন প্রজ্ঞা সরাসরি আমাদের সমকালীন জীবনের সাথে কথা বলে, এমন সতেজ ও প্রাসঙ্গিক দিকনির্দেশনা ও সান্ত্বনা দেয়, যেন বুদ্ধ আজ সকালেই কথাগুলো বলেছেন।",
    ],
  },
  "gratitude-practice": {
    en: [
      "Gratitude is not often the first quality that comes to mind when we think of Buddhist practice. We more readily associate Buddhism with equanimity, mindfulness, or compassion. Yet the Pali word katannuta — translated as gratitude or thankfulness — is regarded in the Buddhist tradition as one of the marks of a spiritually mature person, and gratitude practice can be a profound and transformative dimension of the spiritual path.",
      "The Buddha spoke frequently of the importance of recognizing and appreciating the kindness and support we receive from others. In one teaching, he described those who are grateful as 'the best of people,' and noted that ingratitude is a form of heedlessness that perpetuates suffering. Gratitude, by contrast, opens the heart and deepens our sense of connection with all beings.",
      "One of the simplest and most powerful gratitude practices is a daily review, conducted either at the beginning or end of the day. Take a few minutes to bring to mind three specific things for which you are grateful. These need not be grand or extraordinary — the warmth of sunlight, a kind word from a friend, the simple fact of having food to eat. The practice is to genuinely feel the gratitude, allowing it to fill the heart rather than simply listing items intellectually.",
      "Gratitude practice works in part by training the attention to notice what is present and positive, rather than focusing exclusively on what is absent or wrong. The mind naturally tends toward what psychologists call the 'negativity bias' — giving more weight to negative experiences than positive ones. Gratitude practice gently rebalances this tendency, without denying the reality of difficulty and suffering.",
      "In the Buddhist context, gratitude extends beyond our immediate circumstances to encompass the entire chain of causes and conditions that support our existence. We can feel gratitude for the teachers who have transmitted the Dharma across generations, for the monastic community that has preserved the practices, for the farmers who grew our food, for the earth that supports all life. This expansive gratitude gradually dissolves the illusion of separateness and cultivates a sense of profound interconnection.",
      "Begin your gratitude practice today with a simple reflection: 'What is one thing I can appreciate right now, in this moment?' Let the answer arise naturally, and then rest with the feeling of appreciation for a moment before moving on. This small practice, repeated daily, can gradually transform the quality of your inner life and your relationship with the world around you.",
    ],
    bn: [
      "বৌদ্ধ সাধনার কথা ভাবলে কৃতজ্ঞতা সাধারণত প্রথমে মনে আসে না। আমরা বৌদ্ধধর্মকে সহজেই উপেক্ষা, সচেতনতা বা করুণার সাথে যুক্ত করি। তবু পালি শব্দ কতঞ্ঞুতা—অর্থাৎ কৃতজ্ঞতা—বৌদ্ধ ঐতিহ্যে আধ্যাত্মিকভাবে পরিণত মানুষের অন্যতম লক্ষণ হিসেবে গণ্য, এবং কৃতজ্ঞতার চর্চা আধ্যাত্মিক পথের এক গভীর ও রূপান্তরকারী দিক হয়ে উঠতে পারে।",
      "অন্যদের কাছ থেকে পাওয়া দয়া ও সহায়তা চিনতে ও তার মূল্য দিতে পারার গুরুত্ব নিয়ে বুদ্ধ প্রায়ই কথা বলেছেন। এক দেশনায় তিনি কৃতজ্ঞ মানুষকে 'শ্রেষ্ঠ মানুষ' বলে বর্ণনা করেছেন এবং উল্লেখ করেছেন যে অকৃতজ্ঞতা এক ধরনের প্রমাদ, যা দুঃখকে স্থায়ী করে। বিপরীতে কৃতজ্ঞতা হৃদয় খুলে দেয় এবং সকল প্রাণীর সাথে আমাদের সংযোগবোধ গভীর করে।",
      "কৃতজ্ঞতার সবচেয়ে সহজ ও শক্তিশালী অনুশীলনগুলোর একটি হলো দিনের শুরুতে বা শেষে প্রতিদিনের পর্যালোচনা। কয়েক মিনিট সময় নিয়ে এমন তিনটি নির্দিষ্ট বিষয় মনে আনুন, যার জন্য আপনি কৃতজ্ঞ। এগুলো বড় বা অসাধারণ হওয়ার প্রয়োজন নেই—রোদের উষ্ণতা, বন্ধুর একটি সদয় কথা, খাবার থাকার মতো সাধারণ সত্য। অনুশীলনটি হলো কৃতজ্ঞতাকে সত্যিকারভাবে অনুভব করা, শুধু বুদ্ধি দিয়ে তালিকা না করে হৃদয়কে তাতে ভরে উঠতে দেওয়া।",
      "কৃতজ্ঞতার চর্চা আংশিকভাবে কাজ করে মনোযোগকে প্রশিক্ষিত করে—যা নেই বা যা ভুল শুধু তার দিকে না তাকিয়ে, যা উপস্থিত ও ইতিবাচক তা লক্ষ করতে শেখায়। মন স্বভাবতই মনোবিজ্ঞানীদের ভাষায় 'নেতিবাচকতার পক্ষপাত'-এর দিকে ঝোঁকে—ইতিবাচকের চেয়ে নেতিবাচক অভিজ্ঞতাকে বেশি গুরুত্ব দেয়। কষ্ট ও দুঃখের বাস্তবতা অস্বীকার না করেই কৃতজ্ঞতার চর্চা আলতোভাবে এই প্রবণতায় ভারসাম্য আনে।",
      "বৌদ্ধ প্রেক্ষাপটে কৃতজ্ঞতা আমাদের তাৎক্ষণিক পরিস্থিতি ছাড়িয়ে আমাদের অস্তিত্বকে ধারণকারী কারণ ও শর্তের পুরো শৃঙ্খলকে অন্তর্ভুক্ত করে। আমরা কৃতজ্ঞ হতে পারি সেই গুরুদের প্রতি যাঁরা প্রজন্মের পর প্রজন্ম ধর্ম পৌঁছে দিয়েছেন, সেই ভিক্ষুসংঘের প্রতি যাঁরা সাধনাকে সংরক্ষণ করেছেন, সেই কৃষকদের প্রতি যাঁরা আমাদের খাদ্য ফলিয়েছেন, সেই পৃথিবীর প্রতি যে সকল জীবনকে ধারণ করে। এই বিস্তৃত কৃতজ্ঞতা ধীরে ধীরে বিচ্ছিন্নতার মোহ দূর করে এবং গভীর আন্তঃসংযোগের বোধ জাগায়।",
      "আজই একটি সহজ চিন্তা দিয়ে কৃতজ্ঞতার চর্চা শুরু করুন: 'এই মুহূর্তে আমি কোন একটি জিনিসের মূল্য উপলব্ধি করতে পারি?' উত্তরটি স্বাভাবিকভাবে আসতে দিন, তারপর এগিয়ে যাওয়ার আগে কিছুক্ষণ সেই কৃতজ্ঞতার অনুভূতিতে স্থির থাকুন। প্রতিদিন পুনরাবৃত্ত এই ছোট্ট অনুশীলন ধীরে ধীরে আপনার অন্তর্জীবন এবং চারপাশের জগতের সাথে আপনার সম্পর্ককে বদলে দিতে পারে।",
    ],
  },
};

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const lang = getLang();
  const t = lang === "bn" ? bn : en;
  const meta = articles.find((a) => a.id === params.id);
  const content = articleContent[params.id];

  if (!meta || !content) {
    notFound();
  }

  const article = { ...loc(meta, lang), content: content[lang] };

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {t.back}
            </Link>
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
              {t.cat(article.category)}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{t.read(article.readTime)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-neutral-600 leading-relaxed mb-10 italic border-l-4 border-gold-500 pl-6" style={{ background: "transparent" }}>
              {article.excerpt}
            </p>
            <div className="space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-neutral-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {t.backAll}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
