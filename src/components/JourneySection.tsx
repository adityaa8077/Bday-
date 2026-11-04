'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const journeySteps = [
  {
    title: "When Our Paths Crossed",
    description: "Out of all the billions of paths in this universe, ours crossed, and I will thank the universe for that for the rest of my life. You walked into my life and made it brighter, softer, and more meaningful.",
    image: "/images/chetanya/c1.jpeg",
    goldenQuote: "You may be my little sister by bond, but what you mean to me, words have never been enough to say.",
    goldenSubtext: "You are the family my heart chose, and never let go of.",
    flower: "🌸",
  },
  {
    title: "Family Chosen By Heart",
    description: "Some bonds are not defined by blood, but by pure love, mutual respect, and silent prayers. You are not just someone I care about — you are someone I protect, celebrate, and thank God for every single day.",
    image: "/images/chetanya/c2.jpeg",
    goldenQuote: "There are prayers I never say out loud. Every day, silently, I ask for your happiness.",
    goldenSubtext: "I celebrate your small victories as if they were my own.",
    flower: "🌷",
  },
  {
    title: "Chasing The IIM Dream",
    description: "Watching you stay dedicated, working through long study hours with quiet determination, and aiming for IIM Ahmedabad. Your focus and ambition make me beam with pride every time I think of you.",
    image: "/images/chetanya/iim.jpeg",
    goldenQuote: "May you reach IIM Ahmedabad, and may every late night effort come back to you as glorious success.",
    goldenSubtext: "Please take care of your health — you are far more precious than you know.",
    flower: "🏛️",
  },
  {
    title: "A Light on Heavy Days",
    description: "On days when everything feels overwhelming, just knowing that you are in my life brings immense peace. And whenever life feels heavy for you, remember your Bhaiya will always be the safe shelter you can turn to.",
    image: "/images/chetanya/c4.jpeg",
    goldenQuote: "On my hardest days, just thinking of you reminds me that something beautiful is still in my life.",
    goldenSubtext: "Never carry the weight of worries alone — I am always in your corner.",
    flower: "🤍",
  },
  {
    title: "A Brother's Lifelong Promise",
    description: "If I had a hundred lifetimes, I would choose to be your brother in every single one of them. You will always be my small sis, and I will always be proud of you, today, tomorrow, and forever.",
    image: "/images/chetanya/c5.jpeg",
    goldenQuote: "Wherever you are, whatever happens, your Bhaiya is right here. ✨",
    goldenSubtext: "With endless blessings, pride, and love for my little sister.",
    flower: "👑",
  },
];

export default function JourneySection() {
  const [ref] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-16 sm:py-28 px-4 sm:px-6 bg-deepBlack overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-warmGold/[0.03] blur-[160px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-roseGold/[0.03] blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warmGold/35 bg-warmGold/10 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="text-xs sm:text-sm font-inter tracking-[0.25em] text-warmGold uppercase font-semibold">
              ✨ Chapter by Chapter ✦ A Sacred Brotherhood Bond
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            Our Story, Sibling Bond
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
            &quot;Out of all the billions of paths in this universe, ours crossed, and I will thank the universe for that for the rest of my life.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        {/* Prologue Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-24 max-w-2xl mx-auto"
        >
          <div className="text-center mb-4">
            <span className="text-xs sm:text-sm font-inter uppercase tracking-[0.25em] text-warmGold font-semibold">
              📸 Prologue ✦ The Little Sister My Heart Chose
            </span>
          </div>

          <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] border border-warmGold/35 bg-[#0a070c] group">
            <Image
              src="/images/chetanya/c2.jpeg"
              alt="Chetanya"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95]"
              style={{ objectPosition: 'center 15%' }}
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/85 via-transparent to-deepBlack/30 pointer-events-none" />

            {/* Overlay badge on top */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-warmGold/40 text-[11px] font-inter text-warmGold uppercase tracking-wider font-semibold">
                ✨ Blessed Brother
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none text-center">
              <p className="font-cormorant text-base sm:text-xl text-softIvory italic">
                &quot;You may be my little sister by bond, but what you mean to me, words have never been enough to say. ✨&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* ═══════ THE TIMELINE ═══════ */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-warmGold/50 via-warmGold/20 to-transparent transform -translate-x-1/2"></div>

          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-10 mb-16 sm:mb-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-warmGold to-roseGold rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(212,175,55,0.7)] border-2 border-deepBlack"></div>

              {/* SIDE 1: Photo & Story Card */}
              <div className={`ml-10 md:ml-0 md:w-[46%] w-full ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass rounded-2xl overflow-hidden border border-warmGold/20 hover:border-warmGold/40 transition-all duration-300 shadow-xl bg-[#100b12]/60">
                  <div className="relative w-full h-[300px] sm:h-[380px] bg-[#0c090e] overflow-hidden">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="100px"
                      className="object-cover filter blur-xl opacity-35 scale-110"
                    />
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain filter brightness-[0.95] hover:brightness-100 transition-all duration-500 z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/70 via-transparent to-transparent pointer-events-none z-20" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-warmGold text-xs sm:text-sm font-inter tracking-[0.2em] uppercase font-semibold block mb-1">
                      Chapter {idx + 1}
                    </span>
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-softIvory mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm sm:text-base text-softIvory/85 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* SIDE 2: Glowing Golden Letter */}
              <div className={`ml-10 md:ml-0 md:w-[46%] w-full ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} relative`}>
                <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-warmGold/30 bg-gradient-to-br from-[#1c131b]/80 via-[#130b14]/80 to-[#0a050a]/80 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-warmGold/10 rounded-full blur-2xl pointer-events-none -z-10" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-roseGold/10 rounded-full blur-2xl pointer-events-none -z-10" />

                  <div className="relative z-10 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl select-none">{step.flower}</span>
                      <span className="text-xs font-inter uppercase tracking-[0.25em] text-warmGold font-semibold">
                        A Brother&apos;s Heart ✦
                      </span>
                    </div>

                    <span className="text-3xl sm:text-4xl text-warmGold/60 font-serif leading-none block -mb-2 select-none">
                      “
                    </span>

                    <p className="font-playfair text-lg sm:text-2xl md:text-3xl font-bold gold-gradient italic leading-snug tracking-wide">
                      {step.goldenQuote}
                    </p>

                    <div className="w-12 h-[1px] bg-gradient-to-r from-warmGold to-transparent my-2" />

                    <p className="font-cormorant text-base sm:text-xl text-softIvory/80 italic leading-relaxed">
                      {step.goldenSubtext}
                    </p>

                    <div className="pt-2 flex items-center gap-2">
                      <span className="text-xs font-inter uppercase tracking-widest text-warmGold/70 font-medium">
                        Aditya to Chetanya
                      </span>
                      <span className="text-xs text-warmGold/50">✦</span>
                      <span className="text-sm select-none">✨</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
