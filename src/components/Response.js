import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Response() {
  const location = useLocation();
  const userMessage = location.state?.message || "";  // ✅ Retrieve message

  return (
    <div className="container mt-3 text-center">
      <h2 className="text-success">✅ Your response has been recorded!</h2>
      {userMessage && <p className="mt-3"><strong>You wrote:</strong> {userMessage}</p>}
      
      <Link to="/" className="btn btn-secondary mt-3">
        Go Back
      </Link>
    </div>
  );
}