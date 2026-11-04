'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FinalSceneProps {
  onInViewChange: (inView: boolean) => void;
}

export default function FinalScene({ onInViewChange }: FinalSceneProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [stage, setStage] = useState(0);
  const [showSinglePetal, setShowSinglePetal] = useState(false);

  useEffect(() => {
    if (inView) {
      onInViewChange(true);
      
      const t1 = setTimeout(() => setStage(1), 1000);
      const t2 = setTimeout(() => setStage(2), 5000);
      const t3 = setTimeout(() => setStage(3), 11000);
      const t4 = setTimeout(() => setShowSinglePetal(true), 14000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [inView, onInViewChange]);

  return (
    <div
      ref={ref}
      className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 bg-deepBlack text-center select-none overflow-hidden pb-12"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack to-deepBlack pointer-events-none z-0" />

      {/* Main Closing Container */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-12 md:space-y-16">
        
        {/* Stage 1 Text */}
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="space-y-3"
            >
              <p className="font-cormorant text-2xl md:text-3xl text-softIvory/85 italic leading-relaxed">
                &quot;The most beautiful bonds in this universe aren&apos;t defined by blood alone.
              </p>
              <p className="font-cormorant text-2xl md:text-3xl text-softIvory/85 italic leading-relaxed">
                They are written in the hearts of people who choose and protect each other forever.&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2 Text */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
              className="space-y-6 pt-4"
            >
              <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic max-w-xl mx-auto leading-relaxed">
                No matter where life takes you from here, Chetanya — as you chase your dreams and reach IIM Ahmedabad — I want you to always remember:
              </p>
              
              <div className="space-y-2 pt-4">
                <p className="font-playfair text-2xl md:text-3xl font-bold gold-gradient">
                  Someone believes in you with all his heart.
                </p>
                <p className="font-playfair text-2xl md:text-3xl font-bold gold-gradient">
                  Someone is endlessly proud to be your brother.
                </p>
                <p className="font-playfair text-2xl md:text-3xl font-bold gold-gradient">
                  And your Bhaiya Aditya is always right here for you.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 3 Text (Signature) */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
              className="pt-10 space-y-8"
            >
              <p className="font-cormorant text-lg md:text-xl text-warmGold tracking-[0.15em] italic">
                — Forever your Bhaiya, Aditya ✨
              </p>
              
              <p className="font-inter text-xs text-softIvory/35 pt-10 tracking-widest leading-relaxed">
                Made with love, code, and endless blessings for my dearest sister Chetanya. 🌸
                <br />
                © {new Date().getFullYear()} • Dedicated to You, Always ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Closing Gesture: Single Petal Drift */}
      <AnimatePresence>
        {showSinglePetal && (
          <motion.div
            initial={{ x: '-15vw', y: '30vh', opacity: 0, rotate: 0 }}
            animate={{
              x: '115vw',
              y: ['30vh', '35vh', '27vh', '33vh'],
              opacity: [0, 0.7, 0.7, 0],
              rotate: [0, 75, 150, 240, 360]
            }}
            transition={{
              duration: 9,
              ease: 'easeInOut',
            }}
            className="fixed pointer-events-none z-[120] w-6 h-6 text-warmGold"
            aria-hidden="true"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-full h-full fill-current text-amber-300/60"
              style={{ filter: 'drop-shadow(0 0 3px rgba(212, 175, 55, 0.4))' }}
            >
              <path d="M12 2C8 6 6 10 6 14s3 6 6 6 6-2 6-6-2-8-6-12z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
