"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 border-t border-white/[0.05]"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-[10px] tracking-wider">
          © {currentYear} 334ms. MIT License.
        </p>
        <p className="text-white/20 text-[10px] tracking-wider">
          Built with Next.js & Tailwind
        </p>
      </div>
    </motion.footer>
  );
}
