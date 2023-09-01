import React from 'react';
import style from "./RightNav.module.css";
import { useEffect, useState } from 'react';

const RightNav = () => {
  const [ prevScrollPos, setPrevScrollPos ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          const visible = prevScrollPos > currentScrollPos;

          setPrevScrollPos(currentScrollPos);
          setVisible(visible);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      }
  }, [prevScrollPos])
  return (
    <div className={`${style.rightNav} ${visible ? style.rightNavVisible : style.rightNavInvisible}`}>
      <button><a href="/dashboard"> Dashboard</a></button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-arrow-down-short ${style.botonFlotante} ${visible ? style.botonVisible : style.botonInvisible}`} viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
      </svg>
    </div>
  )
}

export default RightNav;