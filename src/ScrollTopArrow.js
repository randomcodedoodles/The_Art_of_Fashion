import React, {useState, useEffect} from 'react';
import "./styles/ScrollTopArrow.css"
//import {FaArrowCircleUp} from 'react-icons/fa';
import iconArrowScrollTop from "./Resources/Icon_Arrow.svg"

const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
        <div className={showScroll ? "scroll-top-arrow back-to-top" : "scroll-top-arrow"} onClick={scrollTop}>
            <img src={iconArrowScrollTop} alt="back-to-top" />
        </div>
  );
}
//<FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
export default ScrollTopArrow;
//<img src={iconArrowScrollTop} alt="back-to-top" />