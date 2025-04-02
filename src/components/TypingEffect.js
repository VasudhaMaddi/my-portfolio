import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, className = "", onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayedText, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && <span className="animate-blink">|</span>}
    </span>
  );
};

export default TypingEffect;
