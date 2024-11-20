import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!userId) {
      setError("User ID is required.");
      return;
    }
    setError(null);
    navigate(`/video-processing/${userId}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Enter User ID</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        style={{ padding: "10px", marginBottom: "10px" }}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
        Proceed
      </button>
    </div>
  );
};

export default Login;