'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = [
  {
    trigger: "Need Motivation",
    title: "Open When You Chase Your IIM Dream",
    content: [
      "Hey small sis. When the prep gets intense and late nights feel long, remember who you are.",
      "You have a brilliant, sharp mind and an unstoppable dedication that is going to take you straight to IIM Ahmedabad. Every mock, every concept, and every ounce of effort is building your future.",
      "Never doubt your potential. When exam anxiety whispers, remember that your Bhaiya has seen your grit and believes in you with all his heart.",
      "Give it your all, stay consistent, and remember: IIM Ahmedabad is waiting for you! 🏛️✨"
    ]
  },
  {
    trigger: "Health & Rest",
    title: "Open When You Feel Unwell or Tired",
    content: [
      "Listen to me carefully, Chetanya. Please take care of your health before anything else.",
      "No exam, no goal, and nothing in this world is more important than your health and peace of mind. If you are feeling tired or under the weather, put your books aside, drink warm water, take your medicines, and get deep rest.",
      "You are far more precious to me than you know, and I pray every day that you stay completely fine, energetic, and healthy.",
      "Take a deep breath and rest today. Your Bhaiya is looking out for you. 🌸🤍"
    ]
  },
  {
    trigger: "Miss Your Bhaiya",
    title: "Open When You Miss Your Bhaiya",
    content: [
      "Hey small sis! Missing your Bhaiya? That honestly brings the warmest smile to my face.",
      "Remember that no distance or busy days can ever change our bond. Out of billions of paths in this universe, ours crossed, and you became family my heart chose forever.",
      "Whenever you need advice, someone to vent to, or just a brother to remind you that everything will be okay, I am always right here.",
      "You will always be my little sister, and I am always here for you. ✨"
    ]
  },
  {
    trigger: "Need Confidence",
    title: "Open When You Need Confidence",
    content: [
      "Listen to me, Chetanya. You are INCREDIBLE, and you carry both intellect and grace so effortlessly.",
      "In a world where people often second-guess themselves, remember the quiet strength you hold. You walk into challenges with determination and come out stronger every single time.",
      "Whatever test, interview, or decision you're facing right now — you've got this. You've always had this.",
      "Hold your head high. I am cheering for you from the front row! 🌟"
    ]
  },
  {
    trigger: "Need A Smile",
    title: "Open When You Need A Smile",
    content: [
      "Fun fact: having Aditya as your Bhaiya automatically makes you one of the coolest people on the planet. Science has confirmed it.",
      "Did that make you smile? Because your smile lights up everything and reminds me that something beautiful is always present in this world.",
      "Don't take life too seriously today. Eat something sweet, take a break, and laugh a little.",
      "Keep that radiant smile intact, small sis! ✨"
    ]
  },
  {
    trigger: "Proud of You",
    title: "Open When You Need To Hear 'I'm Proud Of You'",
    content: [
      "Chetanya, I celebrate your small victories as if they were my own.",
      "I see how hard you try, how genuinely you care for those around you, and how you never give up on your ambitions.",
      "If I had a hundred lifetimes, I would choose to be your brother in every single one of them. You make me proud today, tomorrow, and forever.",
      "Keep shining, small sis. Your Bhaiya will always stand beside you. 🌸"
    ]
  },
];

interface OpenWhenLettersProps {
  onConfessionOpen: () => void;
}

