'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface QualityCard {
  id: number;
  title: string;
  subtitle: string;
  thought: string;
  image: string;
  objectPos: string;
  heartEmoji: string;
  accentColor: string;
  isSpecial?: boolean;
}

const sisterQualities: QualityCard[] = [
  {
    id: 1,
    title: "Your Kind & Pure Heart",
    subtitle: "Rare, Genuine & Caring",
    thought: "You care about people so naturally and deeply. In a loud world, your soft heart, gentle empathy, and kind nature are a rare blessing I thank the universe for every day.",
    image: "/images/chetanya/c1.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "🤍",
    accentColor: "from-rose-500/20 to-amber-500/10",
  },
  {
    id: 2,
    title: "That Radiant Smile",
    subtitle: "Lighting Up Every Room",
    thought: "Your spontaneous, genuine smile is one of the most beautiful sights in the universe. On my hardest days, just thinking of your smile reminds me that something beautiful is still in my life.",
    image: "/images/chetanya/c2.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "✨",
    accentColor: "from-pink-500/20 to-rose-500/10",
  },
  {
    id: 3,
    title: "The IIM Ahmedabad Ambition",
    subtitle: "Targeting Asia's Best",
    thought: "Watching you aim for IIM Ahmedabad with quiet dedication and grit. May every late night study session and every bit of effort return to you as a victory that makes you smile.",
    image: "/images/chetanya/iim.jpeg",
    objectPos: "50% 50%",
    heartEmoji: "🏛️",
    accentColor: "from-amber-500/20 to-rose-500/10",
  },
  {
    id: 4,
    title: "Your Sharp Intellect",
    subtitle: "Brilliance Carried With Grace",
    thought: "You carry sharp intellect and natural capability without an ounce of arrogance. You approach challenges with a mature, thoughtful mind that will conquer every corporate height.",
    image: "/images/chetanya/c3.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "🌟",
    accentColor: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: 5,
    title: "Quiet Strength & Resilience",
    subtitle: "Unshakeable Grace Under Pressure",
    thought: "Even when things get overwhelming, you have this quiet inner strength. Please take care of your health first — you are far more precious to me than you know.",
    image: "/images/chetanya/c4.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "🌸",
    accentColor: "from-rose-500/20 to-purple-500/10",
  },
  {
    id: 6,
    title: "Effortless Warmth & Comfort",
    subtitle: "A Safe Haven Of Trust",
    thought: "Talking to you brings calm. You make those around you feel valued, listened to, and safe. That natural kindness is the signature of a truly magnificent soul.",
    image: "/images/chetanya/c5.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "💫",
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: 7,
    title: "Celebrating Small Victories",
    subtitle: "A Joy That Echoes",
    thought: "There are prayers I never say out loud. Every day, silently, I ask for your happiness. I celebrate your small victories as if they were my own.",
    image: "/images/chetanya/c1.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "🎉",
    accentColor: "from-amber-500/20 to-pink-500/10",
  },
  {
    id: 8,
    title: "Rare Authenticity",
    subtitle: "Wonderfully Yourself",
    thought: "In a world often masked with pretenses, you remain authentically, wonderfully yourself. Your sincerity and humility set you apart from anyone else.",
    image: "/images/chetanya/c2.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "👑",
    accentColor: "from-red-500/20 to-amber-500/10",
  },
  {
    id: 9,
    title: "Future Management Leader",
    subtitle: "Destined For High Achievements",
    thought: "The business world needs ethical, sharp, and compassionate minds like yours. IIM Ahmedabad will only be the first of many peaks you will summit.",
    image: "/images/chetanya/iim.jpeg",
    objectPos: "50% 50%",
    heartEmoji: "🚀",
    accentColor: "from-yellow-500/20 to-rose-500/10",
  },
  {
    id: 10,
    title: "Little Sister By Bond",
    subtitle: "Family My Heart Chose",
    thought: "Out of all billions of paths in this universe, ours crossed. Words have never been enough to describe what having you in my life means to me.",
    image: "/images/chetanya/c3.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "🤍",
    accentColor: "from-pink-500/20 to-rose-500/10",
  },
  {
    id: 11,
    title: "A Brother's Lifelong Bond",
    subtitle: "✦ A Hundred Lifetimes Of Sibling Pride ✦",
    thought: "If I had a hundred lifetimes, I would choose to be your brother in every single one of them. You will always be my small sis, and I will always be proud of you, today, tomorrow, and forever. Wherever you are, whatever happens, your Bhaiya is right here.",
    image: "/images/chetanya/c4.jpeg",
    objectPos: "50% 15%",
    heartEmoji: "👑",
    accentColor: "from-amber-600/30 via-warmGold/20 to-amber-600/30",
    isSpecial: true,
  },
];

