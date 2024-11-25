import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Tunekyakia.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
         

        One of the most beautiful days of this year has come today✨.It is your day. 
        I wish you a very Happy B-DAY🎂 Vijju Garu💗. Enjoy the day with lots of joy and all the things you love🥰.
        Make this day full of memories💫. You have a pretty smile on your face, keep it throughout the year☺️. Be happy☺️.
        May all your dreams come true✨. I wish you good luck and endless success in life👍.             .@madhu korada🤍.
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
    
  );
};

export default LoveLetter;
