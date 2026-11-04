'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeartbeatConfessionProps {
  isOpen: boolean;
  onClose: () => void;
  onFullLetterChange?: (isFullLetter: boolean) => void;
}

const narrativePhases = [
  {
    phaseId: 'intro',
    lines: [
      "Chetanya…",
      "Out of all the billions of paths in this universe, ours crossed,",
      "and I will thank the universe for that for the rest of my life.",
    ],
    delay: 3600,
  },
  {
    phaseId: 'bond',
    lines: [
      "You may be my little sister by bond,",
      "but what you mean to me, words have never been enough to say.",
      "You are not just someone I care about.",
      "You are family my heart chose, and never let go of.",
    ],
    delay: 3600,
  },
  {
    phaseId: 'prayers',
    lines: [
      "There are prayers I never say out loud.",
      "Every day, silently, I ask for your happiness.",
      "I celebrate your small victories as if they were my own.",
      "And on my hardest days, just thinking of you reminds me that something beautiful is still in my life.",
    ],
    delay: 3800,
  },
  {
    phaseId: 'dream',
    lines: [
      "This birthday, my wish for you is simple.",
      "May you reach IIM Ahmedabad 🏛️✨",
      "and may every late night and every bit of effort come back to you as a success that makes you smile.",
      "Please take care of your health — you are far more precious than you know.",
    ],
    delay: 3800,
  },
  {
    phaseId: 'promise',
    lines: [
      "If I had a hundred lifetimes,",
      "I would choose to be your brother in every single one of them. ✨",
      "You will always be my small sis, and I will always be proud of you.",
      "Wherever you are, whatever happens, your Bhaiya is right here.",
    ],
    delay: 3600,
  }
];

const montageImages = [
  { src: "/images/chetanya/starting-bg-full.jpeg", caption: "“Out of all the billions of paths in this universe, ours crossed ✨”" },
  { src: "/images/chetanya/c1.jpeg", caption: "“You are family my heart chose, and never let go of 🤍”" },
  { src: "/images/chetanya/c2.jpeg", caption: "“I celebrate your small victories as if they were my own 🌟”" },
  { src: "/images/chetanya/c3.jpeg", caption: "“Please take care of your health — you are far more precious than you know 🌸”" },
  { src: "/images/chetanya/c4.jpeg", caption: "“If I had a hundred lifetimes, I'd choose to be your brother in every single one ✨”" },
  { src: "/images/chetanya/c5.jpeg", caption: "“Always proud of you, today, tomorrow, and forever — Your Bhaiya Aditya 👑”" },
];