export default function ThingsNeverChange() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [likedCards, setLikedCards] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({
    1: 450, 2: 580, 3: 720, 4: 610, 5: 495,
    6: 530, 7: 640, 8: 510, 9: 780, 10: 890, 11: 1200,
  });
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; cardId: number; x: number }[]>([]);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyLiked = !!likedCards[id];
    setLikedCards(prev => ({ ...prev, [id]: !isCurrentlyLiked }));
    setLikeCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + (isCurrentlyLiked ? -1 : 1),
    }));

    if (!isCurrentlyLiked) {
      const heartId = Date.now() + Math.random();
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      setFloatingHearts(prev => [...prev, { id: heartId, cardId: id, x }]);
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== heartId));
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section
      id="things-never-change"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0e070c] to-deepBlack overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warmGold/10 border border-warmGold/30 mb-4">
            <span className="text-warmGold">✨</span>
            <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] text-warmGold uppercase font-semibold">
              Treasures of Sisterhood ✦ Sibling Pride
            </span>
            <span className="text-warmGold">✨</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient mb-6 leading-tight">
            Reasons I&apos;m So Proud To Be Your Bhaiya
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-softIvory/90 font-medium italic max-w-3xl mx-auto leading-relaxed">
            &quot;You may be my little sister by bond, but what you mean to me, words have never been enough to say.
            You are family my heart chose, and never let go of.&quot;
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-warmGold/40" />
            <span className="text-warmGold text-lg">✦ 🌸 ✦</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-warmGold/40" />
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {sisterQualities.map((item, idx) => {
            const isLiked = !!likedCards[item.id];
            const isSpecialCard = item.isSpecial;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ perspective: 1000 }}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col ${isSpecialCard
                    ? 'md:col-span-2 lg:col-span-3 border-warmGold/60 bg-gradient-to-br from-[#1d1410]/95 via-[#150f0b]/95 to-[#241710]/95 shadow-2xl shadow-warmGold/20'
                    : 'border-warmGold/25 hover:border-warmGold/60 bg-[#120a10]/60 hover:bg-[#190d16]/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-warmGold/20'
                  }`}
              >
                {/* Glow ambient background */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none -z-10`} />

                {/* Top Badge & Heart Button */}
                <div className="p-4 sm:p-5 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <span className="font-playfair text-xs tracking-widest text-warmGold uppercase font-semibold px-2.5 py-1 rounded-full bg-warmGold/10 border border-warmGold/25">
                      {isSpecialCard ? "✦ A Brother's Eternal Promise ✦" : `Gem #${String(idx + 1).padStart(2, '0')}`}
                    </span>
                    <span className="text-sm select-none">{item.heartEmoji}</span>
                  </div>

                  {/* Interactive Heart Button */}
                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer ${isLiked
                        ? 'bg-warmGold/20 border-warmGold/60 text-warmGold scale-105'
                        : 'bg-white/5 border-white/10 text-softIvory/70 hover:text-warmGold hover:border-warmGold/40'
                      }`}
                    title="Send a blessing"
                    aria-label={`Bless quality ${item.title}`}
                  >
                    <motion.span
                      animate={isLiked ? { scale: [1, 1.35, 1] } : {}}
                      transition={{ duration: 0.3 }}
                      className="text-base"
                    >
                      {isLiked ? '✨' : '🤍'}
                    </motion.span>
                    <span className="font-inter text-xs font-semibold">
                      {isLiked ? 'Blessed!' : likeCounts[item.id] || 0}
                    </span>
                  </button>
                </div>

                {/* Card Layout */}
                <div className={`${isSpecialCard ? 'md:grid md:grid-cols-12 md:items-center' : 'flex flex-col flex-1'}`}>
                  {/* Photo Container */}
                  <div
                    className={`relative overflow-hidden ${isSpecialCard
                        ? 'md:col-span-5 h-[320px] sm:h-[420px] md:h-[460px] m-4 sm:m-6 rounded-2xl border border-warmGold/40'
                        : 'w-full h-[280px] sm:h-[320px] px-4'
                      }`}
                  >
                    <div className={`relative w-full h-full rounded-xl overflow-hidden ${!isSpecialCard ? 'border border-warmGold/20' : ''}`}>
                      {/* 100% Full Photo with Ambient Blur */}
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="100px"
                        className="object-cover filter blur-xl opacity-35 scale-110 pointer-events-none"
                      />
                      <Image
                        src={item.image}
                        alt={`Chetanya - ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-transparent pointer-events-none z-20" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-30">
                        <span className="font-caveat text-xl sm:text-2xl text-softIvory drop-shadow-md">
                          Small Sis Chetanya 🌸
                        </span>
                        <span className="text-xs font-inter text-softIvory/80 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`p-5 sm:p-6 flex flex-col justify-between ${isSpecialCard ? 'md:col-span-7 md:pr-8' : 'flex-1'}`}>
                    <div>
                      <span className="font-inter text-xs tracking-wider text-warmGold uppercase font-semibold block mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className={`font-playfair font-bold text-softIvory group-hover:text-warmGold transition-colors duration-300 ${isSpecialCard ? 'text-3xl sm:text-4xl md:text-5xl mb-4 gold-gradient' : 'text-2xl sm:text-3xl mb-3'
                        }`}>
                        {item.title}
                      </h3>
                      <p className={`font-cormorant italic text-softIvory/90 leading-relaxed ${isSpecialCard ? 'text-xl sm:text-2xl md:text-3xl text-warmGold/95 font-medium' : 'text-lg sm:text-xl'
                        }`}>
                        &quot;{item.thought}&quot;
                      </p>
                    </div>

                    {isSpecialCard && (
                      <div className="mt-6 pt-6 border-t border-warmGold/30 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl animate-bounce">👑</span>
                          <div>
                            <p className="font-playfair text-base sm:text-lg text-warmGold font-bold">
                              Endless Blessings & Pride
                            </p>
                            <p className="font-cormorant text-sm sm:text-base text-softIvory/70 italic">
                              Wherever you are, whatever happens, your Bhaiya is right here.
                            </p>
                          </div>
                        </div>
                        <span className="font-caveat text-3xl sm:text-4xl text-warmGold font-bold">
                          Your Bhaiya, Aditya ✨
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-warmGold to-transparent transition-all duration-700 mx-auto" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Footer Affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center mt-16 sm:mt-24 max-w-3xl mx-auto border-t border-warmGold/15 pt-12 px-4"
        >
          <span className="text-3xl sm:text-4xl inline-block mb-3 animate-pulse">✨</span>
          <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-softIvory font-medium italic leading-relaxed">
            &quot;If I had a hundred lifetimes, I would choose to be your brother in every single one of them.
            <br />
            <span className="gold-gradient font-bold not-italic">
              You will always be my small sis, and I will always be proud of you.
            </span>&quot;
          </p>
          <p className="font-caveat text-2xl sm:text-3xl text-warmGold mt-4">
            Your Bhaiya, Aditya ✨
          </p>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-30"></div>
      </div>

      {/* Floating Sparkles Burst Animation */}
      <AnimatePresence>
        {floatingHearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -120, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ left: heart.x }}
            className="fixed bottom-20 pointer-events-none z-50 text-3xl select-none"
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-warmGold/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
