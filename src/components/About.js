import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="container mt-5">
        <h2>About Me</h2>
        <p>
          I’m Himanshu Vaid, a passionate Computer Science undergraduate currently pursuing my B.Tech with a strong interest in full-stack development and web technologies. Ever since I started coding, I’ve been fascinated by how software can solve real-world problems and turn ideas into functional, interactive solutions.

I have hands-on experience with Python, C, C++ (DSA beginner), HTML, CSS, and JavaScript, and I am actively learning Node.js and React to build dynamic web applications.

Beyond coding, I enjoy creating secure and user-friendly applications, experimenting with creative web designs, and participating in hackathons to challenge myself and gain practical experience. My goal is to combine technical expertise with innovative thinking to build projects that are both impactful and practical.

In short, I’m a curious problem-solver, a lifelong learner, and someone who loves turning complex concepts into simple, elegant solutions
        </p>
      </div>
    </motion.div>
  );
}

export default About;
