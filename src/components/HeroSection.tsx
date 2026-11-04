'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 120]);

  const lines = [
    "To my dearest little sister whose kind heart lights up every room,",
    "Wishing you the happiest, most magical 20th birthday.",
  ];

  useEffect(() => {
    if (currentLine < lines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, lines.length]);

  const scrollToContent = () => {
    const element = document.getElementById('birthday-timer') || document.getElementById('cinematic-reels');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6">
      {/* ═══════ FULL IIM AHMEDABAD STARTING BACKGROUND ═══════ */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 h-[120%] w-full overflow-hidden pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          {/* Ambient blurred fill backdrop */}
          <Image
            src="/images/chetanya/iim.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50 filter blur-lg scale-110"
          />

          {/* FULL IIM Image Completely Visible */}
          <Image
            src="/images/chetanya/iim.jpeg"
            alt="IIM Ahmedabad - Full Starting Background"
            fill
            priority
            sizes="100vw"
            className="object-contain opacity-75 sm:opacity-85 filter brightness-[0.78] contrast-[1.12]"
          />
        </motion.div>

        {/* Ambient 3D lighting & cinematic gradient vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/40 to-deepBlack/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-deepBlack/20 to-deepBlack/85 pointer-events-none" />
      </motion.div>

      {/* Floating 3D Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-warmGold/[0.08] rounded-full blur-[160px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amberHighlight/[0.06] rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Opening subtitle lines */}
        <div className="mb-6 sm:mb-8 min-h-[60px] sm:min-h-[75px]">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentLine >= index ? 1 : 0,
                y: currentLine >= index ? 0 : 20,
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-cormorant text-xl sm:text-3xl md:text-4xl text-softIvory/90 mb-2 italic"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* ═══════ 3D HERO PHOTO SHOWCASE (FULL IMAGE & 3D TILT) ═══════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ perspective: 1200 }}
          className="mb-8 w-full max-w-sm sm:max-w-md"
        >
          <motion.div
            whileHover={{ rotateY: 6, rotateX: -6, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group relative rounded-3xl overflow-hidden p-3 sm:p-4 bg-gradient-to-b from-[#24181f]/90 via-[#170e14]/90 to-[#0a0508]/95 border-2 border-warmGold/50 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(212,175,55,0.25)] backdrop-blur-xl cursor-pointer"
          >
            {/* Top Badge on 3D Card */}
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-warmGold/30 mb-3 backdrop-blur-md">
              <span className="text-xs font-inter tracking-[0.2em] uppercase text-warmGold font-bold flex items-center gap-1.5">
                <span>🏛️</span> Target: IIM Ahmedabad
              </span>
              <span className="text-xs font-caveat text-softIvory/80">04.11.2006 ✦ 20 Years</span>
            </div>

            {/* 100% Full Photo Container — No Crop, Pure 3D Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0c080b] shadow-inner border border-warmGold/30">
              {/* Blurred background glow */}
              <Image
                src="/images/chetanya/starting-bg-full.jpeg"
                alt=""
                fill
                priority
                sizes="380px"
                className="object-cover filter blur-xl opacity-40 scale-110 pointer-events-none"
              />
              {/* Foreground FULL image completely visible */}
              <Image
                src="/images/chetanya/starting-bg-full.jpeg"
                alt="Happy Birthday Chetanya"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-contain filter brightness-[0.98] group-hover:scale-104 transition-transform duration-700 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-20" />

              <div className="absolute bottom-3 left-3 right-3 text-center z-30 pointer-events-none">
                <span className="font-caveat text-xl sm:text-2xl text-softIvory drop-shadow-md">
                  Chetanya ✦ My Small Sis 🌸
                </span>
              </div>
            </div>

            {/* Bottom 3D Shimmer Bar */}
            <div className="mt-3 flex items-center justify-between text-xs font-inter text-warmGold/80 px-1">
              <span>✨ Proud Sisterhood</span>
              <span>Made with love by Bhaiya Aditya ✨</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: currentLine >= lines.length - 1 ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          {/* Badge */}
          <div className="inline-block px-5 py-1.5 rounded-full border border-warmGold/40 bg-warmGold/10 backdrop-blur-md mb-3 sm:mb-4 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <span className="text-xs sm:text-sm font-inter tracking-[0.22em] text-warmGold uppercase font-semibold">
              🎂 04 November 2006 ✦ Turning 20 ✦ Happy Birthday Chetanya 🎂
            </span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-5 leading-tight">
            <span className="block gold-gradient">Happy Birthday Chetanya 🎂✨</span>
            <span className="block text-xl sm:text-3xl text-warmGold/80 font-cormorant italic mt-1 font-normal tracking-widest">
              Celebrating 20 Years Of Pure Grace & Big Dreams
            </span>
          </h1>

          <div className="inline-block px-4 py-1 rounded-full border border-warmGold/30 bg-black/40 backdrop-blur-sm mb-4">
            <span className="text-xs sm:text-sm font-inter tracking-[0.2em] text-warmGold uppercase font-medium">
              ✨ Pure Grace ✦ IIM Ahmedabad Dream ✦ Unbreakable Bond ✨
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="font-playfair text-lg sm:text-2xl md:text-3xl text-softIvory mb-4 sm:mb-6 tracking-wide px-2 max-w-3xl mx-auto"
          >
            &quot;May you reach IIM Ahmedabad, and may every late night and effort come back to you as a victory that makes you smile.&quot;
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="font-cormorant text-base sm:text-xl md:text-2xl text-warmGold/90 mb-8 sm:mb-10 italic tracking-wide px-2 max-w-3xl mx-auto"
          >
            Today is entirely about celebrating you, small sis — your radiant smile, your bright future, and your Bhaiya who will always stand proud beside you. 🥂✨
          </motion.p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              onClick={scrollToContent}
              className="group relative px-10 sm:px-14 py-4 sm:py-4.5 font-inter text-base sm:text-lg font-bold text-deepBlack bg-warmGold hover:bg-amberHighlight transition-all duration-300 overflow-hidden rounded-full cursor-pointer shadow-[0_0_35px_rgba(212,175,55,0.45)] active:scale-95"
            >
              <span className="relative z-10 tracking-wide">Begin The Celebration ✦</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amberHighlight to-warmGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-12 sm:mt-16 flex flex-col items-center justify-center cursor-pointer"
            onClick={scrollToContent}
          >
            <span className="text-xs font-inter tracking-[0.2em] uppercase text-softIvory/60 mb-2">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-5 h-9 rounded-full border border-warmGold/40 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 bg-warmGold rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
