import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '', background = 'bg-white dark:bg-slate-950' }) {
  return (
    <section id={id} className={`py-20 md:py-32 overflow-hidden ${background} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
