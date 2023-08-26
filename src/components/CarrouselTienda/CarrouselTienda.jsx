import React from "react";
import style from "./CarrouselTienda.module.css"

const CarrouselTienda = () => {
    return (
        <div className={style.CarrouselContainer}>
            <div className={style.Carrousel}> 
                <ul>
                    <li><img src="/Carrousel/imagen2.jpg" className={style.imagen1}/></li>
                    <li><img src="/Carrousel/imagen2.jpg" className={style.imagen2}/></li>
                    <li><img src="/Carrousel/imagen3.jpg" className={style.imagen3}/></li>
                    <li><img src="/Carrousel/imagen4.jpg" className={style.imagen4}/></li>
                    <li><img src="/Carrousel/imagen5.jpg" className={style.imagen5}/></li>
                </ul>
            </div>
        </div>
    )
}

export default CarrouselTienda;