import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 200); // Adjust the typing speed as needed

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return <span>{typedText}</span>;
};

export default TypingAnimation;
