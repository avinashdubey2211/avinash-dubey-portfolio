import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMonitor,
  FiZap,
} from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  const skills = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      desc: "Modern and responsive user interfaces.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      desc: "Scalable APIs and database solutions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiLayers />,
      title: "UI/UX Design",
      desc: "Clean, attractive and user-friendly designs.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Design",
      desc: "Perfect experience on every device.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 lg:pt-28 pb-24">
        {/* Background Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Welcome to my creative space
            </div>

            <div>
              <p className="text-gray-400 text-lg mb-3">Hello, I'm a</p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Full Stack
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developer.
                </span>
              </h1>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-8 max-w-xl">
              I build modern, responsive and user-friendly web applications
              using React, JavaScript, Node.js and modern web technologies.
              Turning creative ideas into digital experiences.
            </p>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-blue-400/50 hover:text-blue-300 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-3">
              <button
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-lg shadow-blue-600/20 hover:shadow-purple-500/30 hover:-translate-y-1 transition duration-300"
              >
                View Projects
                <FiArrowUpRight className="text-xl" />
              </button>

              <button
                onClick={() => navigate("/about")}
                className="flex items-center gap-3 px-7 py-4 rounded-xl border border-white/15 bg-white/5 font-semibold hover:bg-white/10 hover:border-blue-400/50 transition duration-300"
              >
                About Me
                <FiArrowUpRight className="text-xl" />
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-5 pt-5">
              <span className="text-gray-500 text-sm">Follow me:</span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 text-2xl hover:text-white hover:-translate-y-1 transition"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 text-2xl hover:text-blue-400 hover:-translate-y-1 transition"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE DESIGN */}
          <div className="relative flex justify-center items-center">
            {/* Outer Circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-blue-400/20 animate-[spin_25s_linear_infinite]" />

            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-400/20 border-dashed animate-[spin_35s_linear_infinite_reverse]" />

            {/* Main Card */}
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#17233D] to-[#101629] shadow-[0_20px_80px_rgba(37,99,235,0.15)]">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="ml-auto text-gray-500 text-xs">
                  developer.jsx
                </span>
              </div>

              <div className="space-y-5 font-mono text-sm sm:text-base">
                <p className="text-purple-400">
                  const <span className="text-blue-300">developer</span> = {"{"}
                </p>

                <div className="pl-6 space-y-4">
                  <p className="text-gray-400">
                    name: <span className="text-green-400">"Avinash"</span>,
                  </p>

                  <p className="text-gray-400">
                    role:{" "}
                    <span className="text-green-400">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="text-gray-400">
                    skills: <span className="text-yellow-300">[</span>
                  </p>

                  <div className="pl-6 text-green-400 space-y-2">
                    <p>"React.js",</p>
                    <p>"JavaScript",</p>
                    <p>"Node.js",</p>
                    <p>"MongoDB"</p>
                  </div>

                  <p className="text-yellow-300">],</p>

                  <p className="text-gray-400">
                    passion:{" "}
                    <span className="text-green-400">"Building Products"</span>
                  </p>
                </div>

                <p className="text-purple-400">{"}"}</p>
              </div>

              <div className="mt-8 flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-400/20">
                <div>
                  <p className="text-gray-400 text-xs">CURRENT FOCUS</p>
                  <p className="text-white font-semibold mt-1">
                    Building Amazing Web Apps
                  </p>
                </div>
                <FiZap className="text-yellow-400 text-3xl" />
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-2 sm:-left-8 top-12 p-4 rounded-xl bg-[#17233D] border border-white/10 shadow-xl animate-bounce [animation-duration:4s]">
              <FiMonitor className="text-blue-400 text-2xl" />
              <p className="text-white text-xs mt-2">Clean UI</p>
            </div>

            <div className="absolute -right-2 sm:-right-6 bottom-16 p-4 rounded-xl bg-[#17233D] border border-white/10 shadow-xl animate-bounce [animation-duration:5s]">
              <FiCode className="text-purple-400 text-2xl" />
              <p className="text-white text-xs mt-2">Clean Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / SKILLS SECTION */}
      <section className="relative bg-[#0D1425] border-t border-white/5 py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-400 text-sm font-semibold tracking-[3px] uppercase">
              What I Do
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              My Expertise &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Skills
              </span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              I focus on creating powerful digital solutions with modern
              technologies and clean development practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-7 rounded-2xl bg-[#141E32] border border-white/5 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)] transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl shadow-lg mb-6 group-hover:scale-110 transition duration-300`}
                >
                  {skill.icon}
                </div>

                <h3 className="text-lg font-bold mb-3">{skill.title}</h3>

                <p className="text-gray-400 text-sm leading-7">{skill.desc}</p>

                <div className="mt-6 flex items-center text-blue-400 text-sm font-medium gap-2">
                  Explore More
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-5 sm:px-8 py-20 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-blue-100 font-medium mb-3">
                HAVE A PROJECT IN MIND?
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Let's Build Something
                <br />
                Amazing Together.
              </h2>

              <p className="text-blue-100 mt-4 max-w-lg">
                Let's connect and turn your ideas into reality.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="shrink-0 flex items-center gap-3 px-7 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition duration-300 shadow-xl"
            >
              Contact Me
              <FiArrowUpRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
