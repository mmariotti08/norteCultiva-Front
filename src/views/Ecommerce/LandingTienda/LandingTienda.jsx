import React from "react";
import style from "./LandingTienda.module.css"
import { useEffect } from "react";
import { BotonesNav, Products, CarrouselTienda } from "../../../components/indexComponents";

const LandingTienda = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={style.LTsombra}>
            <img className={style.background} src="/IMG_3731.JPG"/>
            <CarrouselTienda/>
            <BotonesNav/>
            <Products/>    
        </div>
    )
}

export default LandingTienda;