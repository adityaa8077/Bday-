'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function HeartBehindBrilliance() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="heart-behind-brilliance"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block mb-2">
            The Pure Soul Inside
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 gold-gradient">
            The Heart Behind That Brilliance
          </h2>
          <p className="font-cormorant text-lg sm:text-2xl md:text-3xl text-softIvory/75 italic max-w-3xl mx-auto px-2">
            Brilliant and ambitious, but your gentle kindness is what makes you truly unforgettable.
          </p>
          <div className="w-[80px] sm:w-[100px] h-[2px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Photo with 100% Full View & 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            style={{ perspective: 1000 }}
            className="md:col-span-5 relative max-w-md mx-auto md:max-w-none w-full"
          >
            <div className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl border-2 border-warmGold/35 bg-[#0c080b]">
              <Image
                src="/images/chetanya/c5.jpeg"
                alt=""
                fill
                className="object-cover filter blur-xl opacity-40 scale-110 pointer-events-none"
              />
              <Image
                src="/images/chetanya/c5.jpeg"
                alt="Chetanya - Pure Heart"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-2 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/50 via-transparent to-transparent pointer-events-none z-20" />
            </div>
            <div className="absolute -inset-4 bg-gradient-radial from-warmGold/15 to-transparent blur-2xl -z-10 rounded-2xl"></div>
          </motion.div>

          {/* Letter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="md:col-span-7 relative w-full"
          >
            <div className="glass rounded-lg p-6 sm:p-10 md:p-12 border border-warmGold/20 relative shadow-2xl space-y-4 sm:space-y-6">
              <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-warmGold font-medium italic leading-relaxed border-b border-warmGold/15 pb-4 sm:pb-6">
                &quot;Behind that quiet grace lies a sister whose pure heart inspires everyone around her.&quot;
              </p>

              <div className="space-y-4 sm:space-y-6 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed">
                <p className="font-playfair text-lg sm:text-xl md:text-2xl text-softIvory font-semibold">
                  To Chetanya, my dearest little sister,
                </p>

                <p>
                  People will always notice how effortlessly radiant you look, or how calmly you carry yourself wherever you go. And watching you prepare for your goals with such discipline, focus, and quiet ambition is truly something to behold.
                </p>

                <p>
                  <span className="text-warmGold font-semibold">I am so endlessly proud to be your brother</span> — not just for your intelligence, but for your genuine heart. The way you make people feel valued, the softness in your laughter, and the way you face challenges with courage. May you reach IIM Ahmedabad, and may every bit of effort return to you as a victory that makes you smile.
                </p>
              </div>

              <div className="pt-2 sm:pt-4 flex justify-center md:justify-start">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
