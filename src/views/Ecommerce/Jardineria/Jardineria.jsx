import React, { useEffect } from 'react'
import style from "./Jardineria.module.css";

const Jardineria = () => {

  useEffect(() => {
    window.scroll(0,0);
  }, []);
  
  return (
    <div className={style.Jardineria}>
    <form className={style.form}>
        <input type="text" placeholder='Buscar' />
        <button> Lupa </button>
    </form>
    <div className={style.products}>
      <h1>Jardineria</h1>
    </div>
    </div>
  )
}

export default Jardineria