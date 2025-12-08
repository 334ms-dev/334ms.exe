"use client";

import { motion } from "framer-motion";
import { Code, Gamepad2, Coffee, Sparkles } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiDocker,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const highlights = [
  { icon: Code, label: "Clean Code", desc: "Writing maintainable solutions" },
  { icon: Gamepad2, label: "Minecraft", desc: "Plugin & mod development" },
  { icon: Coffee, label: "Passionate", desc: "Always learning new tech" },
  { icon: Sparkles, label: "Creative", desc: "Unique digital experiences" },
];

const technologies = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-white/[0.06] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-white/[0.08] rounded-full blur-[120px]" />
      
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
            Get to know me
          </span>
          <h2 className="text-3xl md:text-4xl text-white mt-4">About Me</h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Hey! I&apos;m a developer who loves building things for the web and beyond. 
              My journey started with Minecraft plugins and evolved into full-stack development.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              I specialize in creating modern web applications using technologies like 
              React, Next.js, TypeScript, and Node.js. I&apos;m always exploring new tools 
              and frameworks to stay on the cutting edge.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me gaming, experimenting with new 
              technologies, or contributing to open-source projects.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-5 bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
              >
                <item.icon size={20} className="text-white/30 mb-3" />
                <h3 className="text-white/80 text-xs tracking-wide mb-1">
                  {item.label}
                </h3>
                <p className="text-white/30 text-[10px]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
            Technologies I work with
          </span>
          
          {/* Infinite scroll container */}
          <div className="relative mt-8 overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling content */}
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-4"
            >
              {/* Double the items for seamless loop */}
              {[...technologies, ...technologies].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="group flex-shrink-0 p-4 bg-white/[0.02] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.04] transition-all flex flex-col items-center gap-3 w-24"
                >
                  <tech.icon className="text-2xl text-white/40 group-hover:text-white/70 transition-colors" />
                  <span className="text-white/40 text-[9px] tracking-wider uppercase group-hover:text-white/60 transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
