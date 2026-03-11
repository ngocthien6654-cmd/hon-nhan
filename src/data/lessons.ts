export interface Lesson {
  title: string;
  content: string;
}

const lessons: Lesson[] = [
  {
    title: "Nguyên tắc cơ bản",
    content:
      "Theo Điều 2 Luật Hôn nhân và Gia đình 2014: Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng."
  },
  {
    title: "Điều kiện kết hôn",
    content:
      "Theo Điều 8 Luật Hôn nhân và Gia đình 2014: Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi; việc kết hôn do nam và nữ tự nguyện quyết định."
  },
  {
    title: "Quan hệ vợ chồng",
    content:
      "Vợ chồng bình đẳng với nhau, có nghĩa vụ tôn trọng, chăm sóc và giúp đỡ nhau."
  },
  {
    title: "Ly hôn",
    content:
      "Theo Điều 51: Vợ, chồng hoặc cả hai người có quyền yêu cầu Tòa án giải quyết ly hôn."
  }
];

export default lessons;
