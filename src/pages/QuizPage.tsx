import Quiz from "../components/Quiz";
import { motion } from "motion/react";
import { ClipboardCheck } from "lucide-react";

const QuizPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 text-emerald-600 rounded-full mb-4">
          <ClipboardCheck size={32} />
        </div>
        <h1 className="text-3xl font-black text-slate-900">Trắc nghiệm kiến thức</h1>
        <p className="text-slate-500 mt-2">Kiểm tra lại những gì bạn đã học được</p>
      </div>

      <Quiz />
    </motion.div>
  );
};

export default QuizPage;
