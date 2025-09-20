import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 🔹 CHANGED (new state for response)

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔹 CHANGED (prevent default form reload)

    if (message.trim() === "" || name.trim() === "" || email.trim() === "") {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    // 🔹 CHANGED (send data to Formspree)
    try {
      const response = await fetch("https://formspree.io/f/mdklqkke", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("⚠️ Error connecting to server.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 p-8 text-gray-100 center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center justify-center w-full"
      >
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-2">
          Get in Touch
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Let’s collaborate or just say hello 👋
        </p>

        <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 gap-4 w-full"   // 🔹 CHANGED
>
  <input
    type="text"
    placeholder="Your Name"
    className="block w-full p-5 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 center"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    cols="5"
    type="email"
    placeholder="Your Email"
    className="block w-full p-5 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 center"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  /><br></br>

  <textarea
    rows="3"
    cols="52"
    placeholder="Your Message"
    className="center block w-full p-5 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    style={{justifyContent: "center",alignItems: "center", textAlign: "center"}}
  ></textarea><br></br>

  {error && <p className="text-red-500 text-center">{error}</p>}
  {status && <p className="text-green-400 text-center">{status}</p>}

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full btn btn-outline-success mt-2"
  >
    Send
  </motion.button>
</form>

        {/* --- Social Links (under form, styled like navbar) --- */}
        <div className="flex justify-center gap-6 mt-8 text-sm uppercase tracking-wide font-medium center">
          <a
            href="https://github.com/Himanshuvaid652"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/himanshu-vaid-086539215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          |
          <Link to="/resume">Resume</Link>
        </div>
      </motion.div>
    </section>
  );
}