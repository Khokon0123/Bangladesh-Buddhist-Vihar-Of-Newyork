import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticleDetail {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
}

const articlesData: Record<string, ArticleDetail> = {
  "understanding-mindfulness": {
    id: "understanding-mindfulness",
    title: "Understanding Mindfulness: A Beginner's Guide to Present-Moment Awareness",
    excerpt: "Discover the transformative power of mindfulness and learn practical techniques to cultivate present-moment awareness in your daily life.",
    category: "Meditation",
    author: "Venerable Master Chen",
    date: "March 15, 2024",
    readTime: "8 min",
    content: [
      "Mindfulness is the practice of paying deliberate attention to the present moment without judgment. It is one of the most fundamental teachings in Buddhism and has been practiced for over 2,500 years. In recent decades, mindfulness has gained widespread recognition in the West as a powerful tool for reducing stress, improving mental clarity, and cultivating inner peace.",
      "At its core, mindfulness means being fully present — aware of where we are, what we are doing, and how we are feeling, without being overly reactive or overwhelmed by what is happening around us. It sounds simple, yet in our fast-paced, distraction-filled world, truly being present is one of the most challenging practices we can undertake.",
      "The practice begins with the breath. By directing our attention to the natural rhythm of breathing — the rise and fall of the chest, the feeling of air entering and leaving the nostrils — we anchor ourselves in the present moment. When the mind wanders, as it inevitably will, we simply notice this with kindness and return our attention to the breath. This returning is itself the practice.",
      "Beyond formal sitting meditation, mindfulness can be cultivated in every activity of daily life. Washing dishes, walking, eating, listening — each of these can become an opportunity for mindful awareness. The key is to bring full attention to whatever we are doing, rather than letting the mind drift to past regrets or future worries.",
      "Research has shown that regular mindfulness practice can reduce anxiety, improve focus, strengthen relationships, and even change the physical structure of the brain. But perhaps more importantly, mindfulness helps us reconnect with the richness of our own experience — with the colors, sounds, tastes, and sensations that make up each moment of our lives.",
      "To begin your mindfulness practice, start with just five minutes each day. Sit comfortably, close your eyes, and bring your attention to the breath. When thoughts arise, acknowledge them without judgment and gently return to the breath. Over time, you can gradually extend the length of your sessions and bring mindful awareness into more areas of your daily life.",
    ],
  },
  "compassion-practice": {
    id: "compassion-practice",
    title: "Cultivating Compassion: The Heart of Buddhist Practice",
    excerpt: "Explore how compassion practice can transform your relationships and bring greater peace to your life through loving-kindness meditation.",
    category: "Practice",
    author: "Venerable Bhikkhuni Sunita",
    date: "March 10, 2024",
    readTime: "6 min",
    content: [
      "Compassion — the wish for all beings to be free from suffering — is considered the very heart of Buddhist practice. The Pali word for compassion is karuna, and it is one of the four Brahmaviharas, or divine abodes, alongside loving-kindness (metta), sympathetic joy (mudita), and equanimity (upekkha).",
      "The practice of compassion begins with ourselves. This may seem counterintuitive — we often think of compassion as directed outward toward others. But the Buddha taught that we cannot truly love and care for others if we are unable to extend that same care to ourselves. Self-compassion is not selfishness; it is the foundation upon which genuine compassion for others is built.",
      "Loving-kindness meditation (metta bhavana) is one of the most beautiful and transformative practices in the Buddhist tradition. It involves the systematic cultivation of goodwill toward all beings, beginning with oneself and gradually expanding outward to include loved ones, neutral people, difficult people, and ultimately all living beings without exception.",
      "The practice typically begins with the silent repetition of phrases such as: 'May I be happy. May I be healthy. May I be safe. May I live with ease.' As the heart softens and opens, we then extend these wishes outward: 'May you be happy. May you be healthy. May you be safe. May you live with ease.'",
      "Through regular compassion practice, we begin to notice a shift in how we relate to others. We become less reactive, more patient, and more able to see the humanity and suffering in those around us — even those who have hurt us. Compassion does not mean approving of harmful behavior, but it does mean recognizing that all beings, including ourselves, are doing the best they can with the understanding they have.",
      "Begin your compassion practice today by taking a few moments to place your hand on your heart and offer yourself the wish: 'May I be well. May I be at peace.' Notice what arises with kindness and curiosity, and let this be the beginning of a lifelong journey of the open heart.",
    ],
  },
  "four-noble-truths-modern-life": {
    id: "four-noble-truths-modern-life",
    title: "Applying the Four Noble Truths to Modern Life",
    excerpt: "How ancient Buddhist wisdom can help us navigate the challenges and stresses of contemporary living with greater clarity and peace.",
    category: "Teachings",
    author: "Venerable Master Li",
    date: "March 5, 2024",
    readTime: "10 min",
    content: [
      "The Four Noble Truths are the foundation of all Buddhist teaching. Spoken by the Buddha in his very first discourse after his enlightenment, they offer a precise and compassionate diagnosis of the human condition and a clear path toward liberation. Far from being abstract philosophy, these truths are immediately relevant to every aspect of modern life.",
      "The First Noble Truth is dukkha — often translated as suffering, but more accurately meaning unsatisfactoriness or dis-ease. The Buddha was not teaching pessimism; he was pointing to something we all know to be true: life involves difficulty, impermanence, and a fundamental sense that things are not quite right. We experience this in our relationships, our health, our work, and our endless pursuit of happiness through external circumstances.",
      "The Second Noble Truth identifies the cause of suffering: tanha, or craving. This craving manifests in three ways — craving for pleasant experiences, craving to avoid unpleasant experiences, and craving for existence or non-existence. In modern life, we see this in our addiction to phones, our avoidance of discomfort, and our endless striving for more — more success, more possessions, more approval.",
      "The Third Noble Truth offers genuine hope: the cessation of suffering is possible. Nibbana, or liberation, is not a distant mystical state available only to monks in caves. It is accessible here and now, in the moments when we release our grip on craving and aversion and allow things to be as they are.",
      "The Fourth Noble Truth is the Noble Eightfold Path — the practical means by which we move from suffering toward liberation. This path covers every dimension of human life: our understanding, our intentions, our speech, our actions, our livelihood, our effort, our mindfulness, and our concentration.",
      "To apply these truths in daily life, begin by simply noticing when you are suffering — not to wallow in it, but to investigate it with curiosity. What are you craving or avoiding? Can you release your grip just slightly, just in this moment? This is the practice of the Four Noble Truths, lived one breath at a time.",
    ],
  },
  "walking-meditation": {
    id: "walking-meditation",
    title: "The Art of Walking Meditation: Finding Peace in Motion",
    excerpt: "Learn the practice of walking meditation, a powerful way to cultivate mindfulness and awareness through gentle movement.",
    category: "Meditation",
    author: "Venerable Ajahn Somchai",
    date: "February 28, 2024",
    readTime: "7 min",
    content: [
      "Walking meditation is one of the foundational practices of the Theravada Buddhist tradition. Often practiced in conjunction with sitting meditation, it offers a way to cultivate mindfulness through movement and can be an invaluable bridge between formal meditation and the activities of daily life.",
      "The practice is deceptively simple. Find a quiet path of about ten to twenty steps in length. Stand still for a moment, feeling the weight of your body on your feet, the contact of the ground beneath you. Take a breath. Then begin to walk, very slowly, paying careful attention to the physical sensations of each step.",
      "As you walk, you may internally note the movement of each foot: 'lifting, moving, placing.' Feel the heel leave the ground, the shift of weight, the ball of the foot making contact. Walk as if you are kissing the earth with each step — a phrase beloved of the Vietnamese Zen master Thich Nhat Hanh.",
      "When you reach the end of your path, pause, turn mindfully, and walk back. The turning itself is an opportunity for awareness — notice the shifting of weight, the rotation of the body, the change of direction.",
      "Walking meditation is particularly valuable for people who find sitting difficult, or for those whose minds are very restless. The movement of the body gives the mind something to anchor to, making it easier to stay present. It is also a wonderful way to practice outdoors, in nature, where the sounds and sights of the natural world can deepen rather than distract from awareness.",
      "Try beginning with just ten minutes of walking meditation each day, ideally before or after your sitting practice. Over time, you may find that the qualities of mindfulness cultivated on the meditation path begin to infuse your ordinary walking — through the park, to the bus stop, through the corridors of your workplace. Every step becomes a homecoming.",
    ],
  },
  "karma-understanding": {
    id: "karma-understanding",
    title: "Understanding Karma: Beyond Cause and Effect",
    excerpt: "A deeper look into the Buddhist concept of karma and how understanding it can help us make wiser choices in our daily lives.",
    category: "Teachings",
    author: "Venerable Master Wang",
    date: "February 22, 2024",
    readTime: "9 min",
    content: [
      "Karma is perhaps the most misunderstood concept in Buddhist teaching. In popular culture, it is often reduced to a simple cosmic scorecard — do good things and good things happen to you; do bad things and bad things happen. While this contains a kernel of truth, the Buddhist understanding of karma is far more subtle, profound, and immediately practical.",
      "The word karma simply means action. More specifically, it refers to intentional action — actions that arise from volition, from the choices we make moment by moment. The Buddha taught that it is our intentions that shape our experience, both inner and outer. As he said: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a corrupt mind, suffering follows, as the wheel follows the hoof of an ox.'",
      "Karma is not fate or predestination. We are not locked into a predetermined future based on past actions. Every moment offers the opportunity to act differently, to choose more wisely, to cultivate greater kindness and awareness. This is the liberating teaching within the doctrine of karma: we are not victims of our past; we are the architects of our present and future.",
      "Understanding karma helps us take responsibility for our lives without falling into guilt or blame. When difficulties arise, rather than asking 'Why is this happening to me?', we can ask 'What can I learn from this? How can I respond wisely?' When things go well, rather than attributing our success entirely to luck or external factors, we can recognize the role our own choices and efforts have played.",
      "The cultivation of positive karma is not about earning cosmic rewards. It is about the immediate effect that our actions have on our minds and hearts. When we act with kindness, we feel more open and connected. When we act with greed or anger, we feel contracted and isolated. Karma is less about future consequences and more about the quality of the mind we cultivate right now.",
      "To work skillfully with karma in daily life, begin by pausing before significant actions and asking: 'What is my intention here? Is this action rooted in wisdom and compassion, or in greed, hatred, or delusion?' This simple practice of intentional awareness is the heart of karmic cultivation.",
    ],
  },
  "morning-routine": {
    id: "morning-routine",
    title: "Creating a Mindful Morning Routine",
    excerpt: "Start your day with intention and awareness. Practical tips for incorporating Buddhist practices into your morning routine.",
    category: "Practice",
    author: "Venerable Bhikkhuni Pema",
    date: "February 18, 2024",
    readTime: "5 min",
    content: [
      "How we begin the morning sets the tone for the entire day. In the Buddhist tradition, the morning hours are considered especially auspicious for practice — the mind is fresh, the day's activities have not yet begun to crowd in, and there is a natural quality of stillness in the early hours that supports meditation and reflection.",
      "A mindful morning routine need not be elaborate or time-consuming. Even fifteen to thirty minutes of intentional practice can make a profound difference in the quality of your day. The key is consistency — a modest practice done daily is far more valuable than an ambitious practice done rarely.",
      "Begin by waking gently, without immediately reaching for your phone. Take a few moments to simply notice that you are alive — feel the warmth of your body, the weight of the blanket, the quality of the morning light. Offer a brief moment of gratitude for this new day and the opportunity it brings.",
      "After rising, you might begin with a short period of sitting meditation — even five or ten minutes of following the breath can center the mind and establish a quality of awareness that carries through the day. Some practitioners chant or recite the Three Refuges and Five Precepts as a way of reaffirming their commitment to the Buddhist path.",
      "Breakfast can itself become a meditation — eating slowly, savoring each bite, and reflecting on the many beings whose efforts have contributed to the food on your plate. This practice of conscious eating cultivates both mindfulness and gratitude.",
      "Before moving into the activities of the day, take a moment to set an intention. What quality do you wish to cultivate today? Patience? Generosity? Attentiveness? Holding this intention lightly as you go through your day is a powerful way to live more deliberately and align your actions with your deepest values.",
    ],
  },
  "dealing-with-anxiety": {
    id: "dealing-with-anxiety",
    title: "Buddhist Approaches to Dealing with Anxiety",
    excerpt: "How Buddhist meditation and mindfulness practices can help manage anxiety and cultivate inner calm in challenging times.",
    category: "Wellness",
    author: "Venerable Master Chen",
    date: "February 12, 2024",
    readTime: "8 min",
    content: [
      "Anxiety is one of the most common forms of suffering in the modern world. Characterized by worry, fear, and a sense of impending threat, anxiety can be both deeply uncomfortable and profoundly disabling. The Buddhist tradition offers time-tested practices that can help us understand and work skillfully with anxious states of mind.",
      "From a Buddhist perspective, anxiety often arises from our relationship with impermanence and uncertainty. We want things to be stable and predictable, and when they are not — when the future is uncertain, when things we value are threatened — we experience fear. The mind generates anxious thoughts in an attempt to control what is fundamentally uncontrollable.",
      "One of the most powerful Buddhist teachings for working with anxiety is the practice of turning toward, rather than away from, the experience of anxiety. Rather than trying to suppress or escape the anxious feeling, we can investigate it with curious, compassionate attention: Where is it in the body? What does it feel like? Does it have a color or shape? What thoughts are associated with it?",
      "The practice of mindfulness is particularly helpful for anxiety because it interrupts the habitual chain of anxious thinking. When we notice that we are caught in a cycle of worry, we can gently redirect attention to the present moment — to the breath, the body, the sounds around us. This does not make the anxiety disappear, but it prevents us from adding fuel to the fire through continued rumination.",
      "Loving-kindness meditation can also be a powerful antidote to anxiety. Anxiety often involves a contracted, self-focused quality of attention. By deliberately expanding our circle of care to include others — by wishing others well, by recognizing that suffering is a shared human experience — we can soften the intensity of our own distress.",
      "If you are struggling with anxiety, be gentle with yourself. Begin with very small practices — a few mindful breaths, a moment of self-compassion, a brief loving-kindness meditation. Over time, these small practices accumulate and can create a significant shift in how you relate to anxiety and to the uncertainties of life.",
    ],
  },
  "sutra-study": {
    id: "sutra-study",
    title: "An Introduction to Sutra Study",
    excerpt: "A guide to reading and understanding Buddhist sutras, with recommendations for beginners and practical study methods.",
    category: "Teachings",
    author: "Venerable Master Li",
    date: "February 8, 2024",
    readTime: "12 min",
    content: [
      "The sutras — the recorded teachings of the Buddha — are among the world's most profound and beautiful spiritual literature. For over two thousand years, Buddhist practitioners have drawn wisdom, inspiration, and guidance from these ancient texts. Yet for many Westerners approaching Buddhism, the sutras can seem daunting, filled with unfamiliar terminology and structured in ways that differ significantly from modern reading material.",
      "Sutra study is traditionally understood as one of three essential supports for Buddhist practice, alongside meditation and ethical conduct. The Buddha himself encouraged his disciples to hear the teachings, reflect on them carefully, and then put them into practice — this three-fold approach of study, reflection, and meditation is sometimes called the path of learning, contemplation, and cultivation.",
      "For beginners, the Dhammapada is perhaps the most accessible entry point into the Buddhist canon. This collection of verses attributed to the Buddha covers topics ranging from the nature of mind to the cultivation of virtue, and its wisdom is expressed in clear, poetic language that speaks across centuries. Another excellent starting point is the Discourse on the Full Awareness of Breathing (Anapanasati Sutta), which provides detailed instructions for mindfulness of breathing.",
      "When approaching a sutra, it is helpful to begin with a moment of settling — taking a few breaths, setting an intention to be open and receptive. Read slowly, allowing the words to land. When a passage strikes you — whether with clarity, confusion, or resonance — pause and sit with it. Sutra study is not primarily an intellectual exercise; it is a contemplative practice.",
      "It can also be enormously valuable to study sutras in a group setting, where different perspectives and questions can illuminate aspects of the text that might be missed in solitary reading. Many Buddhist centers, including our own, offer regular sutra study groups that provide both guidance and community.",
      "As you deepen your sutra study, you will begin to notice connections between different teachings, and between the teachings and your own experience. This is one of the great joys of the Buddhist path — the discovery that ancient wisdom speaks directly to our contemporary lives, offering guidance and comfort as fresh and relevant as if the Buddha had spoken the words this very morning.",
    ],
  },
  "gratitude-practice": {
    id: "gratitude-practice",
    title: "The Practice of Gratitude in Buddhism",
    excerpt: "Discover how gratitude practice can deepen your spiritual journey and bring more joy and contentment into your life.",
    category: "Practice",
    author: "Venerable Bhikkhuni Sunita",
    date: "February 3, 2024",
    readTime: "6 min",
    content: [
      "Gratitude is not often the first quality that comes to mind when we think of Buddhist practice. We more readily associate Buddhism with equanimity, mindfulness, or compassion. Yet the Pali word katannuta — translated as gratitude or thankfulness — is regarded in the Buddhist tradition as one of the marks of a spiritually mature person, and gratitude practice can be a profound and transformative dimension of the spiritual path.",
      "The Buddha spoke frequently of the importance of recognizing and appreciating the kindness and support we receive from others. In one teaching, he described those who are grateful as 'the best of people,' and noted that ingratitude is a form of heedlessness that perpetuates suffering. Gratitude, by contrast, opens the heart and deepens our sense of connection with all beings.",
      "One of the simplest and most powerful gratitude practices is a daily review, conducted either at the beginning or end of the day. Take a few minutes to bring to mind three specific things for which you are grateful. These need not be grand or extraordinary — the warmth of sunlight, a kind word from a friend, the simple fact of having food to eat. The practice is to genuinely feel the gratitude, allowing it to fill the heart rather than simply listing items intellectually.",
      "Gratitude practice works in part by training the attention to notice what is present and positive, rather than focusing exclusively on what is absent or wrong. The mind naturally tends toward what psychologists call the 'negativity bias' — giving more weight to negative experiences than positive ones. Gratitude practice gently rebalances this tendency, without denying the reality of difficulty and suffering.",
      "In the Buddhist context, gratitude extends beyond our immediate circumstances to encompass the entire chain of causes and conditions that support our existence. We can feel gratitude for the teachers who have transmitted the Dharma across generations, for the monastic community that has preserved the practices, for the farmers who grew our food, for the earth that supports all life. This expansive gratitude gradually dissolves the illusion of separateness and cultivates a sense of profound interconnection.",
      "Begin your gratitude practice today with a simple reflection: 'What is one thing I can appreciate right now, in this moment?' Let the answer arise naturally, and then rest with the feeling of appreciation for a moment before moving on. This small practice, repeated daily, can gradually transform the quality of your inner life and your relationship with the world around you.",
    ],
  },
};

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const article = articlesData[params.id];

  if (!article) {
    notFound();
  }

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
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} read</span>
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
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
