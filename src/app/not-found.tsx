"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-white/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-white/[0.08] rounded-full blur-[100px]" />

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-minecraft text-white mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/40 text-sm md:text-base tracking-widest uppercase mb-8"
        >
          Page not found
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-px bg-white/20 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/30 text-xs md:text-sm max-w-md mx-auto leading-relaxed mb-10"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="px-6 py-2.5 bg-white text-gray-950 text-[10px] tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            style={{ textShadow: "none" }}
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
