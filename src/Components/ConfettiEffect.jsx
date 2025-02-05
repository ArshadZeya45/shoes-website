import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiEffect = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // 5 second ke baad confetti band ho jayega
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <h1>Welcome to My Website 🎉</h1>
    </div>
  );
};

export default ConfettiEffect;
