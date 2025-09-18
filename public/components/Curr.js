import React from "react";
import { motion } from "framer-motion";

export default function Curr() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
    >
      <div>
        <iframe
          src="./Projects/Curr.html"
          style={{ width: "100%", height: "810px", border: "none" }}
          title="Currence Convertor"
        ></iframe>
      </div>
    </motion.div>
  );
}
