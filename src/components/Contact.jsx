import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent to Om.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Contact Information</h3>
            <div className="space-y-6">
              {[
                {
                  icon: "fas fa-envelope",
                  label: "Email",
                  value: "omshende123@gmail.com",
                  href: "mailto:omshende123@gmail.com",
                },
                {
                  icon: "fas fa-phone-alt",
                  label: "Phone",
                  value: "+91 9146215124",
                  href: "tel:+919146215124",
                },
                {
                  icon: "fab fa-instagram",
                  label: "Instagram",
                  value: "@omshende_02",
                  href: "https://instagram.com/omshende_02",
                },
                {
                  icon: "fab fa-youtube",
                  label: "YouTube",
                  value: "Om Shende",
                  href: "https://www.youtube.com/@omshende_02",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-indigo-800/30 p-3 rounded-lg mr-4 text-indigo-400">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{item.label}</h4>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-indigo-300 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4 text-indigo-300">Availability</h4>
              <p className="text-gray-300">
                I'm currently available for freelance projects and collaborations. Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/30">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
