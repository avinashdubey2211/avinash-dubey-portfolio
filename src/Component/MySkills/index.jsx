import React from "react";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiLayout,
  FiTerminal,
  FiGitBranch,
  FiZap,
  FiGlobe,
} from "react-icons/fi";

const MySkills = () => {
  const skills = [
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FiCode />,
      level: "Advanced",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FiLayout />,
      level: "Advanced",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FiCode />,
      level: "Intermediate",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: <FiZap />,
      level: "Intermediate",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: <FiGlobe />,
      level: "Learning",
      color: "from-gray-500 to-gray-800",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <FiLayout />,
      level: "Intermediate",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Python",
      category: "Programming",
      icon: <FiTerminal />,
      level: "Learning",
      color: "from-yellow-500 to-blue-500",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FiServer />,
      level: "Basic",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <FiServer />,
      level: "Basic",
      color: "from-gray-500 to-gray-700",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <FiDatabase />,
      level: "Basic",
      color: "from-green-500 to-lime-600",
    },
    {
      name: "REST APIs",
      category: "Backend",
      icon: <FiGitBranch />,
      level: "Intermediate",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      icon: <FiGitBranch />,
      level: "Intermediate",
      color: "from-orange-500 to-pink-500",
    },
  ];

  const categories = [
    "All Skills",
    "Frontend",
    "Backend",
    "Programming",
    "Database",
    "Tools",
  ];

  return (
    <section className="relative bg-[#080D1A] text-white py-24 px-5 sm:px-8 overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold tracking-wider">
            <FiZap />
            MY EXPERTISE
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold mt-7">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Skills
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-8">
            Technologies and tools I use to build modern, responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* SKILLS CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white"
                  : "bg-[#121D32] border-white/10 text-gray-400 hover:text-white hover:border-blue-400"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-2xl bg-[#121D32] border border-white/10 hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="flex justify-between items-center">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition`}
                >
                  {skill.icon}
                </div>

                <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {skill.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mt-6 group-hover:text-blue-400 transition">
                {skill.name}
              </h3>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">Skill Level</span>

                <span className="text-sm font-semibold text-blue-400">
                  {skill.level}
                </span>
              </div>

              <div className="h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} ${
                    skill.level === "Advanced"
                      ? "w-[85%]"
                      : skill.level === "Intermediate"
                        ? "w-[65%]"
                        : skill.level === "Basic"
                          ? "w-[40%]"
                          : "w-[25%]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Always learning new technologies and improving my development
            skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
