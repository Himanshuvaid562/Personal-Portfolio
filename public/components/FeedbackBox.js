import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate

export default function Feedback() {
  const [message, setMessage] = useState("");   // ✅ Declare message state
  const navigate = useNavigate();               // ✅ Initialize navigate

  const handleSubmit = () => {
    if (message.trim() !== "") {
      navigate("./Response", { state: { message } });  // ✅ Navigate with message
    }
  };

  return (
    <div className="container mt-3">
      <h2>Feedback</h2>
      <textarea
        className="form-control my-textarea"
        rows="4"
        placeholder="Type your response here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
}