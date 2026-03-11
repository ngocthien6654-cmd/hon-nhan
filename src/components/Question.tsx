import React from "react";
import { QuestionData } from "../data/questions";
import { motion } from "motion/react";

interface QuestionProps {
  data: QuestionData;
  choose: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ data, choose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
    >
      <h3 className="text-xl font-semibold text-slate-800 mb-6 leading-tight">
        {data.question}
      </h3>

      <div className="grid gap-3">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => choose(index)}
            className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-slate-700 font-medium group flex items-center justify-between"
          >
            <span>{option}</span>
            <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-indigo-500 flex items-center justify-center text-xs text-transparent group-hover:text-indigo-500">
              ✓
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;
