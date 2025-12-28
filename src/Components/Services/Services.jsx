import React from 'react';
import { Code, Palette, Zap, Smartphone, Globe, ShoppingCart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices for optimal performance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and convert visitors into customers.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed, SEO, and exceptional user experience.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Responsive mobile applications that work seamlessly across all devices and platforms.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business thrive in the online world.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce Solutions',
      description: 'Powerful online stores with secure payment processing and inventory management.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all duration-300"
              >
                Learn More
                <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We'd love to discuss your project and create a tailored solution for your needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;