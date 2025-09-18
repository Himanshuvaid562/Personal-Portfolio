import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="resume-container" style={{ padding: "20px" }}>
        <h1>My Resume</h1>

        {/* Embedded Resume */}
        <iframe
          src="/resume.pdf"
          style={{ width: "100%", height: "800px", border: "none" }}
          title="Resume"
        />

        {/* Download Button */}
        <div style={{ marginTop: "20px" }}>
          <a href="/resume.pdf" download>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
