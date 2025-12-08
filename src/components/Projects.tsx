"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-white/[0.03] rounded-full blur-[80px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl text-white mt-4">Projects</h2>
        </motion.div>

        {/* Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center py-20 border border-white/[0.05] bg-white/[0.01]"
        >
          <FolderOpen size={48} className="text-white/20 mb-6" />
          <p className="text-white/40 text-sm mb-2">No projects yet</p>
          <p className="text-white/20 text-xs">Coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
}
