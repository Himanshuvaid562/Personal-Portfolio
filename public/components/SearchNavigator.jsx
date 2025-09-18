import React, { useState } from "react";

export default function SearchNavigator() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Define available sections (must match your <section id="...">)
  const sections = ["home", "about", "projects", "contact", "resume"];

  // Handle input changes
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filter suggestions
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(sections.filter((s) => s.toLowerCase().includes(value)));
    }
  };

  // Handle search or suggestion click
  const handleSearch = (section) => {
    if (sections.includes(section)) {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
      setQuery(""); // clear input
      setSuggestions([]); // clear suggestions
    } else {
      alert("Section not found!");
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search section..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Suggestion Box */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border rounded-lg mt-1 shadow-md">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSearch(s)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
