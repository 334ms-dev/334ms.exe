"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", icon: SiGithub, href: "https://github.com/334ms-dev" },
  { name: "Discord", icon: SiDiscord, href: "https://discord.com/users/334ms.exe" },
  { name: "Twitter", icon: FaXTwitter, href: "https://x.com/334msDev" },
  { name: "Email", icon: Mail, href: "mailto:moshiur.munna055@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px]" />
      
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
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl text-white mt-4">Contact</h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-lg mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare size={20} className="text-white/30" />
            <p className="text-white/40 text-sm">Let&apos;s connect!</p>
          </div>
          
          <p className="text-white/30 text-xs leading-relaxed mb-10">
            Feel free to reach out if you want to collaborate, have questions, 
            or just want to say hi. I&apos;m always open to new opportunities.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group p-4 bg-white/[0.02] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.04] transition-all"
                aria-label={social.name}
              >
                <social.icon className="text-xl text-white/40 group-hover:text-white/70 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
