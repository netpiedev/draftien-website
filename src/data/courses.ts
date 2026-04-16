export interface Program {
  id: string;
  tag: string;
  tagColor: string;
  image: string;
  title: string;
  description: string;
  duration: string;
  students: string;
  originalPrice: string;
  price: string;
}

// "courses" is the data source used by the `/courses` and `/courses/[id]` pages.
export const courses: Program[] = [
  {
    id: "1",
    tag: "JEE MAIN & ADV",
    tagColor: "bg-indigo-600",
    image: "/images/courses/course1.png",
    title: "JEE Achiever Batch 2025",
    description:
      "Complete syllabus coverage for Class 12 and Repeaters with weekly mock tests.",
    duration: "12 Months",
    students: "2.5k Students",
    originalPrice: "₹24,999",
    price: "₹14,999",
  },
  {
    id: "2",
    tag: "NEET UG",
    tagColor: "bg-pink-500",
    image: "/images/courses/course2.png",
    title: "NEET Mastery Elite",
    description:
      "In-depth Biology focus with NCERT-centric approach and daily practice problems.",
    duration: "10 Months",
    students: "4.1k Students",
    originalPrice: "₹19,999",
    price: "₹12,499",
  },
  {
    id: "3",
    tag: "FOUNDATION",
    tagColor: "bg-purple-600",
    image: "/images/courses/course3.png",
    title: "9th & 10th Pro Early Start",
    description:
      "Building strong fundamentals for Olympiads and early JEE/NEET competitive mindset.",
    duration: "24 Months",
    students: "1.2k Students",
    originalPrice: "₹29,999",
    price: "₹18,999",
  },
];
