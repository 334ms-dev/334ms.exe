"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const MinecraftSkin = dynamic(() => import("./MinecraftSkin"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[420px] bg-white/5 animate-pulse" />
  ),
});

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/[0.04] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Minecraft Skin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <MinecraftSkin
            skinUrl="https://mc-heads.net/skin/334ms"
            width={280}
            height={380}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl mb-4 tracking-wide text-white font-minecraft"
        >
          334ms
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/40 text-sm md:text-base tracking-widest uppercase mb-8"
        >
          Developer & Creator
        </motion.p>

        {/* Minimal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-16 h-px bg-white/20 mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/30 text-xs md:text-sm max-w-md leading-relaxed mb-12"
        >
          Building digital experiences with clean code and creative solutions
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-6 py-2.5 bg-white text-gray-950 text-[10px] tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            style={{ textShadow: "none" }}
          >
            <span className="relative z-10" style={{ textShadow: "none" }}>Projects</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-white/50 text-[10px] tracking-[0.15em] uppercase hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-white/20 hover:text-white/40 transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
