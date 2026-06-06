import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiClock, FiStar, FiArrowLeft } from 'react-icons/fi';
import { useEffect } from 'react';

export default function ServicePage() {
  const { id } = useParams();
  const service = servicesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center dark:bg-slate-950">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Service Not Found</h1>
        <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-2">
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  const features = [
    { icon: <FiCheckCircle className="text-emerald-500" size={24} />, title: "Fully Verified", desc: "100% verified and authentic accounts." },
    { icon: <FiShield className="text-indigo-500" size={24} />, title: "Secure Access", desc: "Full control and guaranteed security." },
    { icon: <FiClock className="text-orange-500" size={24} />, title: "Instant Delivery", desc: "Get details instantly after purchase." },
    { icon: <FiStar className="text-amber-500" size={24} />, title: "Premium Quality", desc: "High trust score and clean history." }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2 w-fit transition-colors">
            <FiArrowLeft /> Back to Home
          </Link>
        </div>

        {/* Hero Section for Service */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
              {service.category} Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">{service.name}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Get premium, fully verified {service.name} with instant delivery. Perfect for your business and personal needs with 100% security guaranteed.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all hover:scale-105">
                Order Now
              </button>
              <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 font-medium transition-all">
                Contact Support
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20 dark:opacity-30"></div>
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="h-64 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <span className="text-6xl font-bold text-slate-300 dark:text-slate-600">
                  {service.name.charAt(0)}
                </span>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">$149</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1.5 rounded-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  In Stock
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 text-center">Why Choose Our {service.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
