import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);

  // EmailJS Configuration
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Debug logging
  useEffect(() => {
    console.log('=== EmailJS Configuration Check ===');
    console.log('Environment Variables Status:', {
      SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID ? '✅ Present' : '❌ Missing',
      TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ? '✅ Present' : '❌ Missing',
      PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? '✅ Present' : '❌ Missing'
    });
    console.log('Actual Values:', {
      SERVICE_ID,
      TEMPLATE_ID,
      PUBLIC_KEY
    });
  }, []);

  // Load EmailJS dynamically
  useEffect(() => {
    const loadEmailJS = () => {
      // Check if EmailJS is already loaded
      if (window.emailjs) {
        window.emailjs.init(PUBLIC_KEY);
        setEmailJSLoaded(true);
        console.log('EmailJS already loaded and initialized');
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init(PUBLIC_KEY);
          setEmailJSLoaded(true);
          console.log('EmailJS loaded and initialized successfully');
        } else {
          console.error('EmailJS failed to load');
          showToast('Failed to load email service. Please refresh the page.', 'error');
        }
      };
      
      script.onerror = () => {
        console.error('Failed to load EmailJS script');
        showToast('Failed to load email service. Please check your internet connection.', 'error');
      };
      
      document.head.appendChild(script);
    };

    loadEmailJS();
  }, []);

  // Toast component
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast('Please enter your name', 'error');
      return false;
    }
    if (!formData.email.trim()) {
      showToast('Please enter your email', 'error');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showToast('Please enter a valid email address', 'error');
      return false;
    }
    if (!formData.subject.trim()) {
      showToast('Please enter a subject', 'error');
      return false;
    }
    if (!formData.message.trim()) {
      showToast('Please enter your message', 'error');
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Om Shende',
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using EmailJS config:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });

      // Use EmailJS send method
      const response = await window.emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      return response;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is loaded
    if (!emailJSLoaded || !window.emailjs) {
      showToast('Email service is still loading. Please wait a moment and try again.', 'error');
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      console.log('Sending email with data:', formData);

      await sendEmail();

      // Show success toast
      showToast(`Thank you, ${formData.name}! Your message has been sent successfully.`, 'success');

      // Reset form
      setFormData({ 
        name: "", 
        email: "", 
        subject: "", 
        message: "" 
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Show error toast with detailed message
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.status === 400) {
        errorMessage = 'Invalid request. Please check your form data.';
      } else if (error.status === 401 || error.status === 403) {
        errorMessage = 'Authentication failed. Please contact the administrator.';
      } else if (error.status === 404) {
        errorMessage = 'Service not found. Please contact the administrator.';
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      }

      showToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 animate-bounce">
          <div className={`px-6 py-4 rounded-lg shadow-lg max-w-sm ${
            toast.type === 'success' 
              ? 'bg-green-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
            <div className="flex items-center">
              <span className="mr-2">
                {toast.type === 'success' ? '✅' : '❌'}
              </span>
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get In <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
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
                    icon: "✉️",
                    label: "Email",
                    value: "shendeom02@gmail.com",
                    href: "mailto:shendeom02@gmail.com",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 9146215124",
                    href: "tel:+919146215124",
                  },
                  {
                    icon: "📷",
                    label: "Instagram",
                    value: "@omshende_02",
                    href: "https://instagram.com/omshende_02",
                  },
                  {
                    icon: "🎥",
                    label: "YouTube",
                    value: "Om Shende",
                    href: "https://www.youtube.com/@omshende_02",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start group cursor-pointer">
                    <div className="bg-indigo-800/30 p-3 rounded-lg mr-4 text-indigo-400 group-hover:bg-indigo-700/30 transition-colors">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{item.label}</h4>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-indigo-300 transition-colors duration-200"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => console.log(`Clicked ${item.label}: ${item.href}`)}
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
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/30 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Send Me a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading || !emailJSLoaded}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 disabled:transform-none"
                >
                  {!emailJSLoaded ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Loading Email Service...
                    </>
                  ) : isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>✈️</span> Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;