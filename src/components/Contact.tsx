"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", icon: SiGithub, href: "https://github.com/334ms-dev", username: "@334ms-dev" },
  { name: "Discord", icon: SiDiscord, href: "https://discord.com/users/334ms.exe", username: "334ms.exe" },
  { name: "Twitter", icon: FaXTwitter, href: "https://x.com/334msDev", username: "@334msDev" },
  { name: "Email", icon: Mail, href: "mailto:moshiur.munna055@gmail.com", username: "moshiur.munna055@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.06] rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl text-white mt-4">Contact</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-white/20 mx-auto mt-6"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-md mx-auto mb-12"
        >
          <p className="text-white/40 text-sm leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out through any of these platforms. I typically respond within 24 hours.
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="group p-5 bg-white/[0.02] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.04] transition-all flex items-center gap-4"
            >
              <div className="p-3 bg-white/[0.05] group-hover:bg-white/[0.1] transition-colors">
                <social.icon className="text-xl text-white/50 group-hover:text-white/80 transition-colors" />
              </div>
              <div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                  {social.name}
                </p>
                <p className="text-white/30 text-[10px] tracking-wider">
                  {social.username}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="text-center">
            <p className="text-white/60 text-2xl font-minecraft">24h</p>
            <p className="text-white/30 text-[10px] tracking-wider mt-1">Response Time</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <p className="text-white/60 text-2xl font-minecraft">Asia/Dhaka</p>
            <p className="text-white/30 text-[10px] tracking-wider mt-1">Timezone</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <p className="text-white/60 text-2xl font-minecraft">Open</p>
            <p className="text-white/30 text-[10px] tracking-wider mt-1">For Work</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