export default function HeartbeatConfession({ isOpen, onClose, onFullLetterChange }: HeartbeatConfessionProps) {
  const [currentPhase, setCurrentPhase] = useState(-1);
  const [currentLine, setCurrentLine] = useState(-1);
  const [showFullLetterMode, setShowFullLetterMode] = useState(false);
  const [montageIndex, setMontageIndex] = useState(0);
  const [roseShift, setRoseShift] = useState(false);

  useEffect(() => {
    if (isOpen) {
      onFullLetterChange?.(showFullLetterMode);
    } else {
      onFullLetterChange?.(false);
    }
  }, [isOpen, showFullLetterMode, onFullLetterChange]);

  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number; size: number; duration: number }>>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playHeartbeatSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Lub
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(62, now);
      osc1.frequency.exponentialRampToValueAtTime(32, now + 0.12);
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Dub
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(54, now + 0.16);
      osc2.frequency.exponentialRampToValueAtTime(28, now + 0.28);
      gain2.gain.setValueAtTime(0.28, now + 0.16);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.16);
      osc2.stop(now + 0.28);
    } catch {
      // Audio fallback
    }
  }, []);

  const spawnHearts = useCallback(() => {
    const list = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 92 + 4,
      delay: Math.random() * 5,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 4 + 6,
    }));
    setHearts(list);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setCurrentPhase(-1);
      setCurrentLine(-1);
      setShowFullLetterMode(false);
      setMontageIndex(0);
      setRoseShift(false);
      setHearts([]);
      return;
    }

    const t = setTimeout(() => {
      setCurrentPhase(0);
      setCurrentLine(0);
      playHeartbeatSound();
    }, 1800);

    return () => clearTimeout(t);
  }, [isOpen, playHeartbeatSound]);

  useEffect(() => {
    if (currentPhase < 0 || currentLine < 0 || showFullLetterMode) return;

    const phase = narrativePhases[currentPhase];
    if (!phase) return;

    playHeartbeatSound();

    if (currentLine >= phase.lines.length) {
      const nextPhase = currentPhase + 1;

      if (nextPhase >= narrativePhases.length) {
        const finishTimer = setTimeout(() => {
          setRoseShift(true);
          setShowFullLetterMode(true);
          spawnHearts();
        }, 2200);
        return () => clearTimeout(finishTimer);
      }

      const phaseTimer = setTimeout(() => {
        setCurrentPhase(nextPhase);
        setCurrentLine(0);

        if (nextPhase >= 3) {
          setRoseShift(true);
        }
        if (nextPhase === 4) {
          spawnHearts();
        }
      }, 1600);

      return () => clearTimeout(phaseTimer);
    }

    const lineDelay = phase.delay;
    const lineTimer = setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
    }, lineDelay);

    return () => clearTimeout(lineTimer);
  }, [currentPhase, currentLine, showFullLetterMode, playHeartbeatSound, spawnHearts]);

  useEffect(() => {
    if (!showFullLetterMode) return;
    const cycle = setInterval(() => {
      setMontageIndex((prev) => (prev + 1) % montageImages.length);
    }, 4500);
    return () => clearInterval(cycle);
  }, [showFullLetterMode]);

  const getRevealedLines = () => {
    const output: Array<{ text: string; id: string; isHighlight: boolean }> = [];
    for (let p = 0; p <= currentPhase && p < narrativePhases.length; p++) {
      const limit = p === currentPhase ? currentLine : narrativePhases[p].lines.length;
      for (let l = 0; l < limit && l < narrativePhases[p].lines.length; l++) {
        const str = narrativePhases[p].lines[l];
        output.push({
          text: str,
          id: `${p}-${l}`,
          isHighlight: str.includes("IIM Ahmedabad") || str.includes("choose to be your brother") || str.includes("family my heart chose"),
        });
      }
    }
    return output;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="fixed inset-0 z-[200] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start bg-deepBlack text-softIvory select-none"
        style={{
          background: roseShift
            ? 'radial-gradient(ellipse at center, #24141d 0%, #0d0609 50%, #050203 100%)'
            : '#080808',
          transition: 'background 2.5s ease',
        }}
      >
        {/* Subtle Ambient Background Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-warmGold/10 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Floating Sparkles & Blessings */}
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: '105vh', x: `${h.x}vw`, opacity: 0, scale: 0.8 }}
            animate={{
              y: '-15vh',
              opacity: [0, 0.75, 0.75, 0],
              scale: [0.8, 1.1, 0.9],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="fixed z-[201] pointer-events-none select-none text-warmGold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            style={{ fontSize: `${h.size}px` }}
          >
            ✨
          </motion.div>
        ))}

        {/* Top Indicator */}
        <div className="fixed top-4 sm:top-6 left-0 right-0 z-30 flex items-center justify-center gap-2 sm:gap-3 pointer-events-none px-4">
          <motion.div
            animate={{
              scale: [1, 1.45, 1.1, 1.35, 1],
              opacity: [0.4, 0.9, 0.6, 0.85, 0.4],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-warmGold to-amberHighlight shadow-[0_0_20px_rgba(212,175,55,0.8)]"
          />
          <span className="font-playfair text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-warmGold/90 truncate">
            {showFullLetterMode ? "A Letter From Your Bhaiya ✦ Aankhon Mein Teri" : "Words From My Heart"}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full glass border border-warmGold/30 text-softIvory/70 hover:text-warmGold hover:border-warmGold transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* PHASE 1: Real-time Cinematic Text Stream */}
        {!showFullLetterMode && (
          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 py-24 sm:py-28 flex flex-col items-center justify-center min-h-screen text-center">
            <div className="space-y-6 sm:space-y-8">
              {getRevealedLines().map((item) => (
                <motion.p
                  key={item.id}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className={`leading-relaxed transition-colors duration-500 ${
                    item.isHighlight
                      ? 'font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-warmGold tracking-wide py-3 sm:py-4 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]'
                      : 'font-caveat text-xl sm:text-3xl md:text-4xl text-softIvory/90 font-medium'
                  }`}
                >
                  {item.text}
                </motion.p>
              ))}
            </div>

            {/* Skip prompt */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setRoseShift(true);
                setShowFullLetterMode(true);
                spawnHearts();
              }}
              className="mt-12 sm:mt-16 text-[11px] sm:text-xs font-inter tracking-[0.25em] uppercase text-softIvory/50 hover:text-warmGold cursor-pointer transition-all border border-warmGold/20 px-4 py-2 rounded-full"
            >
              Read full letter from Bhaiya →
            </motion.button>
          </div>
        )}

        {/* ═══════════ PHASE 2: LETTER WITH THE SPECIFIED LETTER BG & 3D PHOTO CAROUSEL ═══════════ */}
        {showFullLetterMode && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl px-3 sm:px-6 py-20 sm:py-24 flex flex-col items-center"
          >
            {/* Header Title */}
            <div className="text-center mb-8 sm:mb-10 space-y-2 sm:space-y-3">
              <span className="font-playfair text-[10px] sm:text-xs tracking-[0.35em] text-warmGold uppercase block">
                ✦ An Eternal Bond Of Love & Blessings • From Bhaiya Aditya ✦
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient drop-shadow-md">
                Dearest Chetanya 🎂✨
              </h2>
              <p className="font-cormorant italic text-base sm:text-xl text-softIvory/80">
                Playing: Aankhon Mein Teri ✨
              </p>
              <div className="w-[100px] h-[1.5px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-3" />
            </div>

            {/* ═══════ 1. THIS UP: 3D PHOTO CAROUSEL SHOWCASE (UP ABOVE THE LETTER) ═══════ */}
            <div className="w-full max-w-3xl mb-12 sm:mb-16" style={{ perspective: 1000 }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="h-[1px] w-8 bg-warmGold/40" />
                <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] text-warmGold uppercase">
                  ✦ Sisterhood Memories In 3D ✦
                </span>
                <span className="h-[1px] w-8 bg-warmGold/40" />
              </div>

              <div className="relative w-full h-[340px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden border-2 border-warmGold/60 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.3)] bg-[#0d090c]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={montageIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full"
                  >
                    {/* Ambient blur background */}
                    <Image
                      src={montageImages[montageIndex].src}
                      alt=""
                      fill
                      sizes="100px"
                      className="object-cover filter blur-xl opacity-40 scale-110 pointer-events-none"
                    />
                    {/* Foreground full photo completely visible — 100% FULL */}
                    <Image
                      src={montageImages[montageIndex].src}
                      alt="Chetanya"
                      fill
                      sizes="(max-width: 768px) 100vw, 750px"
                      className="object-contain z-10 p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none z-20" />
                    
                    <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-center z-30">
                      <p className="font-cormorant text-base sm:text-xl md:text-2xl text-softIvory italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2">
                        {montageImages[montageIndex].caption}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Photo indicator dots */}
              <div className="flex justify-center items-center gap-2 mt-4 z-20 relative">
                {montageImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMontageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === montageIndex
                        ? 'w-8 bg-warmGold shadow-[0_0_10px_rgba(212,175,55,0.8)]'
                        : 'w-2.5 bg-warmGold/30 hover:bg-warmGold/60'
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* ═══════ 2. BG IMAGE DOWN: ROYAL LETTER CONTAINER WITH letter-bg.jpeg IN BG ═══════ */}
            <div className="w-full relative rounded-3xl overflow-hidden border-2 border-warmGold/60 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.25)] p-5 sm:p-10 md:p-14 space-y-8">
              
              {/* Background Layer: letter-bg.jpeg showcasing her full face clearly in the background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Ambient background blur */}
                <Image
                  src="/images/chetanya/letter-bg.jpeg"
                  alt=""
                  fill
                  priority
                  className="object-cover filter blur-lg opacity-40 scale-105 pointer-events-none"
                />
                {/* Crisp Full Image with full face visible at top */}
                <Image
                  src="/images/chetanya/letter-bg.jpeg"
                  alt="Chetanya"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-top opacity-90"
                />
                {/* Elegant darkening gradient: subtle at the top so her face is 100% visible, smoothly darkening for text */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/90 pointer-events-none" />
                {/* Vintage gold border frame */}
                <div className="absolute inset-3 sm:inset-5 border border-warmGold/35 rounded-2xl pointer-events-none" />
              </div>

              {/* Decorative vintage gold spine line */}
              <div className="absolute top-0 bottom-0 left-3 sm:left-6 md:left-8 w-[2px] bg-gradient-to-b from-warmGold/10 via-warmGold/60 to-warmGold/10 z-10" />

              {/* ═══════ TOP HERO FACE ZONE: CHETANYA'S FULL FACE VISIBLE IN BG ═══════ */}
              <div className="relative z-10 min-h-[280px] sm:min-h-[360px] md:min-h-[420px] flex flex-col justify-between items-center text-center pb-4 ml-2 sm:ml-6 md:ml-8">
                {/* Top Badge */}
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/65 backdrop-blur-md border border-warmGold/60 text-warmGold text-xs sm:text-sm font-inter font-bold tracking-widest uppercase shadow-xl">
                  ✦ To My Beloved Sister Chetanya 🌸 ✦
                </span>

                {/* Open breathing space so her face, smile, and posture in the background are 100% clear */}
                <div className="flex-1" />

                {/* Hero Greeting Box positioned gently beneath her face */}
                <div className="bg-black/70 backdrop-blur-md px-6 sm:px-10 py-4 sm:py-5 rounded-2xl border border-warmGold/40 shadow-2xl max-w-xl mx-auto">
                  <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient italic drop-shadow-md">
                    Happy Birthday, my dearest Chetanya 🎂
                  </h3>
                  <p className="font-cormorant italic text-base sm:text-xl text-warmGold/90 mt-1">
                    To my beloved little sister &amp; forever family
                  </p>
                </div>
              </div>

              {/* ═══════ THE LETTER TEXT IN FROSTED GLASS PARCHMENT ═══════ */}
              <div className="relative z-10 bg-black/70 backdrop-blur-md border border-warmGold/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl ml-2 sm:ml-6 md:ml-8 space-y-6 sm:space-y-7 font-cormorant text-xl sm:text-2xl md:text-[25px] leading-[1.85] text-softIvory">
                
                {/* Paragraph 1 with royal drop-cap */}
                <p>
                  <span className="float-left text-5xl sm:text-6xl font-playfair font-black text-warmGold leading-none pr-3 pt-0.5 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                    O
                  </span>
                  ut of all the billions of paths in this universe, ours crossed, and I will thank the universe for that for the rest of my life.
                </p>

                {/* Paragraph 2 - Bond */}
                <p>
                  You may be my little sister by bond, but what you mean to me, words have never been enough to say. You are not just someone I care about. <span className="font-semibold text-warmGold bg-warmGold/10 px-2 py-0.5 rounded border border-warmGold/30">You are family my heart chose, and never let go of.</span>
                </p>

                {/* Paragraph 3 - Prayers */}
                <p>
                  There are prayers I never say out loud. Every day, silently, I ask for your happiness. I celebrate your small victories as if they were my own. And on my hardest days, when everything feels heavy, just thinking of you reminds me that something beautiful is still in my life.
                </p>

                {/* Highlight Dream Box for IIM Ahmedabad & Health with 3D Depth */}
                <div className="my-7 p-6 sm:p-9 rounded-2xl bg-gradient-to-br from-[#1c1218]/90 via-[#261520]/85 to-[#1c1218]/90 border-2 border-warmGold/70 shadow-[0_10px_35px_rgba(212,175,55,0.2)] text-center space-y-3 relative overflow-hidden">
                  <div className="absolute top-2 left-3 text-warmGold/50 text-xs select-none">✦</div>
                  <div className="absolute top-2 right-3 text-warmGold/50 text-xs select-none">✦</div>
                  <div className="absolute bottom-2 left-3 text-warmGold/50 text-xs select-none">✦</div>
                  <div className="absolute bottom-2 right-3 text-warmGold/50 text-xs select-none">✦</div>

                  <p className="font-cormorant text-sm sm:text-base uppercase tracking-[0.25em] font-bold text-warmGold">
                    ✦ The Heartfelt Wish For My Little Sis ✦
                  </p>
                  <p className="font-playfair text-2xl sm:text-4xl md:text-[38px] font-black gold-gradient italic leading-tight drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                    May you reach IIM Ahmedabad 🏛️✨
                  </p>
                  <div className="w-16 h-[2px] bg-warmGold mx-auto rounded-full my-1.5 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                  <p className="font-cormorant text-lg sm:text-2xl text-softIvory/90 italic leading-relaxed max-w-2xl mx-auto font-medium">
                    And may every late night and every bit of effort come back to you as a success that makes you smile. Please take care of your health. You are far more precious to me than you know, and I pray you are completely fine very soon.
                  </p>
                </div>

                {/* Lifetime Brother Promise Banner */}
                <div className="text-center py-4 my-4 border-y-2 border-warmGold/40 bg-warmGold/5 rounded-xl px-4 shadow-xs">
                  <p className="font-playfair italic font-bold text-xl sm:text-3xl md:text-3xl gold-gradient">
                    &ldquo;If I had a hundred lifetimes, I would choose to be your brother in every single one of them.&rdquo; ✨
                  </p>
                </div>

                {/* Closing Promise */}
                <p>
                  You will always be my small sis, and I will always be proud of you, today, tomorrow and forever. Wherever you are, whatever happens, your Bhaiya is right here. ✨
                </p>

                {/* Signature Block */}
                <div className="border-t-2 border-warmGold/40 pt-7 mt-8 text-center space-y-2.5">
                  <p className="font-cormorant text-lg sm:text-xl text-softIvory/70 italic font-medium">
                    With endless blessings and all my love,
                  </p>
                  <p className="font-playfair text-xl sm:text-2xl text-warmGold font-bold tracking-wide">
                    Your Bhaiya,
                  </p>
                  <p className="font-caveat text-5xl sm:text-6xl md:text-7xl font-bold text-warmGold drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] tracking-wide">
                    Aditya ✨
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-warmGold/10 border border-warmGold/50 text-warmGold text-xs font-inter font-bold tracking-wider uppercase shadow-xs">
                      🛡️ Blessed Sisterhood &amp; Brotherhood Forever 🌸
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exit Action Button */}
            <div className="mt-8 sm:mt-12 text-center flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onClose}
                className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold text-deepBlack font-inter font-bold tracking-widest uppercase text-xs sm:text-sm shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                Keep This Letter In Your Heart Forever ✨
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
