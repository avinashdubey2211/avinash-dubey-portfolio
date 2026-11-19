import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FiCode,
  FiMonitor,
  FiSmartphone,
  FiDatabase,
  FiServer,
  FiLayers,
  FiArrowUpRight,
  FiCheckCircle,
  FiZap,
  FiGlobe,
} from "react-icons/fi";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FiMonitor />,
      title: "Frontend Development",
      description:
        "Building modern, interactive and responsive user interfaces using React.js, JavaScript and Tailwind CSS.",
      tags: ["React.js", "JavaScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
      number: "01",
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description:
        "Developing server-side functionality, backend logic and scalable application architecture.",
      tags: ["Node.js", "Express.js", "REST APIs"],
      color: "from-purple-500 to-pink-500",
      number: "02",
    },
    {
      icon: <FiDatabase />,
      title: "Database Management",
      description:
        "Working with databases to store, organize and manage application data efficiently.",
      tags: ["MongoDB", "Database", "CRUD"],
      color: "from-green-500 to-emerald-500",
      number: "03",
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Web Design",
      description:
        "Creating mobile-friendly websites that deliver a consistent experience across different screen sizes.",
      tags: ["Mobile UI", "CSS", "Tailwind"],
      color: "from-orange-500 to-yellow-500",
      number: "04",
    },
    {
      icon: <FiCode />,
      title: "API Integration",
      description:
        "Connecting frontend applications with REST APIs to create dynamic and data-driven experiences.",
      tags: ["REST API", "Axios", "Fetch"],
      color: "from-indigo-500 to-blue-500",
      number: "05",
    },
    {
      icon: <FiLayers />,
      title: "Web Application Development",
      description:
        "Developing complete web application interfaces with reusable components and structured code.",
      tags: ["React", "Components", "Web Apps"],
      color: "from-pink-500 to-rose-500",
      number: "06",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understanding",
      description:
        "Understanding the project requirements, goals and expected functionality.",
      icon: <FiGlobe />,
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Planning the structure and creating a clean, user-friendly interface.",
      icon: <FiLayers />,
    },
    {
      number: "03",
      title: "Development",
      description:
        "Writing clean code and implementing the required functionality.",
      icon: <FiCode />,
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Checking responsiveness, functionality and fixing development issues.",
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-5 sm:px-8 pt-24 pb-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[130px]" />
        <div className="absolute right-10 bottom-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold tracking-wider">
            <FiZap />
            WHAT I OFFER
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-7 leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-base sm:text-lg leading-8">
            I create modern web solutions using the latest technologies,
            focusing on responsive design, clean code and user experience.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative p-7 sm:p-8 rounded-3xl bg-[#121D32] border border-white/10 hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] overflow-hidden"
            >
              {/* Background Effect */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition duration-500`}
                  >
                    {service.icon}
                  </div>

                  <span className="text-4xl font-bold text-white/10 group-hover:text-blue-400/30 transition">
                    {service.number}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-300 transition">
                  {service.title}
                </h2>

                <p className="text-gray-400 text-sm leading-7 mt-4 min-h-20">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
                  <span className="text-gray-400 text-sm font-medium">
                    Learn More
                  </span>

                  <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-blue-600 flex items-center justify-center text-gray-300 group-hover:text-white transition duration-300">
                    <FiArrowUpRight className="text-xl" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-[#0D1425] border-y border-white/5 py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-[3px]">
              HOW I WORK
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              My Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Process
              </span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
              A structured approach to building reliable and user-friendly web
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div
                key={item.number}
                className="relative p-7 rounded-2xl bg-[#121D32] border border-white/10 hover:border-purple-400/40 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <span className="text-3xl font-bold text-white/10">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="text-gray-400 text-sm leading-7 mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <span className="text-blue-100 text-sm font-semibold tracking-widest">
                LET'S CONNECT
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4">
                Have an Idea?
                <br />
                Let's Build It Together.
              </h2>

              <p className="text-blue-100 mt-4 max-w-xl leading-7">
                Let's discuss your ideas and turn them into meaningful digital
                experiences.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="shrink-0 flex items-center gap-3 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition duration-300 shadow-xl"
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

export default Services;
