'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const destinations = [
  { 
    name: "IIM Ahmedabad Campus 🏛️", 
    tagline: "The Crown Jewel of Management Education", 
    icon: "🏛️", 
    description: "Walking through the iconic Louis Kahn red brick arches with quiet confidence, stepping into the highest echelons of leadership and intellectual excellence." 
  },
  { 
    name: "The Dedicated Grind & CAT Victory 📚", 
    tagline: "Late Nights, Quiet Prep, Unmatched Focus", 
    icon: "🎯", 
    description: "Every formula mastered, every mock analyzed, and every late night study hour quietly building the foundation for an unforgettable percentile and victory." 
  },
  { 
    name: "A Future Business Leader 👑", 
    tagline: "Leading with Intellect, Vision & Empathy", 
    icon: "✨", 
    description: "Becoming the kind of visionary leader the world genuinely needs — combining sharp management acumen with the rare, genuine kindness of your heart." 
  },
  { 
    name: "Her Bhaiya's Endless Pride 🌟", 
    tagline: "Cheering For Every Milestone Ahead", 
    icon: "🌸", 
    description: "Celebrating your grand convocation day at IIM Ahmedabad, knowing every sacrifice came back as a smile. Your Bhaiya standing right in the front row, bursting with pride." 
  },
];

export default function DestinationGoogle() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="destination-google"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-netflixBlack via-deepBlack to-netflixBlack overflow-hidden"
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
            Target & Calling ✦ The Golden Dream
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">
            Destination: IIM Ahmedabad 🏛️✨
          </h2>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-softIvory/80 italic max-w-2xl mx-auto px-2">
            &quot;May you reach IIM Ahmedabad, and may every late night effort come back to you as a glorious success.&quot;
          </p>
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-warmGold to-transparent mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="glass rounded-xl p-6 sm:p-8 border border-warmGold/20 hover:border-warmGold/50 transition-all duration-300 group hover:-translate-y-1 bg-[#120e16]/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">{dest.icon}</span>
                <div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-softIvory group-hover:text-warmGold transition-colors">
                    {dest.name}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-warmGold/80 italic font-medium">{dest.tagline}</p>
                </div>
              </div>
              <p className="font-inter text-sm sm:text-base text-softIvory/80 leading-relaxed">
                {dest.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured IIM Photo with 3D Depth & Brotherhood Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          style={{ perspective: 1200 }}
          className="relative w-full max-w-3xl mx-auto cursor-pointer"
        >
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.3)] border-2 border-warmGold/40 bg-[#0c090e]">
            {/* Ambient blur background */}
            <Image
              src="/images/chetanya/iim.jpeg"
              alt="IIM Ahmedabad"
              fill
              sizes="100px"
              className="object-cover filter blur-xl opacity-35 scale-110"
            />
            {/* Full photo completely visible */}
            <Image
              src="/images/chetanya/iim.jpeg"
              alt="Chetanya's Dream - IIM Ahmedabad"
              fill
              sizes="(max-width: 768px) 100vw, 750px"
              className="object-contain z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/95 via-deepBlack/30 to-transparent pointer-events-none z-20"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-center sm:text-left z-30">
              <span className="text-xs uppercase tracking-widest text-warmGold font-semibold block mb-1">
                A Birthday Prayer From Bhaiya Aditya 🏛️✨
              </span>
              <p className="font-cormorant text-lg sm:text-2xl text-softIvory italic font-medium leading-relaxed">
                &quot;This birthday, my wish is simple. May you reach IIM Ahmedabad, and may every late night and every bit of effort come back to you as a success that makes you smile.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-12 sm:my-16 opacity-25"></div>
      </div>
    </section>
  );
}
