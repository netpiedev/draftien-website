"use client";

import { BookOpen, CheckCircle, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Role = "student" | "teacher";

export default function SelectRolePage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!selectedRole) return;

    router.push(
      selectedRole === "student"
        ? "/onboarding/student"
        : "/onboarding/teacher",
    );
  };

  const roles = [
    {
      id: "student",
      title: "Student",
      description:
        "Prepare for JEE, NEET, and competitive exams with expert guidance, live classes, and personalized learning.",
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-500",
      bg: "bg-indigo-50",
    },
    {
      id: "teacher",
      title: "Teacher",
      description:
        "Empower students by delivering high-quality lessons, managing courses, and mentoring future achievers.",
      icon: BookOpen,
      gradient: "from-pink-500 to-purple-500",
      bg: "bg-pink-50",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F3FF] px-4 py-12">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-8 shadow-lg sm:p-12">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Draftien"
              width={150}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Select Your Role
          </h1>
          <p className="mt-2 text-gray-600">
            Tell us how you'd like to use{" "}
            <span className="font-semibold text-indigo-600">Draftien</span>.
          </p>
        </div>

        {/* Role Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id as Role)}
                className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-indigo-600 ring-2 ring-indigo-200 shadow-md"
                    : "border-gray-200 hover:border-indigo-400 hover:shadow-sm"
                }`}
              >
                {/* Selected Badge */}
                {isSelected && (
                  <CheckCircle className="absolute right-4 top-4 h-6 w-6 text-indigo-600" />
                )}

                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r ${role.gradient} text-white`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600">{role.description}</p>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selectedRole}
          className="mt-10 w-full rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue
        </button>

        {/* Back Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Want to verify again?{" "}
          <Link
            href="/verify-otp"
            className="font-medium text-indigo-600 hover:underline"
          >
            Go back
          </Link>
        </p>
      </div>
    </div>
  );
}
