import React, { useEffect } from 'react'
import style from "./Jardineria.module.css";
import { useSelector } from 'react-redux';

const Jardineria = () => {
  const JardineriaProducts = useSelector(state => state.products)
  console.log(JardineriaProducts);

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
      <div>
        {JardineriaProducts.map(jarProd => <div>{jarProd.name}</div>)}
      </div>
    </div>
  )
}

export default Jardineria