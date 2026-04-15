import { motion } from "motion/react";
import logo from "../../imports/logo_updated_black.png";

interface QuizWelcomeProps {
  onStart: () => void;
}

export function QuizWelcome({ onStart }: QuizWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8 max-w-4xl mx-auto">
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-black mb-0 uppercase tracking-tight flex flex-wrap items-center justify-center gap-3 md:gap-4 leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span>What's Your</span>
        <img
          src={logo}
          alt="KSDT"
          className="h-10 md:h-30 lg:h-36 object-contain invert inline-block"
        />
        <span className="text-[#ff8dca]">Frequency?</span>
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-gray-400 mb-1 uppercase tracking-widest font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        A Personality Quiz
      </motion.p>

      <motion.p
        className="text-sm md:text-base text-gray-300 mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Discover which department at KSDT Radio is the perfect
        fit for you! Answer a few questions about your
        interests, skills, and personality.
      </motion.p>

      <motion.button
        onClick={onStart}
        className="bg-[#ff8dca] hover:bg-[#ff8dca]/90 text-black px-10 py-4 rounded-full text-lg md:text-xl font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,141,202,0.3)] hover:shadow-[0_0_30px_rgba(255,141,202,0.5)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Quiz
      </motion.button>
    </div>
  );
}