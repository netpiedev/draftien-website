"use client";

import { BookOpen, Calendar, Clock, IndianRupee, Users } from "lucide-react";

export default function TeacherPage() {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Earnings"
          value="₹48,200"
          icon={IndianRupee}
          trend="+12%"
        />
        <StatCard
          title="Active Students"
          value="128"
          icon={Users}
          trend="+8%"
        />
        <StatCard
          title="Classes Taken"
          value="342"
          icon={BookOpen}
          trend="+5%"
        />
        <StatCard
          title="Upcoming Classes"
          value="6"
          icon={Calendar}
          trend="Today"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Classes */}
        <div className="lg:col-span-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Recent Classes
          </h2>

          <div className="space-y-4">
            {[
              "Physics - Laws of Motion",
              "Chemistry - Organic Basics",
              "Maths - Calculus Intro",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    45 students attended
                  </p>
                </div>

                <span className="text-xs text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Today’s Schedule
          </h2>

          <div className="space-y-3">
            {[
              { subject: "Physics", time: "10:00 AM" },
              { subject: "Maths", time: "1:00 PM" },
              { subject: "Chemistry", time: "5:00 PM" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/10"
              >
                <Clock size={16} className="text-indigo-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.subject}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Recent Activity
          </h2>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>✅ New student enrolled in Physics batch</p>
            <p>📢 Assignment uploaded for Maths</p>
            <p>💬 Message received from student</p>
            <p>⭐ New 5-star review received</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>

          <div className="space-y-2">
            <button className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition">
              + Create New Class
            </button>
            <button className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition">
              Upload Assignment
            </button>
            <button className="w-full text-left bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: any;
  trend: string;
}) {
  return (
    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
        <p className="text-xs text-green-500 mt-1">{trend}</p>
      </div>

      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
        <Icon size={20} />
      </div>
    </div>
  );
}
