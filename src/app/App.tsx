import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QuizWelcome } from "./components/QuizWelcome";
import { QuizQuestion } from "./components/QuizQuestion";
import { QuizResults } from "./components/QuizResults";
import { questions } from "./data/questions";
import { departments } from "./data/departments";

type QuizState = "welcome" | "quiz" | "results";
type Answer = number | number[] | null;

export default function App() {
  const [state, setState] = useState<QuizState>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    new Array(questions.length).fill(null),
  );
  const [scores, setScores] = useState<Record<string, number>>(
    {},
  );

  const handleStart = () => {
    setState("quiz");
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setScores({});
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const question = questions[currentQuestion];
    const newAnswers = [...answers];

    if (question.multiSelect) {
      const current = Array.isArray(newAnswers[currentQuestion])
        ? (newAnswers[currentQuestion] as number[])
        : [];
      // Toggle: remove if already selected, add if not
      newAnswers[currentQuestion] = current.includes(
        answerIndex,
      )
        ? current.filter((i) => i !== answerIndex)
        : [...current, answerIndex];
    } else {
      newAnswers[currentQuestion] = answerIndex;
    }

    setAnswers(newAnswers);
  };

  const handleNext = () => {
    const question = questions[currentQuestion];
    const answer = answers[currentQuestion];
    const newScores = { ...scores };

    // Collect all selected option indices (works for both single and multi)
    const selectedIndices: number[] = Array.isArray(answer)
      ? answer
      : answer !== null
        ? [answer]
        : [];

    selectedIndices.forEach((index) => {
      const selectedOption = question.options[index];
      Object.entries(selectedOption.scores).forEach(
        ([dept, points]) => {
          newScores[dept] = (newScores[dept] || 0) + points;
        },
      );
    });

    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setState("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setState("welcome");
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setScores({});
  };

  const getResults = () => {
    const maxScore = Math.max(...Object.values(scores));
    const allDepartments = Object.keys(departments)
      .map((deptName) => {
        const score = scores[deptName] || 0;
        const percentage =
          maxScore > 0
            ? Math.round((score / maxScore) * 100)
            : 0;
        return {
          name: deptName,
          score: percentage,
          description: departments[deptName].description,
          icon: departments[deptName].icon,
        };
      })
      .sort((a, b) => b.score - a.score);

    return {
      topDepartment: allDepartments[0],
      allDepartments,
    };
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="w-full">
        <AnimatePresence mode="wait">
          {state === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <QuizWelcome onStart={handleStart} />
            </motion.div>
          )}

          {state === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <QuizQuestion
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                selectedAnswer={answers[currentQuestion]}
                onSelectAnswer={handleSelectAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            </motion.div>
          )}

          {state === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <QuizResults
                topDepartment={getResults().topDepartment}
                allDepartments={getResults().allDepartments}
                onRestart={handleRestart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}