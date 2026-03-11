export interface QuestionData {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

const questions: QuestionData[] = [
  {
    question:
      "Theo Luật Hôn nhân và Gia đình 2014, độ tuổi kết hôn của nam là bao nhiêu?",
    options: ["18 tuổi", "20 tuổi", "21 tuổi", "22 tuổi"],
    answer: 1,
    explanation: "Theo Điều 8: Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi."
  },
  {
    question:
      "Nguyên tắc hôn nhân của Việt Nam là gì?",
    options: [
      "Một vợ nhiều chồng",
      "Một vợ một chồng",
      "Tự do tuyệt đối",
      "Cha mẹ quyết định"
    ],
    answer: 1,
    explanation:
      "Theo Điều 2 Luật HN&GĐ 2014: Hôn nhân một vợ một chồng."
  }
];

export default questions;
