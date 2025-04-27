'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  className?: string;
}

const TypewriterText = ({ className = 'text-gray-400' }: TypewriterTextProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  const words = ['Computer Science', 'Tech Enthusiast'];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(30);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <div className={`flex items-center text-xl font-bold ${className}`}>
      <span>{text}</span>
      <span className="w-[2px] h-6 bg-[#4B2B4D] ml-1 animate-pulse" style={{ animationDuration: '0.5s' }}></span>
    </div>
  );
};

export default TypewriterText; 