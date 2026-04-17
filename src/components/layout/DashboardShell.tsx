"use client";

import { LogOut, Moon } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

type SidebarLink = {
  label: string;
  href: string;
  icon: any;
};

export default function DashboardShell({
  children,
  links,
  role,
}: {
  children: React.ReactNode;
  links: SidebarLink[];
  role: "student" | "teacher";
}) {
  const { logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDarkMode(nextIsDark);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0B0F19] transition-colors">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl flex flex-col justify-between">
        {/* Top */}
        <div>
          {/* Logo */}
          <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-200 dark:border-white/10">
            <Image
              src="/images/logo.png"
              alt="Draftien"
              width={32}
              height={32}
            />
            <span className="font-semibold text-lg tracking-tight text-gray-900 dark:text-white">
              Draftien
            </span>
          </div>

          {/* Links */}
          <nav className="p-3 space-y-1">
            {links.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              const Icon = link.icon;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => router.push(link.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all",
                    isActive
                      ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10",
                  )}
                >
                  <Icon size={18} />
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="p-3 border-t border-gray-200 dark:border-white/10 space-y-1">
          {/* Appearance */}
          <button
            onClick={toggleTheme}
            type="button"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <Moon size={18} />
            {isDarkMode ? "Dark mode" : "Light mode"}
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader role={role} />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}

function DashboardHeader({ role }: { role: "student" | "teacher" }) {
  const pathname = usePathname();

  const getTitle = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 1) return "Dashboard";
    return formatTitle(segments[segments.length - 1]);
  };

  return (
    <header className="h-16 px-6 flex items-center justify-between border-b border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl">
      <div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {getTitle()}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {role === "student" ? "Student Panel" : "Teacher Panel"}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
          Welcome back 👋
        </span>

        <div className="w-9 h-9 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-medium">
          U
        </div>
      </div>
    </header>
  );
}

function formatTitle(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
