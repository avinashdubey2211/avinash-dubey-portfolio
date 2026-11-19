import React from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCode,
  FiCheckCircle,
  FiArrowUpRight,
  FiZap,
} from "react-icons/fi";

const Experience = () => {
  const responsibilities = [
    "Developed responsive and user-friendly web interfaces using React.js.",
    "Built reusable UI components and interactive dashboards.",
    "Integrated REST APIs with frontend applications.",
    "Worked with JavaScript, Tailwind CSS and modern frontend technologies.",
    "Improved UI responsiveness and user experience across devices.",
  ];

  const technologies = [
    "React.js",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "REST APIs",
  ];

  return (
    <section className="relative bg-[#080D1A] text-white py-24 px-5 sm:px-8 overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[130px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold tracking-wider">
            <FiBriefcase />
            MY JOURNEY
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold mt-7">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Experience
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-8">
            My professional journey, practical experience and the technologies I
            have worked with.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-7 sm:pl-10 border-l-2 border-blue-500/30">
            {/* TIMELINE DOT */}
            <div className="absolute -left-[11px] top-8 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#080D1A] shadow-lg shadow-blue-500/50" />

            <div className="group relative p-6 sm:p-10 rounded-3xl bg-[#121D32] border border-white/10 hover:border-blue-400/40 transition-all duration-500 shadow-xl">
              {/* TOP SECTION */}
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <FiBriefcase className="text-3xl" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      Frontend Developer Intern
                    </h3>

                    <p className="text-blue-400 font-semibold mt-2">
                      Aara Groups
                    </p>
                  </div>
                </div>

                <span className="h-fit w-fit px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                  Internship
                </span>
              </div>

              {/* EXPERIENCE DETAILS */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-8 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-blue-400" />7 Months
                </div>

                <div className="flex items-center gap-2">
                  <FiMapPin className="text-blue-400" />
                  India
                </div>

                <div className="flex items-center gap-2">
                  <FiBriefcase className="text-blue-400" />
                  Professional Experience
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-9">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <FiCode className="text-blue-400" />
                  Responsibilities
                </h4>

                <div className="space-y-4 mt-6">
                  {responsibilities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-gray-400 text-sm sm:text-base leading-7"
                    >
                      <FiCheckCircle className="text-blue-400 mt-1 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-9 pt-7 border-t border-white/10">
                <h4 className="text-lg font-bold flex items-center gap-2 mb-5">
                  <FiZap className="text-purple-400" />
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-blue-400/50 hover:text-blue-400 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400">
            Looking forward to new opportunities and challenges.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 mt-6 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
          >
            Let's Connect
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
