import Link from "next/link";
import { getLang } from "@/lib/getLang";

const en = {
  title: "About Our Temple",
  subtitle: "A place of peace, wisdom, and compassion in the heart of our community",
  storyTitle: "Our Story",
  story1: "Our temple was founded with a simple yet profound vision: to create a sanctuary where people from all walks of life can come together to learn, practice, and find peace. What began as a small gathering of practitioners has grown into a vibrant community dedicated to the teachings of the Buddha.",
  story2: "Over the years, we have welcomed thousands of visitors, students, and practitioners. Each person brings their own unique journey, their own questions, and their own search for meaning. What unites us is not our background or beliefs, but our shared aspiration to understand ourselves better and to live with greater wisdom and compassion.",
  story3: "Our teachers come from diverse Buddhist traditions, bringing together centuries of wisdom and practice. They share not just knowledge, but their own experiences of struggle, discovery, and transformation. This personal touch makes our teachings accessible and relevant to modern life.",
  story4: "Today, we continue to serve our community through regular meditation sessions, Dhamma school classes, and various programs that support both beginners and experienced practitioners. We believe that the path to peace is available to everyone, regardless of their background or circumstances.",
  templeTitle: "Our Temple",
  templeAlt: "Bangladesh Buddhist Vihara Of New York",
  quote: "Peace does not belong to any religion. It belongs to yourself.",
  quoteBy: "— Our Guiding Principle",
  missionTitle: "Our Mission",
  mission: "To provide a welcoming space where people can learn Buddhist teachings, develop their meditation practice, and cultivate wisdom and compassion in their daily lives. We are committed to making these ancient teachings accessible and relevant to modern practitioners.",
  visionTitle: "Our Vision",
  vision: "To be a beacon of peace and wisdom in our community, where individuals can discover their own inner peace and contribute to a more compassionate world. We envision a community where the practice of mindfulness and compassion transforms not just individuals, but our society as a whole.",
  valuesTitle: "Our Values",
  v1: "Compassion for all beings",
  v2: "Wisdom through study and practice",
  v3: "Inclusivity and welcoming all",
  v4: "Authenticity and personal growth",
  v5: "Service to the community",
  communityTitle: "Our Community",
  c1: "Our community is made up of people from all backgrounds and walks of life. Some come seeking peace in times of difficulty. Others are drawn to the wisdom of Buddhist philosophy. Many simply want to learn meditation and mindfulness practices that can help them navigate the challenges of modern life.",
  c2: "What brings us together is not uniformity, but our shared commitment to practice and growth. We learn from each other, support each other, and walk this path together. Whether you are new to Buddhism or have been practicing for years, you are welcome here.",
  c3: "Our programs are designed to meet people where they are. From beginner-friendly meditation classes to advanced Dhamma study, from weekly gatherings to intensive retreats, we offer opportunities for everyone to deepen their practice and understanding.",
  joinTitle: "Join Us",
  join: "Whether you are curious about Buddhism, looking to start a meditation practice, or seeking a community of like-minded practitioners, we invite you to visit us and see what we have to offer.",
  practices: "Explore Our Practices",
  teachers: "Meet Our Teachers",

};

