import { motion } from "motion/react";
import { BookOpen, CheckCircle, Users, Heart, Scale } from "lucide-react";

const Home = () => {
  const features = [
    { icon: <BookOpen className="text-blue-500" />, text: "Nguyên tắc cơ bản của chế độ hôn nhân" },
    { icon: <CheckCircle className="text-green-500" />, text: "Điều kiện kết hôn" },
    { icon: <Users className="text-purple-500" />, text: "Quan hệ giữa vợ và chồng" },
    { icon: <Heart className="text-red-500" />, text: "Quan hệ giữa cha mẹ và con" },
    { icon: <Scale className="text-amber-500" />, text: "Ly hôn" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Ôn tập Luật Hôn nhân <br/> & Gia đình 2014
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Ứng dụng giúp sinh viên ngành Luật ôn tập các kiến thức quan trọng trong Luật Hôn nhân và Gia đình Việt Nam 2014 một cách trực quan và hiệu quả.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Nội dung chính:</h3>
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 text-slate-700 font-medium"
              >
                <div className="p-2 bg-slate-50 rounded-lg">
                  {item.icon}
                </div>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <img 
            src="https://picsum.photos/seed/law/600/400" 
            alt="Law Review" 
            className="relative rounded-3xl shadow-2xl border-4 border-white"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
