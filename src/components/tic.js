import React from "react";
import { motion } from "framer-motion";

export default function Tic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
    >
      <div>
        <iframe
          src="./Projects/tic.html"
          style={{ width: "100%", height: "825px", border: "none" }}
          title="Tic-Tak-Toe"
        ></iframe>
      </div>
    </motion.div>
  );
}