const bn: typeof en = {
  title: "আমাদের বিহার সম্পর্কে",
  subtitle: "আমাদের সমাজের প্রাণকেন্দ্রে শান্তি, প্রজ্ঞা ও করুণার এক স্থান",
  storyTitle: "আমাদের কথা",
  story1: "একটি সরল অথচ গভীর লক্ষ্য নিয়ে আমাদের বিহার প্রতিষ্ঠিত হয়েছিল: এমন একটি আশ্রয়স্থল গড়ে তোলা, যেখানে সমাজের সব স্তরের মানুষ একত্রিত হয়ে শিখতে, সাধনা করতে ও শান্তি খুঁজে পেতে পারেন। কয়েকজন সাধকের ছোট্ট সমাবেশ হিসেবে যার শুরু, তা আজ বুদ্ধের শিক্ষায় নিবেদিত এক প্রাণবন্ত সংঘে পরিণত হয়েছে।",
  story2: "বছরের পর বছর ধরে আমরা হাজারো দর্শনার্থী, শিক্ষার্থী ও সাধককে স্বাগত জানিয়েছি। প্রত্যেকে নিয়ে আসেন নিজস্ব জীবনযাত্রা, নিজস্ব প্রশ্ন এবং জীবনের অর্থের নিজস্ব অন্বেষণ। আমাদের ঐক্যের সূত্র কোনো পটভূমি বা বিশ্বাস নয়, বরং নিজেকে আরও ভালোভাবে জানা এবং অধিক প্রজ্ঞা ও করুণা নিয়ে বাঁচার এক অভিন্ন আকাঙ্ক্ষা।",
  story3: "আমাদের গুরুগণ বিভিন্ন বৌদ্ধ ঐতিহ্য থেকে এসেছেন এবং বহু শতাব্দীর প্রজ্ঞা ও সাধনার ধারা বহন করছেন। তাঁরা শুধু জ্ঞানই নয়, নিজেদের সংগ্রাম, উপলব্ধি ও রূপান্তরের অভিজ্ঞতাও ভাগ করে নেন। এই ব্যক্তিগত ছোঁয়াই আমাদের শিক্ষাকে আধুনিক জীবনের জন্য সহজবোধ্য ও প্রাসঙ্গিক করে তোলে।",
  story4: "আজ আমরা নিয়মিত ধ্যান সেশন, ধর্মীয় বিদ্যালয়ের ক্লাস এবং নবীন ও অভিজ্ঞ সাধক উভয়ের জন্য নানা কর্মসূচির মাধ্যমে আমাদের সমাজের সেবা করে চলেছি। আমরা বিশ্বাস করি, পটভূমি বা পরিস্থিতি যা-ই হোক, শান্তির পথ সবার জন্য উন্মুক্ত।",
  templeTitle: "আমাদের বিহার",
  templeAlt: "বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্ক",
  quote: "শান্তি কোনো ধর্মের একার নয়। শান্তি আপনার নিজের।",
  quoteBy: "— আমাদের পথনির্দেশক নীতি",
  missionTitle: "আমাদের লক্ষ্য",
  mission: "এমন একটি আন্তরিক পরিবেশ তৈরি করা, যেখানে মানুষ বুদ্ধের শিক্ষা জানতে পারেন, ধ্যান অনুশীলন গড়ে তুলতে পারেন এবং দৈনন্দিন জীবনে প্রজ্ঞা ও করুণা চর্চা করতে পারেন। এই প্রাচীন শিক্ষাকে আধুনিক সাধকদের কাছে সহজলভ্য ও প্রাসঙ্গিক করে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।",
  visionTitle: "আমাদের স্বপ্ন",
  vision: "আমাদের সমাজে শান্তি ও প্রজ্ঞার আলোকবর্তিকা হয়ে ওঠা, যেখানে প্রত্যেকে নিজের অন্তরের শান্তি খুঁজে পাবেন এবং আরও করুণাময় পৃথিবী গড়তে অবদান রাখবেন। আমরা এমন এক সমাজের স্বপ্ন দেখি, যেখানে সচেতনতা ও করুণার চর্চা শুধু ব্যক্তিকে নয়, পুরো সমাজকেই বদলে দেবে।",
  valuesTitle: "আমাদের মূল্যবোধ",
  v1: "সকল প্রাণীর প্রতি করুণা",
  v2: "অধ্যয়ন ও সাধনার মাধ্যমে প্রজ্ঞা",
  v3: "সবার প্রতি উদারতা ও সবাইকে স্বাগত জানানো",
  v4: "আন্তরিকতা ও আত্মিক উন্নতি",
  v5: "সমাজের সেবা",
  communityTitle: "আমাদের সংঘ",
  c1: "আমাদের সংঘ গড়ে উঠেছে নানা পটভূমি ও পেশার মানুষ নিয়ে। কেউ আসেন কঠিন সময়ে শান্তির খোঁজে। কেউ আকৃষ্ট হন বৌদ্ধ দর্শনের প্রজ্ঞায়। আবার অনেকে কেবল ধ্যান ও সচেতনতার চর্চা শিখতে চান, যা আধুনিক জীবনের চ্যালেঞ্জ মোকাবিলায় সাহায্য করে।",
  c2: "আমাদের একত্রিত করে কোনো একরূপতা নয়, বরং সাধনা ও উন্নতির প্রতি আমাদের অভিন্ন অঙ্গীকার। আমরা একে অপরের কাছ থেকে শিখি, একে অপরের পাশে দাঁড়াই এবং একসাথে এই পথে চলি। আপনি বৌদ্ধধর্মে নতুন হোন বা বহু বছর ধরে সাধনা করছেন, এখানে আপনাকে স্বাগতম।",
  c3: "আমাদের কর্মসূচিগুলো প্রত্যেকের প্রয়োজন অনুযায়ী সাজানো। নবীনদের উপযোগী ধ্যান ক্লাস থেকে উচ্চতর ধর্ম অধ্যয়ন, সাপ্তাহিক সমাবেশ থেকে নিবিড় রিট্রিট—সবার জন্যই রয়েছে সাধনা ও উপলব্ধি গভীর করার সুযোগ।",
  joinTitle: "আমাদের সাথে যোগ দিন",
  join: "আপনি বৌদ্ধধর্ম সম্পর্কে জানতে আগ্রহী হোন, ধ্যান অনুশীলন শুরু করতে চান বা সমমনা সাধকদের সংঘ খুঁজছেন—আমাদের বিহারে আসার এবং আমাদের কার্যক্রম দেখার আমন্ত্রণ রইল।",
  practices: "আমাদের সাধনা অন্বেষণ করুন",
  teachers: "আমাদের গুরুদের সাথে পরিচিত হোন",

};

