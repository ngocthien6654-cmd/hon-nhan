import lessons from "../data/lessons";
import { motion } from "motion/react";
import { BookMarked } from "lucide-react";

const Lessons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
          <BookMarked size={24} />
        </div>
        <h1 className="text-3xl font-black text-slate-900">Nội dung ôn tập</h1>
      </div>

      <div className="space-y-6">
        {lessons.map((lesson, index) => (
          <motion.div 
            key={index} 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-3">{lesson.title}</h3>
            <p className="text-slate-600 leading-relaxed">{lesson.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Lessons;
