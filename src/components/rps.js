import React from "react";
import rockImg from "/home/devil/Desktop/portfolio/src/WhatsApp Image 2025-08-29 at 3.36.14 PM.jpeg";
import { motion } from "framer-motion";

export default function Rps() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
    >
      <iframe
        src="./Projects/rps/rps.html"
        style={{ width: "100%", height: "820px", border: "none" }}
        title="Tic-Tak-Toe"
      ></iframe>
    </motion.div>
  );
}
