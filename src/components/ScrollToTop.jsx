import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // גלילה חלקה
        });
    }, [pathname]);
      
    return null;
};

export default ScrollToTop;
