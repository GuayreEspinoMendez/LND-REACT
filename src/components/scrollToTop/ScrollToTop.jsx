import React from 'react';
import "./ScrollToTop.css"

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button class="scroll" onClick={scrollToTop} style={styles}>
      ↑
    </button>
  );
};

const styles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px',
    backgroundColor: '#FFFFFF',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 100000 
  };
  

export default ScrollToTopButton;
