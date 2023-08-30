import React from 'react';
import style from "./FeaturedSemillas.module.css"

const FeaturedSemillas = () => {
  return (
    <div className={style.semillas}>
      <div className={style.producto}> Semilla 1 </div>
      <div className={style.producto}> Semilla 2 </div>
      <div className={style.producto}> Semilla 3 </div>
      <div className={style.producto}> Semilla 4 </div>
      <div className={style.producto}> Semilla 5 </div>
      <div className={style.producto}> Semilla 6 </div>
    </div>
  )
}

export default FeaturedSemillas