export default function AboutPage() {
  const t = getLang() === "bn" ? bn : en;
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <section style={{ position: "relative", overflow: "hidden", minHeight: "560px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/WhatsApp Image 2026-04-25 at 14.44.57.jpeg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", zIndex: 0 }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.48)", zIndex: 1 }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6">
                {t.storyTitle}
              </h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
                <p>
                  {t.story1}
                </p>
                <p>
                  {t.story2}
                </p>
                <p>
                  {t.story3}
                </p>
                <p>
                  {t.story4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-8 text-center">
              {t.templeTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/WhatsApp Image 2026-04-25 at 14.44.55.jpeg"
                  alt={t.templeAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/WhatsApp Image 2026-04-25 at 14.44.57.jpeg"
                  alt={t.templeAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/WhatsApp Image 2026-04-25 at 14.44.58.jpeg"
                  alt={t.templeAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-quote text-quote-xl sm:text-quote-2xl text-primary-dark italic leading-relaxed text-center border-l-0 pl-0">
              <p className="mb-6">
                {t.quote}
              </p>
              <footer className="text-lg text-neutral-600 not-italic font-normal">
                {t.quoteBy}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-gentle">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  {t.missionTitle}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t.mission}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-gentle">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  {t.visionTitle}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t.vision}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-gentle">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  {t.valuesTitle}
                </h3>
                <ul className="space-y-3 text-neutral-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t.v1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t.v2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t.v3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t.v4}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t.v5}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-8 text-center">
              {t.communityTitle}
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
                <p>
                  {t.c1}
                </p>
                <p>
                  {t.c2}
                </p>
                <p>
                  {t.c3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6">
              {t.joinTitle}
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {t.join}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/practices"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.practices}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/venerable-introduction"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.teachers}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
