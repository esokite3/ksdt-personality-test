import { RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import logo from "../../imports/logo_updated_black.png";

interface Department {
  name: string;
  score: number;
  description: string;
  icon: string;
}

interface QuizResultsProps {
  topDepartment: Department;
  allDepartments: Department[];
  onRestart: () => void;
}

export function QuizResults({ topDepartment, allDepartments, onRestart }: QuizResultsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.div 
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={logo}
            alt="KSDT"
            className="w-16 h-16 md:w-20 md:h-20 object-contain invert"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,141,202,0.4))",
            }}
          />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Perfect Match!
        </motion.h1>

        <motion.p 
          className="text-gray-400 uppercase tracking-wider font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Based on your answers, we recommend:
        </motion.p>
      </div>
      
      {/* Top Department */}
      <motion.div 
        className="bg-[#ff8dca] text-black p-8 md:p-12 mb-10 rounded-3xl border-4 border-[#ff8dca] shadow-[0_0_30px_rgba(255,141,202,0.4)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center">
          <motion.div 
            className="text-6xl md:text-7xl mb-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {topDepartment.icon}
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {topDepartment.name}
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl mb-6 font-bold opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {topDepartment.description}
          </motion.p>

          <motion.div 
            className="inline-block bg-black text-[#ff8dca] px-6 py-3 rounded-full font-black uppercase tracking-wider text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {topDepartment.score}% Match
          </motion.div>
        </div>
      </motion.div>
      
      {/* Other Departments */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="text-2xl font-black mb-6 uppercase tracking-wide">
          Other Great Matches
        </h3>

        <div className="grid gap-4">
          {allDepartments.slice(1, 4).map((dept, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 border-2 border-white/20 rounded-2xl p-5 flex items-center justify-between hover:border-[#ff8dca]/50 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{dept.icon}</span>
                <div>
                  <h4 className="font-black uppercase tracking-wide mb-1">
                    {dept.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {dept.description}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-black text-[#ff8dca]">
                  {dept.score}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* All Scores */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <details className="bg-white/5 border-2 border-white/20 rounded-2xl p-5">
          <summary className="cursor-pointer font-black text-white uppercase tracking-wide">
            View All Department Scores
          </summary>

          <div className="mt-6 space-y-3">
            {allDepartments.map((dept, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{dept.icon}</span>
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {dept.name}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-32 bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-[#ff8dca] h-2 rounded-full shadow-[0_0_8px_rgba(255,141,202,0.4)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${dept.score}%` }}
                      transition={{ duration: 0.8, delay: 1.6 + (index * 0.05), ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <span className="text-sm font-black w-12 text-right text-[#ff8dca]">
                    {dept.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </details>
      </motion.div>
      
      {/* Restart Button */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.button 
          onClick={onRestart}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-[#ff8dca] text-white px-8 py-4 rounded-full transition-all uppercase tracking-wider font-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw className="w-5 h-5" />
          Take Quiz Again
        </motion.button>
      </motion.div>
    </div>
  );
}