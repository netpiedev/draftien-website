import { ArrowRight, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/data/courses";

interface CourseCardProps {
  course: Program;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-52 w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />

          {/* Tag Badge */}
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${course.tagColor}`}
          >
            {course.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
            {course.title}
          </h3>

          {/* Stats */}
          <div className="mt-3 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {course.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              {course.students}
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-600">
              {course.price}
            </span>
            <span className="text-sm text-gray-400 line-through">
              {course.originalPrice}
            </span>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white cursor-pointer transition hover:bg-indigo-700"
          >
            Enroll Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
}
