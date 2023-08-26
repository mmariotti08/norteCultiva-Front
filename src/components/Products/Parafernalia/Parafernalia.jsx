import React from 'react'
import style from "./Parafernalia.module.css"

const Parafernalia = () => {
  return (
    <div className={style.parafernalia}>
      <div className={style.producto1}> Parafernalia 1 </div>
      <div className={style.producto2}> Parafernalia 2 </div>
      <div className={style.producto}> Parafernalia 3 </div>
      <div className={style.producto}> Parafernalia 4 </div>
      <div className={style.producto}> Parafernalia 5 </div>
      <div className={style.producto}> Parafernalia 6 </div>
    </div>
  )
}

export default Parafernalia