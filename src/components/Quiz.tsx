import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, RotateCcw } from "lucide-react";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const choose = (answer: number) => {
    if (answer === questions[index].answer) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center max-w-md mx-auto"
      >
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-600">
          <Trophy size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Hoàn thành!</h2>
        <p className="text-slate-500 mb-6">Bạn đã trả lời đúng được:</p>
        <div className="text-5xl font-black text-indigo-600 mb-8">
          {score} <span className="text-2xl text-slate-400 font-normal">/ {questions.length}</span>
        </div>
        <button 
          onClick={resetQuiz}
          className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          <RotateCcw size={20} />
          Làm lại trắc nghiệm
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 flex justify-between items-center px-2">
        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
          Câu hỏi {index + 1} / {questions.length}
        </span>
        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300" 
            style={{ width: `${((index + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <Question
          key={index}
          data={questions[index]}
          choose={choose}
        />
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
