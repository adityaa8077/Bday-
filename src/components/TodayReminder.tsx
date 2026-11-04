'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function TodayReminder() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="today-reminder"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left: Photo with 100% Full View & 3D Depth */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, rotateY: 5 }}
          style={{ perspective: 1000 }}
          className="relative max-w-md mx-auto md:max-w-none w-full"
        >
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border-2 border-warmGold/35 bg-[#0a060a]">
            {/* Ambient blur backdrop */}
            <Image
              src="/images/chetanya/c3.jpeg"
              alt=""
              fill
              className="object-cover filter blur-xl opacity-40 scale-110 pointer-events-none"
            />
            {/* 100% Full Photo */}
            <Image
              src="/images/chetanya/c3.jpeg"
              alt="Chetanya - Quiet Grace & Beautiful Smile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/50 via-transparent to-transparent pointer-events-none z-20" />
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-warmGold/15 to-transparent blur-2xl -z-10 rounded-2xl"></div>
        </motion.div>

        {/* Right: Message from Bhaiya */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8 text-center md:text-left"
        >
          <span className="font-playfair text-[10px] tracking-[0.3em] text-warmGold uppercase block">
            A Sisterly Reminder From Bhaiya
          </span>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient">
            Dear Chetanya,
          </h2>

          <div className="space-y-4 sm:space-y-6 font-inter text-sm sm:text-base md:text-lg text-softIvory/90 leading-relaxed">
            <p>
              I know preparing for your goals can be intense, and some days can feel quiet and heavy — but I see you. <span className="text-warmGold font-semibold">I am so endlessly proud of you</span> — the quiet determination you carry, the dedication you pour into your studies, and the pure goodness of your heart.
            </p>
            <p>
              I just want you to remember: <span className="text-warmGold font-semibold">you are far more precious to me than you know.</span> Please take care of your health first. Eat well, sleep on time, and never let stress dim your radiant smile.
            </p>
            <p>
              May you reach IIM Ahmedabad, and may every late night turn into a triumphant victory. Wherever life takes you, remember that your Bhaiya Aditya is always right here standing proudly by your side.
            </p>
            <p className="font-playfair text-lg sm:text-xl text-warmGold font-semibold italic border-l-2 border-warmGold/40 pl-4 py-1 text-left">
              You will always be my small sis, today, tomorrow, and forever. ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
