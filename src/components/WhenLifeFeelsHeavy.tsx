'use client';

import { motion } from 'framer-motion';

export default function WhenLifeFeelsHeavy() {
  return (
    <section
      id="life-heavy"
      className="relative py-24 px-6 bg-deepBlack overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="w-full max-w-xl mx-auto border-t border-warmGold/20 pt-16 mb-12" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12"
        >
          <p className="font-cormorant text-2xl md:text-3xl text-warmGold italic">
            &quot;If you&apos;ve come back here after an exhausting day, this part is for you, small sis.&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="glass rounded p-10 md:p-14 border border-warmGold/15 shadow-2xl relative bg-deepBlack/40 text-center md:text-left"
        >
          <div className="absolute inset-0 bg-gradient-radial from-warmGold/5 to-transparent blur-2xl -z-10" />

          <div className="space-y-6 font-inter text-base md:text-lg text-softIvory/90 leading-relaxed">
            <p className="font-cormorant text-xl md:text-2xl text-softIvory/70 italic mb-8">
              Maybe today felt exhausting and study prep felt a little too overwhelming.
              <br />
              Maybe you carried worries quietly in your heart without telling anyone.
              <br />
              Maybe you felt tired or under the weather.
            </p>

            <p className="font-playfair text-xl text-warmGold font-semibold italic border-l-2 border-warmGold/40 pl-4 py-1 text-left my-6">
              Stop. Take a deep breath. Read this.
            </p>

            <p>
              Please take care of your health, Chetanya. You are far more precious to me than you know, and I pray you are completely fine very soon. No score and no goal is worth sacrificing your peace of mind or well-being.
            </p>

            <p>
              Your worth — the real, precious thing that makes you so deeply cherished — <span className="text-warmGold font-semibold">has never lived in perfection or expectations</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-warmGold/10 py-6 my-6 text-left">
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>It lives in <span className="text-warmGold font-medium">your kindness</span>.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>In <span className="text-warmGold font-medium">your honest heart</span>.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>In the way <span className="text-warmGold font-medium">you never give up on your dreams</span>.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warmGold">✦</span>
                <p>In <span className="text-warmGold font-medium">your soul</span>. Always your soul.</p>
              </div>
            </div>

            <p>
              Whenever life feels too heavy — come back here. Read these words again.
            </p>

            <div className="pt-8 text-center border-t border-warmGold/5 mt-8 space-y-2">
              <p className="font-playfair text-xl md:text-2xl gold-gradient font-bold">
                Your Bhaiya believes in you with all his heart.
              </p>
              <p className="font-playfair text-xl md:text-2xl gold-gradient font-bold">
                Your Bhaiya is always proud of you.
              </p>
              <p className="font-cormorant text-lg md:text-xl text-softIvory/70 italic mt-4">
                And that will never change — no matter what.
                <br />
                Wherever you are, whatever happens, your Bhaiya Aditya is right here. ✨
              </p>
            </div>
          </div>
        </motion.div>

        <div className="section-divider max-w-xl mx-auto my-16 opacity-25" />
      </div>
    </section>
  );
}
