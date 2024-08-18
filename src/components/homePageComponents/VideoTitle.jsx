import React, { useState, useEffect } from 'react';

const VideoTitle = () => {
  const text = "יש לכם הזדמנות להכין מסיבת יומולדת \nשלא שוכחים!";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      setDisplayText(prev => text.substring(0, index + 1));
      index++;
      if (index <= text.length) {
        timeoutId = setTimeout(type, typingSpeed);
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(deleteText, delay);
      }
    };

    const deleteText = () => {
      setDisplayText(prev => text.substring(0, index));
      index--;
      if (index >= 0) {
        timeoutId = setTimeout(deleteText, deletingSpeed);
      } else {
        setIsTyping(true);
        index = 0;
        timeoutId = setTimeout(type, delay);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [isTyping]);

  return (
    <div className="type-container">
        <div className="typing-text">מי לא אוהב שוקולד? <br/></div>
        <div className="typing-container">
            <div className="typing-text">{displayText}</div>
            <div className="cursor">|</div>
        </div> 
        <div className="typing-text-2">שוקולדת <br/></div>     
        <div className="typing-text-3">ֶ <br/></div>     
        <div className="typing-text-4">הדבר הכי מתוק ביומולדת<br/></div>     
    </div>
  );
};

export default VideoTitle;
