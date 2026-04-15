import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface Question {
  id: number;
  question: string;
  multiSelect?: boolean;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | number[] | null;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function QuizQuestion({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrevious,
}: QuizQuestionProps) {
  const isMulti = question.multiSelect === true;

  const isSelected = (index: number) => {
    if (isMulti) {
      return (
        Array.isArray(selectedAnswer) &&
        selectedAnswer.includes(index)
      );
    }
    return selectedAnswer === index;
  };

  const hasAnswer = isMulti
    ? Array.isArray(selectedAnswer) && selectedAnswer.length > 0
    : selectedAnswer !== null;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Progress bar */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex justify-between text-sm text-gray-400 mb-3 uppercase tracking-wider font-bold">
          <span>
            Question {currentQuestion + 1} / {totalQuestions}
          </span>
          <span>
            {Math.round(
              ((currentQuestion + 1) / totalQuestions) * 100,
            )}
            %
          </span>
        </div>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <motion.div
            className="bg-[#ff8dca] h-2 rounded-full shadow-[0_0_10px_rgba(255,141,202,0.5)]"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>
      </motion.div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={question.id}
          className="text-2xl md:text-4xl font-black mb-3 text-center uppercase tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {question.question}
        </motion.h2>
      </AnimatePresence>

      {/* Multi-select hint */}
      <AnimatePresence mode="wait">
        {isMulti && (
          <motion.p
            key={`hint-${question.id}`}
            className="text-sm text-gray-400 text-center mb-8 uppercase tracking-widest font-bold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Select all that apply
          </motion.p>
        )}
        {!isMulti && (
          <motion.div
            key={`spacer-${question.id}`}
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Options */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="space-y-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {question.options.map((option, index) => {
            const selected = isSelected(index);
            return (
              <motion.button
                key={index}
                onClick={() => onSelectAnswer(index)}
                className={`w-full p-5 md:p-6 text-left border-2 rounded-full transition-all font-semibold ${
                  selected
                    ? "border-[#ff8dca] bg-[#ff8dca]/20 shadow-[0_0_15px_rgba(255,141,202,0.3)]"
                    : "border-white/20 hover:border-[#ff8dca]/50 bg-white/5 hover:bg-white/10"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  {/* Radio for single, checkbox style for multi */}
                  <div
                    className={`w-6 h-6 mr-4 flex-shrink-0 flex items-center justify-center transition-all border-2 ${
                      isMulti ? "rounded-md" : "rounded-full"
                    } ${
                      selected
                        ? "border-[#ff8dca] bg-[#ff8dca]"
                        : "border-white/40"
                    }`}
                  >
                    {selected && (
                      <motion.div
                        className={`bg-black ${isMulti ? "w-3 h-3 rounded-sm" : "w-2 h-2 rounded-full"}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    )}
                  </div>
                  <span className="text-base md:text-lg">
                    {option.text}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.button
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className="flex items-center px-4 py-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors uppercase tracking-wider font-bold text-sm rounded-full"
          whileHover={{
            scale: currentQuestion === 0 ? 1 : 1.05,
          }}
          whileTap={{ scale: currentQuestion === 0 ? 1 : 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </motion.button>

        <motion.button
          onClick={onNext}
          disabled={!hasAnswer}
          className="flex items-center px-6 py-3 rounded-full bg-[#ff8dca] text-black hover:bg-[#ff8dca]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-wider font-black shadow-[0_0_15px_rgba(255,141,202,0.3)] hover:shadow-[0_0_25px_rgba(255,141,202,0.5)]"
          whileHover={{ scale: !hasAnswer ? 1 : 1.05 }}
          whileTap={{ scale: !hasAnswer ? 1 : 0.95 }}
        >
          {currentQuestion === totalQuestions - 1
            ? "See Results"
            : "Next"}
          <ChevronRight className="w-5 h-5 ml-1" />
        </motion.button>
      </motion.div>
    </div>
  );
}