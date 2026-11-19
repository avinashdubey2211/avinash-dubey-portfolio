import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Neon ERP",
    category: "Business Management Platform",
    description:
      "A business management platform with responsive dashboards, reusable UI components and API-integrated features for managing business operations.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "REST API"],
    icon: FiLayers,
    gradient: "from-blue-500 to-cyan-400",
    live: "https://neonerp.com",
    github: "",
  },
  {
    id: 2,
    title: "Aara Social",
    category: "Social Media Platform",
    description:
      "A responsive web application focused on building clean user interfaces and reusable components with API integration.",
    tech: ["React.js", "JavaScript", "CSS", "REST API"],
    icon: FiMonitor,
    gradient: "from-purple-500 to-pink-500",
    live: "https://aarasocial.com",
    github: "",
  },
  {
    id: 3,
    title: "Aara Technologies",
    category: "Company Website",
    description:
      "A responsive company website with modern layouts, reusable components and user-friendly interface design.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    icon: FiCode,
    gradient: "from-orange-500 to-yellow-400",
    live: "https://aaratechnologies.com",
    github: "",
  },
];

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080D1A] text-white px-5 sm:px-8 lg:px-16 py-24">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-5">
          My Portfolio
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          My Recent{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          Here are some projects I have worked on, showcasing my skills in
          frontend development, responsive design and API integration.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.id}
              className="group bg-[#10172A] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Preview */}
              <div className="h-52 relative overflow-hidden bg-[#151E35] flex items-center justify-center">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition`}
                />

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300`}
                >
                  <Icon size={38} className="text-white" />
                </div>

                <span className="absolute top-5 left-5 text-xs text-gray-300 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
                  {project.category}
                </span>

                <span className="absolute bottom-5 right-5 text-5xl font-bold text-white/5">
                  0{project.id}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition text-sm font-semibold"
                  >
                    Live Demo <FiExternalLink />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
                      aria-label={`View ${project.title} source code`}
                    >
                      <FiGithub size={19} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto text-center mt-24 p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Have a Project in Mind?
        </h2>

        <p className="text-gray-400 mb-8">
          Let's work together and build something amazing.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
        >
          Let's Talk <FiArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Project;
