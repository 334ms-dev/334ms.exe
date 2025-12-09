"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const MinecraftSkin = dynamic(() => import("./MinecraftSkin"), {
  ssr: false,
  loading: () => (
    <div className="w-[200px] h-[280px] md:w-[280px] md:h-[380px] bg-white/5 animate-pulse" />
  ),
});

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-10 relative overflow-hidden"
    >
      {/* Background Blobs - GPU accelerated */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/[0.08] rounded-full blur-[120px] will-change-transform" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/[0.1] rounded-full blur-[100px] will-change-transform" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[150px] will-change-transform" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Minecraft Skin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <div className="block md:hidden">
            <MinecraftSkin
              skinUrl="https://mc-heads.net/skin/334ms"
              width={200}
              height={280}
            />
          </div>
          <div className="hidden md:block">
            <MinecraftSkin
              skinUrl="https://mc-heads.net/skin/334ms"
              width={280}
              height={380}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-6xl mb-4 tracking-wide text-white font-minecraft"
        >
          334ms
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white/40 text-xs md:text-base tracking-widest uppercase mb-6 md:mb-8"
        >
          Developer & Creator
        </motion.p>

        {/* Minimal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-16 h-px bg-white/20 mb-6 md:mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-white/30 text-xs md:text-sm max-w-md leading-relaxed mb-8 md:mb-12 px-4"
        >
          Building digital experiences with clean code and creative solutions
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-6 py-2.5 bg-white text-gray-950 text-[10px] tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            style={{ textShadow: "none" }}
          >
            <span className="relative z-10" style={{ textShadow: "none" }}>
              Projects
            </span>
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
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a href="#about">
          <ArrowDown size={16} className="text-white/20 hover:text-white/40 transition-colors" />
        </a>
      </div>
    </section>
  );
}

export default memo(Hero);
