'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface WelcomeOverlayProps {
  onEnter: () => void;
}

export default function WelcomeOverlay({ onEnter }: WelcomeOverlayProps) {
  const [shouldShow, setShouldShow] = useState<boolean>(true);
  const [visitCount, setVisitCount] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const visits = localStorage.getItem('chetanya_bday_visits');
    const count = visits ? parseInt(visits, 10) : 0;
    setVisitCount(count);
  }, []);

  // Canvas background particle drift
  useEffect(() => {
    if (!shouldShow) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number; y: number; radius: number; alpha: number; dx: number; dy: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.45 + 0.1,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
      });
    }

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldShow]);

  const handleEnter = () => {
    localStorage.setItem('chetanya_bday_visits', '1');
    setShouldShow(false);
    onEnter();
  };

  return (
    <>
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deepBlack/90 backdrop-blur-md text-softIvory select-none px-4 overflow-hidden"
          >
            {/* Full IIM Starting Background in Welcome Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/chetanya/iim.jpeg"
                alt="IIM Ahmedabad"
                fill
                priority
                className="object-cover opacity-25 filter blur-xs scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-deepBlack/80 via-deepBlack/70 to-deepBlack/95" />
            </div>

            <canvas ref={canvasRef} className="absolute inset-0 z-1 w-full h-full pointer-events-none" />

            <div className="relative z-10 text-center max-w-xl px-4 flex flex-col items-center justify-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warmGold/40 bg-warmGold/10 backdrop-blur-md mb-4 text-xs sm:text-sm font-inter tracking-[0.25em] text-warmGold uppercase font-semibold shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <span>🏛️</span>
                <span>IIM Ahmedabad Dream ✦ 20th Birthday</span>
                <span>✨</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 tracking-wider text-warmGold"
              >
                Happy Birthday Chetanya 🎂✨
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="font-cormorant text-xl sm:text-2xl text-softIvory/90 italic mb-4 sm:mb-6 tracking-widest"
              >
                Celebrating 20 Years Of Pure Grace & An Unbreakable Bond ✨
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.85, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                className="font-cormorant text-lg sm:text-2xl leading-relaxed italic text-softIvory/90 mb-8 sm:mb-10 max-w-md px-2"
              >
                &quot;May you reach IIM Ahmedabad, and may every bit of effort come back to you as a victory that makes you smile. Happy 20th Birthday, small sis!&quot;
              </motion.p>

              {/* Enter Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="relative px-10 sm:px-14 py-3.5 sm:py-4 rounded-full border-2 border-warmGold text-warmGold font-inter tracking-[0.25em] uppercase text-xs sm:text-sm font-bold overflow-hidden group cursor-pointer shadow-[0_0_35px_rgba(212,175,55,0.4)] bg-deepBlack/80"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-deepBlack flex items-center gap-2">
                  <span>Enter Celebration</span>
                  <span>🌸</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-warmGold via-amberHighlight to-warmGold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-0"></div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!shouldShow && visitCount > 0 && (
        <div className="absolute top-16 sm:top-20 left-0 right-0 z-40 flex flex-col items-center justify-center pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center"
          >
            <p className="font-cormorant text-xs sm:text-sm italic tracking-widest text-warmGold/80">
              Welcome back, small sis Chetanya ✦
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}
