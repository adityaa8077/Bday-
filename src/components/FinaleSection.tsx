'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinaleSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="finale"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0a0508] to-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-8 sm:space-y-12 mb-12 sm:mb-20"
        >
          <div className="glass rounded-xl p-6 sm:p-10 border border-warmGold/25 max-w-4xl mx-auto shadow-2xl">
            <p className="font-cormorant text-xl sm:text-3xl md:text-4xl text-softIvory italic leading-relaxed">
              &quot;Out of all the billions of paths in this universe, ours crossed,
              <br />
              <span className="gold-gradient font-bold not-italic">
                and I will thank the universe for that for the rest of my life.
              </span>&quot;
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="font-cormorant text-2xl sm:text-4xl md:text-5xl text-softIvory/80 italic">
              This is just the beginning of your grand journey, Chetanya.
              <br />
              IIM Ahmedabad and the whole world are waiting for you.
            </p>

            <div className="section-divider my-6 sm:my-8 mx-auto"></div>

            <p className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold gold-gradient tracking-wide">
              The best is yet to come, small sis. ✨
            </p>
          </motion.div>
        </motion.div>

        {/* Personal Heartfelt Message from Bhaiya Aditya */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-12 sm:mt-24 mb-12 sm:mb-16"
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="glass rounded-2xl p-6 sm:p-10 md:p-14 border border-warmGold/35 relative shadow-2xl bg-[#120a10]/50 backdrop-blur-md">
              <div className="space-y-6 sm:space-y-8 font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/90 leading-relaxed text-center sm:text-left">
                <div className="text-center">
                  <span className="font-inter text-xs tracking-[0.3em] uppercase text-warmGold font-semibold block mb-2">
                    A Brother&apos;s Lifelong Blessing
                  </span>
                  <p className="font-playfair text-3xl sm:text-4xl md:text-5xl text-warmGold font-bold mb-4 sm:mb-6">
                    Happy Birthday, my dearest Chetanya 🎂
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mb-6" />
                </div>

                <p className="italic">
                  Out of all the billions of paths in this universe, ours crossed, and I will thank the universe for that for the rest of my life.
                </p>

                <p className="italic">
                  You may be my little sister by bond, but what you mean to me, words have never been enough to say. You are not just someone I care about. <span className="text-warmGold font-semibold">You are family my heart chose, and never let go of.</span>
                </p>

                <p className="italic">
                  There are prayers I never say out loud. Every day, silently, I ask for your happiness. I celebrate your small victories as if they were my own. And on my hardest days, when everything feels heavy, just thinking of you reminds me that something beautiful is still in my life.
                </p>

                <p className="italic">
                  This birthday, my wish is simple. <span className="text-warmGold font-semibold">May you reach IIM Ahmedabad</span>, and may every late night and every bit of effort come back to you as a success that makes you smile. Please take care of your health. You are far more precious to me than you know, and I pray you are completely fine very soon.
                </p>

                <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-warmGold/15 via-[#23151c]/80 to-warmGold/15 border border-warmGold/40 text-center space-y-3 shadow-xl">
                  <p className="font-cormorant text-xl sm:text-2xl italic text-softIvory">
                    If I had a hundred lifetimes...
                  </p>
                  <p className="font-playfair text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient tracking-wide py-1">
                    I would choose to be your brother in every single one of them.
                  </p>
                  <p className="font-playfair text-xl sm:text-2xl text-warmGold font-semibold italic">
                    Always proud of my small sis. ✨
                  </p>
                  <p className="font-cormorant text-lg sm:text-2xl italic text-softIvory/90">
                    Wherever you are, whatever happens, your Bhaiya is right here.
                  </p>
                </div>
              </div>

              <div className="border-t border-warmGold/20 pt-6 sm:pt-8 mt-8 sm:mt-10 text-center">
                <p className="font-cormorant text-base sm:text-lg text-softIvory/60 italic">
                  With endless blessings and all my love,
                </p>
                <p className="font-playfair text-xl sm:text-2xl text-warmGold font-semibold italic">
                  Your Bhaiya,
                </p>
                <p className="font-caveat text-4xl sm:text-5xl font-bold text-warmGold mt-1">
                  Aditya ✨
                </p>
                <div className="text-center mt-3">
                  <span className="text-3xl sm:text-4xl animate-pulse inline-block">🌸</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-radial from-warmGold/20 to-transparent blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
