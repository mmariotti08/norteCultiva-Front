import React from "react";
import style from "./Products.module.css"

const Products = () => {
    return (
        <div className={style.Productos}>
            <div className={style.jardineria}> Jardineria </div>
            <div className={style.parafernalia}> Parafernalia </div>
            <div className={style.semillas}> Semillas </div>
            <div className={style.materiaPrima}> Materia Prima </div>
        </div>
    )
}

export default Products;