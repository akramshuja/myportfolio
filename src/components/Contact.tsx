
import React from "react";
import contactData from "../data/contact.json";
import { Mail, Phone } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  Phone: <Phone size={24} />,
  Mail: <Mail size={24} />
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100">
            Let's discuss how I can contribute to your next project
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactData.contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="text-blue-300 mr-4">
                    {iconMap[contact.icon] || null}
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">{contact.title}</p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Ready to Connect?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, 
              and ways to contribute to cutting-edge technology solutions. Whether you're 
              looking for a senior developer, technical lead, or AI solutions expert, 
              let's start a conversation.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:kssasarma@gmail.com"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Send Email
              </a>
              <a
                href="tel:+919381088338"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
