'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Balloon {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  stringLength: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  delay: number;
  shape: 'circle' | 'rect' | 'star' | 'heart';
}

export default function BirthdayTimer() {
  const [timeData, setTimeData] = useState({
    years: 20,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 7305,
  });
  const [mounted, setMounted] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    setMounted(true);

    const updateTimer = () => {
      const now = new Date();
      // Chetanya's date of birth: 04 November 2006 (turning 20 on 04 November 2026)
      const birthDate = new Date(2006, 10, 4, 0, 0, 0);
      const diffMs = Math.max(0, now.getTime() - birthDate.getTime());

      // Target 20th birthday moment: 04 November 2026
      const twentiethBirthday = new Date(2026, 10, 4, 0, 0, 0);
      const diffTo20 = twentiethBirthday.getTime() - now.getTime();

      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let days = 0;

      if (diffTo20 > 0) {
        // Countdown to the exact midnight of 04 November
        days = Math.floor(diffTo20 / (1000 * 60 * 60 * 24));
        hours = Math.floor((diffTo20 / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((diffTo20 / (1000 * 60)) % 60);
        seconds = Math.floor((diffTo20 / 1000) % 60);
      } else {
        // Birthday live elapsed time
        hours = now.getHours();
        minutes = now.getMinutes();
        seconds = now.getSeconds();
        days = 0;
      }

      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      setTimeData({
        years: 20, // Celebrating 20 glorious years!
        months: 0,
        days,
        hours,
        minutes,
        seconds,
        totalDays: totalDays > 0 ? totalDays : 7305,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBlowCandle = () => {
    if (!candleBlown) {
      setCandleBlown(true);

      // Generate 3D Balloons
      const balloonColors = [
        'radial-gradient(circle at 30% 30%, #ffccd5, #fb7185, #be123c)',
        'radial-gradient(circle at 30% 30%, #fef08a, #facc15, #ca8a04)',
        'radial-gradient(circle at 30% 30%, #fbcfe8, #f472b6, #db2777)',
        'radial-gradient(circle at 30% 30%, #fed7aa, #fb923c, #c2410c)',
        'radial-gradient(circle at 30% 30%, #e0e7ff, #818cf8, #4338ca)',
        'radial-gradient(circle at 30% 30%, #fce7f3, #f43f5e, #881337)',
      ];

      const newBalloons: Balloon[] = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 92 + 4,
        delay: Math.random() * 1.6,
        duration: 5.5 + Math.random() * 3.5,
        color: balloonColors[i % balloonColors.length],
        size: 48 + Math.random() * 32,
        stringLength: 50 + Math.random() * 35,
      }));
      setBalloons(newBalloons);

      // Generate 3D Confetti
      const confettiColors = ['#f43f5e', '#fbbf24', '#ec4899', '#38bdf8', '#a855f7', '#34d399', '#ffffff'];
      const shapes: Array<'circle' | 'rect' | 'star' | 'heart'> = ['circle', 'rect', 'star', 'heart'];
      const newConfetti: ConfettiPiece[] = Array.from({ length: 70 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        scale: 0.7 + Math.random() * 0.8,
        color: confettiColors[i % confettiColors.length],
        delay: Math.random() * 1.2,
        shape: shapes[i % shapes.length],
      }));
      setConfetti(newConfetti);

      // Trigger card opening
      setTimeout(() => {
        setShowCardModal(true);
      }, 1200);
    } else {
      setShowCardModal(true);
    }
  };

  if (!mounted) return null;

  const timerUnits = [
    { label: 'Years', value: 20, subtext: '20 years of pure brilliance' },
    { label: 'Hours', value: timeData.hours, subtext: 'hours of birthday magic' },
    { label: 'Minutes', value: timeData.minutes, subtext: 'minutes of sisterly love' },
    { label: 'Seconds', value: timeData.seconds, subtext: 'seconds of endless blessings' },
  ];

  return (
    <section id="birthday-timer" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0f0b0d] to-deepBlack overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-warmGold/[0.04] blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-roseGold/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* ═══════════ 3D BALLOONS CELEBRATION EFFECT ═══════════ */}
      <AnimatePresence>
        {candleBlown && (
          <div className="fixed inset-0 pointer-events-none z-[180] overflow-hidden">
            {balloons.map((b) => (
              <motion.div
                key={b.id}
                initial={{ y: '110vh', x: `${b.x}vw`, opacity: 0, rotate: 0 }}
                animate={{
                  y: '-30vh',
                  x: [`${b.x}vw`, `${b.x + (b.id % 2 === 0 ? 4 : -4)}vw`, `${b.x}vw`],
                  opacity: [0, 1, 1, 0.9, 0],
                  rotate: [0, b.id % 2 === 0 ? 8 : -8, 0],
                }}
                transition={{
                  duration: b.duration,
                  delay: b.delay,
                  ease: 'easeOut',
                }}
                className="absolute flex flex-col items-center"
              >
                {/* 3D Balloon Sphere */}
                <div
                  style={{
                    width: `${b.size}px`,
                    height: `${b.size * 1.25}px`,
                    background: b.color,
                    boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.35), inset 6px 6px 14px rgba(255,255,255,0.7), 0 10px 20px rgba(0,0,0,0.35)',
                  }}
                  className="rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] relative"
                >
                  {/* Balloon Knot */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2 bg-pink-700 rounded-sm opacity-80" />
                </div>
                {/* Balloon Ribbon/String with natural sway */}
                <div
                  style={{ height: `${b.stringLength}px` }}
                  className="w-[1px] bg-gradient-to-b from-white/70 via-white/40 to-transparent"
                />
              </motion.div>
            ))}

            {/* 3D Confetti Burst */}
            {confetti.map((c) => (
              <motion.div
                key={c.id}
                initial={{ y: '-10vh', x: `${c.x}vw`, opacity: 1, rotate: c.rotation }}
                animate={{
                  y: '110vh',
                  x: `${c.x + (Math.sin(c.id) * 8)}vw`,
                  rotate: c.rotation + 720,
                  opacity: [1, 1, 0.8, 0],
                }}
                transition={{
                  duration: 4.5 + (c.id % 3),
                  delay: c.delay,
                  ease: 'easeIn',
                }}
                className="absolute"
              >
                {c.shape === 'heart' ? (
                  <span style={{ color: c.color, fontSize: `${14 * c.scale}px` }}>✨</span>
                ) : c.shape === 'star' ? (
                  <span style={{ color: c.color, fontSize: `${14 * c.scale}px` }}>★</span>
                ) : (
                  <div
                    style={{
                      width: c.shape === 'circle' ? `${10 * c.scale}px` : `${8 * c.scale}px`,
                      height: c.shape === 'circle' ? `${10 * c.scale}px` : `${14 * c.scale}px`,
                      backgroundColor: c.color,
                      borderRadius: c.shape === 'circle' ? '50%' : '2px',
                      boxShadow: `0 0 6px ${c.color}`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-warmGold/40 bg-warmGold/10 backdrop-blur-md mb-4 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
            <span className="text-sm">🎂</span>
            <span className="text-xs sm:text-sm font-inter tracking-[0.25em] text-warmGold uppercase font-bold">
              20th Birthday ✦ Turning 20 on 04 November
            </span>
            <span className="text-sm">✨</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 gold-gradient">
            Celebrating 20 Years Of Chetanya
          </h2>
          <p className="font-cormorant text-lg sm:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-4">
            &quot;20 years of unmatched kindness, brilliant mind, and the golden dream to conquer IIM Ahmedabad.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
          {timerUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl border border-warmGold/30 bg-gradient-to-b from-[#1c1418]/90 via-[#140e13]/90 to-[#0a0709]/90 p-5 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden hover:border-warmGold/70 hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-warmGold/60 to-transparent" />
              
              <div className="font-playfair text-4xl sm:text-5xl md:text-6xl font-extrabold gold-gradient mb-1.5 tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-inter text-xs uppercase tracking-widest text-warmGold font-bold mb-1">
                {unit.label}
              </div>
              <div className="font-cormorant text-xs text-softIvory/60 italic group-hover:text-softIvory transition-colors">
                {unit.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Days Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block glass rounded-full px-6 sm:px-10 py-3 sm:py-4 border border-warmGold/35 shadow-2xl mb-12 sm:mb-16"
        >
          <p className="font-cormorant text-base sm:text-xl md:text-2xl text-softIvory/90 italic flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>✨</span>
            <span><strong className="gold-gradient font-playfair font-bold text-xl sm:text-3xl not-italic">20 Glorious Years</strong> of Chetanya making our lives brighter & making her Bhaiya proud 🌸</span>
            <span>✨</span>
          </p>
        </motion.div>

        {/* ═══════════ 3D BIRTHDAY CAKE & CANDLE (SAME DESIGN) ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ perspective: 1000 }}
          className="relative max-w-xl mx-auto rounded-3xl p-6 sm:p-10 border border-warmGold/35 bg-gradient-to-b from-[#1a1218]/90 via-[#120a10]/95 to-[#080407] backdrop-blur-2xl shadow-[0_0_60px_rgba(212,175,55,0.2)] text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-roseGold/40 bg-roseGold/10 mb-4 shadow-sm">
            <span className="text-xs font-inter uppercase tracking-[0.25em] text-roseGold font-bold">
              🎂 Make A Wish ✦ Birthday Moment
            </span>
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient mb-2">
            Blow The Candle, Chetanya! 🕯️✨
          </h3>
          <p className="font-cormorant text-base sm:text-lg text-softIvory/80 italic mb-8">
            &quot;Close your eyes, make your deepest wish for your 20th year and your IIM dream, and tap to blow out the candle!&quot;
          </p>

          {/* Interactive 3D Cake Container */}
          <motion.div
            whileHover={{ scale: 1.04, rotateX: 6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto mb-6 flex flex-col items-center justify-end select-none cursor-pointer"
            onClick={handleBlowCandle}
          >
            {/* Candle Glow & Smoke */}
            <div className="relative flex flex-col items-center mb-1">
              {!candleBlown ? (
                <motion.div
                  animate={{
                    scale: [1, 1.18, 0.95, 1.12, 1],
                    opacity: [0.92, 1, 0.88, 1, 0.92],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative flex flex-col items-center"
                >
                  {/* Outer flame halo */}
                  <div className="w-10 h-14 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 blur-[4px] absolute -top-4 shadow-[0_0_30px_rgba(251,191,36,0.95)]" />
                  {/* Core flame */}
                  <div className="w-6 h-9 rounded-full bg-gradient-to-t from-amber-500 via-yellow-200 to-white relative z-10" />
                  <div className="w-2 h-3.5 rounded-full bg-blue-300/80 -mt-2 z-10" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: [0.9, 0], y: -45, scale: 2.2 }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.8 }}
                  className="w-5 h-5 rounded-full bg-neutral-300/60 blur-[3px]"
                />
              )}

              {/* Candle Wick & Stick */}
              <div className="w-1 h-3.5 bg-neutral-900 mt-0.5" />
              <div
                style={{
                  boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.7)',
                }}
                className="w-4 h-14 sm:h-16 rounded-t-sm bg-gradient-to-r from-amber-100 via-rose-300 to-amber-200 border-x border-amber-300/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-70" />
              </div>
            </div>

            {/* Cake Tier 1 (Top) */}
            <div
              style={{
                boxShadow: '0 4px 15px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.6)',
              }}
              className="w-32 sm:w-36 h-11 sm:h-13 rounded-t-2xl bg-gradient-to-r from-[#ffe4e6] via-[#fff1f2] to-[#fed7aa] border-t-2 border-x-2 border-white/70 relative flex items-start justify-center overflow-hidden"
            >
              <div className="w-full flex justify-between px-1 -mt-0.5">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-b-full bg-white shadow-xs" />
                ))}
              </div>
              <span className="absolute bottom-1 text-[11px] font-playfair font-bold text-rose-800/80">
                20 ✨
              </span>
            </div>

            {/* Cake Tier 2 (Middle) */}
            <div
              style={{
                boxShadow: '0 6px 20px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.6)',
              }}
              className="w-44 sm:w-48 h-12 sm:h-14 rounded-t-xl bg-gradient-to-r from-[#fbcfe8] via-[#fce7f3] to-[#fed7aa] border-t-2 border-x-2 border-white/70 relative flex items-start justify-center overflow-hidden"
            >
              <div className="w-full flex justify-between px-1 -mt-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-b-full bg-white shadow-xs" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-playfair font-extrabold tracking-widest text-[#881337] uppercase">
                  Chetanya ✦
                </span>
              </div>
            </div>

            {/* Cake Tier 3 (Base) */}
            <div
              style={{
                boxShadow: '0 8px 25px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.6)',
              }}
              className="w-52 sm:w-60 h-13 sm:h-15 rounded-t-lg bg-gradient-to-r from-[#f472b6] via-[#fda4af] to-[#fb923c] border-t-2 border-x-2 border-white/70 relative flex items-start justify-center overflow-hidden"
            >
              <div className="w-full flex justify-between px-1 -mt-0.5">
                {[...Array(11)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-b-full bg-white shadow-xs" />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-1.5 flex justify-center gap-1.5">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-xs" />
                ))}
              </div>
            </div>

            {/* Cake Stand (3D Golden Platter) */}
            <div className="w-60 sm:w-68 h-3.5 rounded-full bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold shadow-2xl border-t border-white/40" />
            <div className="w-28 h-2.5 bg-gradient-to-r from-warmGold/70 via-amberHighlight to-warmGold/70 rounded-b-xl shadow-lg" />
          </motion.div>

          {/* Blow / Card Trigger Button & Navigation Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleBlowCandle}
              className={`px-8 py-4 rounded-full font-inter text-sm sm:text-base font-bold transition-all duration-300 shadow-2xl cursor-pointer ${
                candleBlown
                  ? 'bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold text-deepBlack hover:scale-105 shadow-[0_0_25px_rgba(212,175,55,0.5)]'
                  : 'bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold text-deepBlack hover:scale-108 shadow-[0_0_30px_rgba(212,175,55,0.5)]'
              }`}
            >
              {candleBlown ? '💌 Open Birthday Greeting Card ✨' : '🕯️ Blow The Candle & Make A Wish!'}
            </button>

            {candleBlown && (
              <>
                <button
                  onClick={() => setCandleBlown(false)}
                  className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-inter font-semibold text-softIvory/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-warmGold/60 transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                >
                  <span>← Back (Relight Candle) 🔄</span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('cinematic-reels')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-inter font-bold text-softIvory hover:text-warmGold bg-rose-950/40 hover:bg-rose-950/60 border border-warmGold/40 hover:border-warmGold transition-all cursor-pointer flex items-center gap-2 shadow-lg active:scale-95"
                >
                  <span>Down to Next Section ⬇️</span>
                </button>
              </>
            )}
          </div>

          {candleBlown && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 flex flex-col items-center gap-4"
            >
              <p className="font-cormorant text-lg sm:text-2xl text-roseGold font-semibold italic max-w-xl mx-auto drop-shadow-sm">
                ✨ Wish sealed in the stars! May your 20th year bring you IIM Ahmedabad, great health, and boundless joy, Chetanya! ✨
              </p>

              {/* ═══════ DEDICATED PROMINENT DOWN NAVIGATION ═══════ */}
              <motion.button
                onClick={() => {
                  document.getElementById('cinematic-reels')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group mt-2 relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold text-deepBlack font-inter font-bold text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(212,175,55,0.9)] transition-all cursor-pointer"
              >
                <span>Continue Celebration • Next Chapter</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-base"
                >
                  ⬇️
                </motion.span>
              </motion.button>
              <span className="text-[11px] font-inter uppercase tracking-[0.2em] text-softIvory/40">
                Click above or scroll down to explore memories ✦
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* ═══════════ LUXURY 3D BIRTHDAY GREETING & WISH CARD ═══════════ */}
        <AnimatePresence>
          {showCardModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCardModal(false)}
              className="fixed inset-0 z-[190] bg-black/94 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.88, rotateX: 12, y: 30 }}
                animate={{ scale: 1, rotateX: 0, y: 0 }}
                exit={{ scale: 0.88, rotateX: -12, y: 30 }}
                transition={{ type: 'spring', damping: 24, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-xl w-full bg-[#fcfaf4] text-[#2d221e] rounded-3xl p-6 sm:p-9 md:p-11 shadow-[0_25px_80px_rgba(0,0,0,0.9)] border-4 border-[#eedec8] my-6 cursor-default overflow-hidden"
                style={{
                  backgroundImage: 'radial-gradient(#ebd9c2 0.8px, transparent 0.8px)',
                  backgroundSize: '18px 18px',
                  boxShadow: '0 0 50px rgba(212,175,55,0.3), 0 25px 70px rgba(0,0,0,0.85)',
                }}
              >
                {/* Back Button (Top Left) */}
                <button
                  onClick={() => setShowCardModal(false)}
                  className="absolute top-4 left-4 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#d8c3ad] text-[#6d4c41] hover:text-[#2d221e] hover:border-[#881337] transition-all shadow-md text-xs font-inter font-bold cursor-pointer active:scale-95"
                >
                  <span>← Back to Timer</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setShowCardModal(false)}
                  className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white border border-[#d8c3ad] text-[#6d4c41] hover:text-[#2d221e] flex items-center justify-center transition-colors shadow-md cursor-pointer"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Decorative Washi Tapes at Corners */}
                <div className="absolute -top-3 left-8 w-28 h-7 bg-[#fbcfe8]/85 rotate-[-3deg] border-y border-dashed border-[#f472b6]/40 pointer-events-none shadow-sm" />
                <div className="absolute -top-3 right-14 w-24 h-7 bg-[#fed7aa]/85 rotate-[4deg] border-y border-dashed border-[#fb923c]/40 pointer-events-none shadow-sm" />

                {/* Card Title Banner */}
                <div className="text-center mb-6 pt-2">
                  <div className="inline-block px-5 py-1.5 bg-[#ffe4e6] border border-[#f43f5e]/30 rounded-lg rotate-[-1deg] shadow-sm mb-2.5">
                    <span className="font-playfair text-xl sm:text-2xl font-black tracking-widest text-[#be123c] uppercase">
                      HAPPY 20TH BIRTHDAY ✦
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#881337] italic">
                    To My Dearest Sister, Chetanya 🌸
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-rose-500 mt-1.5">
                    <span>🎂</span>
                    <span className="text-xs font-inter tracking-widest uppercase text-[#9f1239]/80 font-bold">
                      Chetanya ✦ 04 November ✦ 20 Years
                    </span>
                    <span>✨</span>
                  </div>
                </div>

                {/* Polaroid Photo Slots with Chetanya's Photos — 100% Full & 3D */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-6" style={{ perspective: 800 }}>
                  {/* Photo 1 - Chetanya */}
                  <div className="bg-white p-2 rounded-xl shadow-xl border border-[#e8d5c4] rotate-[-3deg] relative group hover:rotate-0 hover:scale-105 transition-all duration-300">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#fed7aa]/85 border-dashed border-y border-[#fb923c]/40 pointer-events-none z-20" />
                    <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/chetanya/c2.jpeg"
                        alt=""
                        fill
                        className="object-cover filter blur-md opacity-40 scale-110 pointer-events-none"
                      />
                      <Image
                        src="/images/chetanya/c2.jpeg"
                        alt="Chetanya"
                        fill
                        sizes="160px"
                        className="object-contain group-hover:scale-105 transition-transform duration-300 z-10"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs font-caveat text-center text-[#78350f] mt-1.5 italic font-bold">
                      you glow differently ✨
                    </p>
                  </div>

                  {/* Photo 2 - Chetanya */}
                  <div className="bg-white p-2 rounded-xl shadow-xl border border-[#e8d5c4] rotate-[2deg] relative group hover:rotate-0 hover:scale-105 transition-all duration-300">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#fbcfe8]/85 border-dashed border-y border-[#f472b6]/40 pointer-events-none z-20" />
                    <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/chetanya/starting-bg-full.jpeg"
                        alt=""
                        fill
                        className="object-cover filter blur-md opacity-40 scale-110 pointer-events-none"
                      />
                      <Image
                        src="/images/chetanya/starting-bg-full.jpeg"
                        alt="Chetanya"
                        fill
                        sizes="160px"
                        className="object-contain group-hover:scale-105 transition-transform duration-300 z-10"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs font-caveat text-center text-[#78350f] mt-1.5 italic font-bold">
                      proud brother always 🤍
                    </p>
                  </div>

                  {/* Photo 3 - Chetanya */}
                  <div className="bg-white p-2 rounded-xl shadow-xl border border-[#e8d5c4] rotate-[-2deg] relative group hover:rotate-0 hover:scale-105 transition-all duration-300">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#bbf7d0]/85 border-dashed border-y border-[#4ade80]/40 pointer-events-none z-20" />
                    <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/chetanya/iim.jpeg"
                        alt=""
                        fill
                        className="object-cover filter blur-md opacity-40 scale-110 pointer-events-none"
                      />
                      <Image
                        src="/images/chetanya/iim.jpeg"
                        alt="IIM Ahmedabad"
                        fill
                        sizes="160px"
                        className="object-contain group-hover:scale-105 transition-transform duration-300 z-10"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs font-caveat text-center text-[#78350f] mt-1.5 italic font-bold">
                      IIM Ahmedabad 🏛️
                    </p>
                  </div>
                </div>

                {/* Card Letter Text */}
                <div className="space-y-4 font-cormorant text-base sm:text-lg text-[#3d2a21] leading-relaxed text-center px-2">
                  <p className="italic text-[#78350f] font-semibold text-lg sm:text-xl">
                    &quot;You may be my little sister by bond, but you are family my heart chose and will never let go of. Thank you for being such a pure, kind, and radiant soul in my life. ✨&quot;
                  </p>

                  <p>
                    I hope this 20th milestone year brings you complete good health, limitless strength, and takes you right inside the gates of IIM Ahmedabad! May every late night study session and all your dedicated efforts blossom into glorious success.
                  </p>

                  <div className="py-1">
                    <span className="inline-block px-5 py-2 rounded-full bg-[#fce7f3] border border-[#f472b6]/40 text-[#831843] font-playfair font-bold text-sm sm:text-base italic shadow-xs">
                      Always proud of my small sis — Your Bhaiya is right here ✨
                    </span>
                  </div>

                  <p className="font-playfair text-lg sm:text-xl text-[#9f1239] font-bold italic pt-1">
                    Happy 20th Birthday once again, dearest Chetanya! 🎂🌸✨
                  </p>
                </div>

                {/* Cute Badges & Notes */}
                <div className="mt-6 pt-4 border-t border-dashed border-[#e2d5c3] flex flex-wrap items-center justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-caveat font-bold shadow-xs">
                    ✦ Target: IIM Ahmedabad 🏛️
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fce7f3] text-[#9d174d] text-xs font-caveat font-bold shadow-xs">
                    ✦ Please take care of your health 🤍
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#e0e7ff] text-[#3730a3] text-xs font-caveat font-bold shadow-xs">
                    ✦ Proud of you always, small sis ✨
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fee2e2] text-[#991b1b] text-xs font-caveat font-bold shadow-xs">
                    ✦ Your Bhaiya Aditya is right here 🌸
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-xs font-caveat font-bold shadow-xs">
                    ✦ Keep shining always ✨
                  </span>
                </div>

                {/* Modal Navigation Actions */}
                <div className="mt-6 pt-5 border-t border-[#eedec8] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setShowCardModal(false)}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-[#4a3528] border border-[#d8c3ad] font-inter font-semibold text-xs sm:text-sm transition-all cursor-pointer active:scale-95 shadow-sm"
                  >
                    ← Back to Cake &amp; Timer
                  </button>

                  <button
                    onClick={() => {
                      setShowCardModal(false);
                      setTimeout(() => {
                        document.getElementById('cinematic-reels')?.scrollIntoView({ behavior: 'smooth' });
                      }, 250);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold text-deepBlack font-inter font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
                  >
                    <span>Continue Celebration (Next Chapter)</span>
                    <span>⬇️</span>
                  </button>
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
