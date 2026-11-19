import React from "react";
import {
  FiUser,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiArrowUpRight,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "REST APIs",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Git & GitHub",
  ];

  const journey = [
    {
      icon: <FiBriefcase />,
      title: "Frontend Developer Intern",
      company: "Aara Groups",
      duration: "7 Months",
      description:
        "Worked on responsive web interfaces, reusable React components, dashboards and API integration. Contributed to real-world projects including ERP and social platform applications.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiBookOpen />,
      title: "Bachelor of Technology",
      company: "Shri Ramswaroop Memorial University",
      duration: "Computer Science & Engineering",
      description:
        "Completed B.Tech in Computer Science and Engineering with a foundation in programming, software development and computer science concepts.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const stats = [
    {
      number: "7 Months",
      label: "Internship Experience",
      icon: <FiBriefcase />,
    },
    { number: "12+", label: "Technical Skills", icon: <FiCode /> },
    { number: "B.Tech", label: "Education", icon: <FiAward /> },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-5 sm:px-8 pt-20 pb-16">
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 blur-[130px] rounded-full" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium">
            <FiUser />
            ABOUT ME
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-7">
            Get To Know{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me Better
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-base sm:text-lg leading-8">
            A passionate Full Stack Developer interested in building modern web
            applications, solving problems and learning new technologies.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* PROFILE CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl" />

            <div className="relative bg-[#121D32] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl shadow-xl shadow-blue-500/20">
                <FiUser />
              </div>

              <h2 className="text-3xl font-bold mt-7">Avinash Dubey</h2>

              <p className="text-blue-400 font-medium mt-2">
                Full Stack Developer
              </p>

              <p className="text-gray-400 leading-8 mt-6">
                I am a Computer Science graduate with 7 months of internship
                experience at Aara Groups. I have worked with React.js,
                JavaScript, Tailwind CSS and REST APIs to build responsive and
                interactive web applications.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMapPin className="text-blue-400 text-xl" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FiBriefcase className="text-blue-400 text-xl" />
                  <span>7 Months Internship Experience</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FiCalendar className="text-blue-400 text-xl" />
                  <span>B.Tech - Computer Science</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* ABOUT TEXT */}
          <div>
            <span className="text-blue-400 uppercase tracking-[3px] text-sm font-semibold">
              Who I Am
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
              Building Digital Experiences With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                Passion & Creativity
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              My development journey started with an interest in technology and
              web development. I enjoy creating user-friendly interfaces and
              connecting them with backend APIs.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              During my internship at Aara Groups, I gained practical experience
              working on real-world web projects, responsive layouts, reusable
              components and API integration.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              My goal is to grow as a Full Stack Developer by continuously
              improving my frontend and backend development skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#121D32] border border-white/10 hover:border-blue-400/40 hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-blue-400 text-2xl mb-3">{stat.icon}</div>

                  <h3 className="text-xl font-bold">{stat.number}</h3>

                  <p className="text-gray-500 text-xs mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-[#0D1425] border-y border-white/5 py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold tracking-[3px]">
              MY TECH STACK
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Skills
              </span>
            </h2>

            <p className="text-gray-400 mt-4">
              Technologies and tools I use to build web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#141E32] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 hover:-translate-y-1 transition duration-300 shadow-lg shadow-black/10"
              >
                <FiCheckCircle className="text-blue-400" />
                <span className="font-medium text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-[3px]">
            MY BACKGROUND
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {journey.map((item, index) => (
            <div
              key={index}
              className="relative p-7 sm:p-9 rounded-2xl bg-[#121D32] border border-white/10 hover:border-blue-400/40 shadow-xl shadow-black/10 transition duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div
                  className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>

                    <span className="text-blue-400 text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-purple-400 font-medium mt-2">
                    {item.company}
                  </p>

                  <p className="text-gray-400 leading-7 mt-4 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Let's Work Together
              </h2>

              <p className="text-blue-100 mt-4 max-w-xl leading-7">
                Have an interesting project or opportunity? Let's connect and
                create something meaningful.
              </p>
            </div>

            <a
              href="mailto:"
              className="shrink-0 flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:-translate-y-1 transition shadow-xl"
            >
              Get In Touch
              <FiArrowUpRight className="text-xl" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
