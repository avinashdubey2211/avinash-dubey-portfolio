import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiMessageSquare,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:your-email@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailto;
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Address",
      value: "your-email@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone Number",
      value: "+91 XXXXXXXXXX",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Lucknow, Uttar Pradesh, India",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-5 sm:px-8 pt-24 pb-16">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[130px]" />
        <div className="absolute right-10 bottom-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[130px]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold">
            <FiMessageSquare />
            GET IN TOUCH
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-7">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Connect
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-base sm:text-lg leading-8">
            Have a project in mind or want to discuss an opportunity? I'd love
            to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* CONTACT DETAILS */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Contact Information
              </h2>
              <p className="text-gray-400 mt-3 leading-7">
                Feel free to reach out. I'm always open to discussing new
                projects and opportunities.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#121D32] border border-white/10 hover:border-blue-400/40 transition"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-gray-400 text-sm">{item.title}</h3>
                  <p className="font-semibold mt-1 break-all">{item.value}</p>
                </div>
              </div>
            ))}

            {/* SOCIAL LINKS */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl bg-[#121D32] border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-[#121D32] border border-white/10 flex items-center justify-center text-xl hover:bg-blue-600 transition"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#121D32] border border-white/10 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Send Me a Message
              </h2>

              <p className="text-gray-400 mt-3 mb-8">
                Fill out the form below and let's start a conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-4 rounded-xl bg-[#080D1A] border border-white/10 outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-4 rounded-xl bg-[#080D1A] border border-white/10 outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                    className="w-full px-4 py-4 rounded-xl bg-[#080D1A] border border-white/10 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="5"
                    required
                    className="w-full px-4 py-4 rounded-xl bg-[#080D1A] border border-white/10 outline-none focus:border-blue-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/20"
                >
                  Send Message
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="text-center px-5 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Let's Build Something Amazing!
        </h2>
        <p className="text-gray-400 mt-3">
          Turning ideas into powerful digital experiences.
        </p>
      </section>
    </main>
  );
};

export default Contact;
