import React from "react";
import style from "./Products.module.css"
import Jardineria from "./Jardineria/Jardineria"
import Parafernalia from "./Parafernalia/Parafernalia"
import Semillas from "./Semillas/Semillas"
import MateriaPrima from "./MateriaPrima/MateriaPrima"

const Products = () => {
    return (
        <div className={style.Productos}>
            <Jardineria/>
            <Parafernalia/>
            <Semillas/>
            <MateriaPrima/>
        </div>
    )
}

export default Products;