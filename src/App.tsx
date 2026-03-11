import { useState } from "react";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import QuizPage from "./pages/QuizPage";
import { Home as HomeIcon, BookOpen, ClipboardCheck, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [page, setPage] = useState("home");

  const navItems = [
    { id: "home", label: "Trang chủ", icon: <HomeIcon size={18} /> },
    { id: "lessons", label: "Ôn tập", icon: <BookOpen size={18} /> },
    { id: "quiz", label: "Trắc nghiệm", icon: <ClipboardCheck size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setPage("home")}
            >
              <div className="p-2 bg-indigo-600 text-white rounded-lg group-hover:rotate-12 transition-transform">
                <Scale size={20} />
              </div>
              <span className="font-black text-xl tracking-tight text-slate-900 hidden sm:block">
                LawReview <span className="text-indigo-600">2014</span>
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    page === item.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.icon}
                  <span className="hidden md:block">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for a premium feel
            }}
          >
            {page === "home" && <Home />}
            {page === "lessons" && <Lessons />}
            {page === "quiz" && <QuizPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-top border-slate-200 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">
            © 2026 LawReview App • Ôn tập Luật Hôn nhân & Gia đình 2014
          </p>
        </div>
      </footer>
    </div>
  );
}
