import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setWarning("Please fill in your email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
      setWarning("Please provide a valid email address.");
    } else {
      setWarning("");
      // You can perform any additional actions here, such as making an API call to subscribe the user.
      alert("Congratulations! You have subscribed to our newsletter.");
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {warning && <div className="warning">{warning}</div>}
    </div>
  );
};

export default NewsLetter;