export default function OpenWhenLetters({ onConfessionOpen }: OpenWhenLettersProps) {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  return (
    <section
      id="open-when"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-warmGold/[0.03] blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-netflixBlack/90 via-deepBlack/80 to-netflixBlack/90 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient tracking-wide"
          >
            Open When...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto px-2"
          >
            &quot;Letters written by your Bhaiya Aditya for you, Chetanya — for every mood, every milestone, and every step towards your dreams.&quot;
          </motion.p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Regular Envelopes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {letters.map((letter, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setActiveLetter(idx)}
              className="group relative cursor-pointer min-h-[160px] sm:aspect-[1.58] w-full rounded border border-warmGold/20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-lg flex flex-col justify-between p-5 sm:p-6 overflow-hidden hover:border-warmGold/60 hover:shadow-[0_12px_25px_rgba(212,175,55,0.12)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-warmGold/20 to-transparent" />
              <div 
                className="absolute top-0 left-0 right-0 h-8 sm:h-10 border-b border-warmGold/5 origin-top scale-y-100 group-hover:scale-y-105 transition-transform duration-300 pointer-events-none"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', background: 'rgba(212, 175, 55, 0.02)' }}
              />

              <h3 className="font-playfair text-base sm:text-lg font-bold text-softIvory/85 group-hover:text-warmGold transition-colors duration-300 z-10">
                {letter.title}
              </h3>

              <div className="flex justify-center items-center py-2 sm:py-4 z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#b38627] to-[#735112] border border-warmGold/50 flex items-center justify-center shadow-lg relative group-hover:scale-110 transition-transform duration-300">
                  <span className="text-softIvory/90 text-sm font-semibold select-none">✦</span>
                  <div className="absolute inset-1 rounded-full border border-warmGold/20 opacity-40"></div>
                </div>
              </div>

              <span className="font-cormorant text-xs italic text-softIvory/40 text-center tracking-widest block z-10 border-t border-softIvory/5 pt-2 group-hover:text-softIvory/70 transition-colors duration-300">
                &quot;Tap to break seal&quot;
              </span>
            </motion.div>
          ))}
        </div>

        {/* ═══════ THE 7TH ENVELOPE — BROTHERHOOD LETTER TRIGGER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={onConfessionOpen}
            className="group relative cursor-pointer w-full max-w-lg min-h-[190px] sm:aspect-[1.58] rounded-lg border-2 border-warmGold/60 bg-gradient-to-br from-[#1d1410] via-[#140e0b] to-[#0a0705] shadow-xl flex flex-col justify-between p-6 sm:p-8 overflow-hidden hover:border-warmGold hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)]"
          >
            {/* Warm gold pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded bg-warmGold/10"
              animate={{ opacity: [0.08, 0.22, 0.08] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-warmGold to-transparent" />

            <h3 className="font-playfair text-lg sm:text-2xl font-bold text-warmGold group-hover:text-white transition-colors duration-300 z-10 text-center leading-snug">
              Open For A Special Birthday Letter From Your Bhaiya 💌
            </h3>

            <div className="flex justify-center items-center py-3 sm:py-4 z-10">
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-warmGold to-[#8c6b1b] border-2 border-warmGold/70 flex items-center justify-center shadow-2xl relative"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-white text-xl sm:text-2xl select-none">🎂</span>
                <div className="absolute inset-1 rounded-full border border-white/30 opacity-60"></div>
              </motion.div>
            </div>

            <span className="font-cormorant text-sm sm:text-base italic text-warmGold/80 text-center tracking-widest block z-10 border-t border-warmGold/20 pt-2 group-hover:text-warmGold transition-colors duration-300">
              &quot;Happy Birthday, my dearest Chetanya — from your Bhaiya Aditya ✨&quot;
            </span>
          </motion.div>
        </motion.div>

        {/* Letter Modal */}
        <AnimatePresence>
          {activeLetter !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLetter(null)}
              className="fixed inset-0 z-[110] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
            >
              {/* Ambient soft glow in background of modal */}
              <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/20 blur-3xl rounded-full" />
              </div>
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg bg-gradient-to-b from-[#faf6e8] to-[#f4edd0] text-[#3D2F26] p-6 sm:p-10 rounded border border-[#E8DFD0] shadow-2xl relative flex flex-col justify-between max-h-[85vh] overflow-y-auto cursor-default"
              >
                <div className="absolute top-0 bottom-0 left-4 sm:left-6 w-[1px] bg-[#E8DFD0]/50" />

                <button
                  onClick={() => setActiveLetter(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#8C7A6B] hover:text-[#3D2F26] transition-colors p-2 cursor-pointer"
                  aria-label="Close Letter"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="border-b border-[#E8DFD0] pb-3 sm:pb-4 mb-4 sm:mb-6 ml-4 sm:ml-6">
                  <span className="font-playfair text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8C7A6B] uppercase block mb-1">
                    From Your Bhaiya Aditya
                  </span>
                  <h4 className="font-playfair text-lg sm:text-2xl font-bold text-[#3D2F26]">
                    {letters[activeLetter].title}
                  </h4>
                </div>

                <div className="space-y-4 sm:space-y-6 font-cormorant italic text-base sm:text-xl text-[#4A3B32] leading-relaxed ml-4 sm:ml-6 flex-1 py-2 sm:py-4">
                  {letters[activeLetter].content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="border-t border-[#E8DFD0] pt-4 sm:pt-6 mt-4 sm:mt-6 text-center ml-4 sm:ml-6">
                  <p className="font-cormorant text-sm sm:text-base text-[#8C7A6B] italic">
                    Always proud of you, Chetanya. Your Bhaiya is right here.
                  </p>
                  <span className="text-lg sm:text-xl inline-block mt-2 select-none">✨</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
