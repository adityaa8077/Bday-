'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const visionItems = [
  {
    title: "The Dream: IIM Ahmedabad 🏛️",
    description: "Walking into the prestigious Louis Kahn campus of IIM Ahmedabad, mastering management, and stepping into the world as an inspiring leader. Every mock test, every late night study session is carving your path to this glorious achievement.",
    image: "/images/chetanya/iim.jpeg",
    objectPos: "50% 50%",
    quote: "\"May you reach IIM Ahmedabad, and may every bit of effort come back to you as a success that makes you smile.\""
  },
  {
    title: "Good Health & Gentle Peace 🌸",
    description: "My deepest daily prayer for you: full, vibrant health, inner calm, and a heart free of stress. You are so precious to me, and seeing you healthy, smiling, and peaceful is the greatest joy for your Bhaiya.",
    image: "/images/chetanya/c1.jpeg",
    objectPos: "50% 15%",
    quote: "\"Please take care of your health. You are far more precious to me than you know, and I pray you are completely fine very soon.\""
  },
  {
    title: "Family Chosen By Heart 🤍",
    description: "Out of billions of paths in this universe, ours crossed. You are family my heart chose, and never let go of. Watching you grow into such a graceful, brilliant person fills my heart with gratitude.",
    image: "/images/chetanya/c4.jpeg",
    objectPos: "50% 15%",
    quote: "\"If I had a hundred lifetimes, I would choose to be your brother in every single one of them.\""
  },
  {
    title: "A Brother's Lifelong Support 👑",
    description: "Whatever heights you scale, whatever hurdles come your way, know that you never have to face anything alone. Your Bhaiya is always in your corner, cheering the loudest and supporting you always.",
    image: "/images/chetanya/c5.jpeg",
    objectPos: "50% 15%",
    quote: "\"You will always be my small sis, and I will always be proud of you, today, tomorrow and forever.\""
  },
];

export default function VisionBook() {
  const [activeVision, setActiveVision] = useState<number | null>(null);

  return (
    <section
      id="vision-book"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            Dreams, Prayers & Brotherly Blessings
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            Visions For Chetanya&apos;s Tomorrow
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/70 italic max-w-2xl mx-auto px-2">
            &quot;May life open every door of success for you, small sis, and take you straight to your highest aspirations.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {visionItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => setActiveVision(idx)}
              className="group cursor-pointer relative rounded-lg overflow-hidden border border-warmGold/20 hover:border-warmGold/60 transition-all duration-300 shadow-lg active:scale-98 bg-[#111]"
            >
              <div className="relative w-full h-[280px] sm:h-[340px] bg-[#0c090e] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="100px"
                  className="object-cover filter blur-lg opacity-35 scale-110"
                />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105 filter brightness-[0.95] z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/90 via-deepBlack/20 to-transparent pointer-events-none z-20"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-softIvory group-hover:text-warmGold transition-colors mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-warmGold/80 font-medium">
                  Tap to read more →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeVision !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVision(null)}
              className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl glass rounded-lg border border-warmGold/30 shadow-2xl overflow-hidden cursor-default max-h-[90vh] overflow-y-auto"
              >
                <div className="relative w-full h-[300px] sm:h-[380px] bg-[#0c090e] overflow-hidden">
                  <Image
                    src={visionItems[activeVision].image}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover filter blur-lg opacity-35 scale-110"
                  />
                  <Image
                    src={visionItems[activeVision].image}
                    alt={visionItems[activeVision].title}
                    fill
                    sizes="100vw"
                    className="object-contain filter brightness-[0.95] z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-transparent pointer-events-none z-20" />
                  <button
                    onClick={() => setActiveVision(null)}
                    className="absolute top-4 right-4 text-softIvory/80 hover:text-warmGold transition-colors p-2 cursor-pointer z-20 glass rounded-full"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-softIvory">
                      {visionItems[activeVision].title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <p className="font-inter text-sm sm:text-base text-softIvory/90 leading-relaxed">
                    {visionItems[activeVision].description}
                  </p>
                  <p className="font-cormorant text-lg sm:text-xl text-warmGold italic text-center border-t border-warmGold/15 pt-4">
                    {visionItems[activeVision].quote}
                  </p>
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
