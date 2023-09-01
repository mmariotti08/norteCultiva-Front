import React from 'react';
import style from "./FeaturedMateriaPrima.module.css";

const FeaturedMateriaPrima = () => {
  return (
    <div className={style.materiaPrima}>
      <div className={style.producto1}> Materia Prima 1 </div>
      <div className={style.producto}> Materia Prima 2 </div>
      <div className={style.producto}> Materia Prima 3 </div>
      <div className={style.producto4}> Materia Prima 4 </div>
    </div>
  )
}

export default FeaturedMateriaPrima;