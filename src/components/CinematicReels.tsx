'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const portraits = [
  { src: "/images/chetanya/starting-bg-full.jpeg", caption: "The sweetest little sister in the universe — a soul of pure light ✨" },
  { src: "/images/chetanya/iim.jpeg", caption: "Target: IIM Ahmedabad 🏛️ — Every late night effort will become your glorious success!" },
  { src: "/images/chetanya/c1.jpeg", caption: "Out of all the billions of paths in this universe, ours crossed 🤍" },
  { src: "/images/chetanya/c2.jpeg", caption: "Your smile reminds me that something beautiful is always in my life 🌸" },
  { src: "/images/chetanya/c3.jpeg", caption: "I celebrate your small victories as if they were my own 🌟" },
  { src: "/images/chetanya/c4.jpeg", caption: "Please take care of your health — you are far more precious than you know 🌸" },
  { src: "/images/chetanya/c5.jpeg", caption: "Wherever life takes you, remember your Bhaiya Aditya is right here ✨" },
];

export default function CinematicReels() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const nextPhoto = () => {
    if (activePhoto !== null) {
      setActivePhoto((activePhoto + 1) % portraits.length);
    }
  };

  const prevPhoto = () => {
    if (activePhoto !== null) {
      setActivePhoto((activePhoto - 1 + portraits.length) % portraits.length);
    }
  };

  return (
    <section
      id="cinematic-reels"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-deepBlack via-[#0a070c] to-deepBlack overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-warmGold/40 bg-warmGold/10 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="text-xs sm:text-sm font-inter tracking-[0.25em] text-warmGold uppercase font-semibold">
                📸 Chetanya In Focus ✦ Tap Any Photo To Expand
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient tracking-wide">
              Sister In Focus 📸✨
            </h2>
            <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
              &quot;Celebrating 20 years of my dearest little sister — memories, dreams, and her journey to IIM Ahmedabad.&quot;
            </p>
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
          </motion.div>
        </div>

        {/* Photo Grid with 100% Full Images and 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" style={{ perspective: 1200 }}>
          {portraits.map((portrait, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: idx % 2 === 0 ? 3 : -3, scale: 1.03 }}
              onClick={() => setActivePhoto(idx)}
              className="group relative rounded-2xl overflow-hidden border-2 border-warmGold/25 hover:border-warmGold/70 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.35)] bg-[#0d090d] cursor-pointer"
            >
              {/* Photo Container — 100% Full Image with Ambient Blur */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-950">
                {/* Ambient blur background */}
                <Image
                  src={portrait.src}
                  alt=""
                  fill
                  sizes="100px"
                  className="object-cover filter blur-xl opacity-35 scale-110 pointer-events-none"
                />

                {/* Full photo completely visible */}
                <Image
                  src={portrait.src}
                  alt={`Chetanya portrait ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 z-10 p-1"
                />

                {/* Subtle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/80 via-transparent to-transparent pointer-events-none z-20" />

                {/* Top Corner Badge: Tap to expand */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-warmGold/40 text-[10px] text-warmGold font-inter uppercase tracking-wider group-hover:bg-warmGold/20 transition-all z-30">
                  ⛶ View Full
                </div>

                <div className="absolute bottom-3 left-3 text-xs font-inter uppercase tracking-widest text-warmGold/90 font-semibold drop-shadow-md z-30">
                  #{String(idx + 1).padStart(2, '0')} ✦ Chetanya
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-[#130d13] to-[#080507]">
                <p className="font-cormorant text-base sm:text-lg text-softIvory/90 italic leading-relaxed">
                  {portrait.caption}
                </p>
                <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-white/10">
                  <span className="text-xs font-inter text-warmGold group-hover:text-amberHighlight transition-colors flex items-center gap-1">
                    <span>✨</span> Click to view in 3D high-res
                  </span>
                  <span className="text-xs font-inter text-softIvory/40">
                    Portrait {idx + 1}/{portraits.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Screen Photo Lightbox Modal with 3D Depth */}
        <AnimatePresence>
          {activePhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 z-[170] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md sm:max-w-lg md:max-w-xl w-full rounded-2xl overflow-hidden border-2 border-warmGold/50 shadow-[0_0_60px_rgba(212,175,55,0.4)] bg-deepBlack cursor-default flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-deepBlack/80 border border-warmGold/40 text-softIvory hover:text-warmGold flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left/Right Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 border border-warmGold/30 text-softIvory hover:text-warmGold flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous Photo"
                >
                  ‹
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 border border-warmGold/30 text-softIvory hover:text-warmGold flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next Photo"
                >
                  ›
                </button>

                {/* 100% Full Photo in Modal */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full bg-black min-h-[400px] sm:min-h-[500px]">
                  <Image
                    src={portraits[activePhoto].src}
                    alt={`Chetanya portrait ${activePhoto + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-contain p-2"
                    priority
                  />
                </div>

                {/* Modal Caption */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-deepBlack via-[#120a10] to-[#120a10] border-t border-warmGold/20 text-center">
                  <p className="font-cormorant text-base sm:text-xl text-softIvory italic leading-relaxed">
                    &quot;{portraits[activePhoto].caption}&quot;
                  </p>
                  <span className="text-xs font-inter uppercase tracking-widest text-warmGold/90 mt-2 block font-semibold">
                    Chetanya ✦ Memory {activePhoto + 1} of {portraits.length}
                  </span>
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
