import React from 'react';
import style from "./Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={style.FooterConteiner}>
      <div className={style.ubi}>
        <Link to="/" className={style.Link}>
          <h1 className={style.LinkCont}> EL NORTE CULTIVA</h1>
        </Link>
        <p> San Salvador de Jujuy</p>
        <p> Corodoba Capital </p>
        <p> Buenos Aires </p>
      </div>
      <div className={style.redes}>
        <p>Instagram: @elnortecultiva</p>
        <p>Facebook: proximamente</p>
        <p>Discord: proximamente</p>
      </div>
      <div className={style.src}>
        <Link to="/aboutus" className={style.Link}>
          <h4 className={style.LinkCont}> Sobre nosotros</h4>
        </Link>
        <Link to="/contact" className={style.Link}>
          <h4 className={style.LinkCont}> Contacto </h4>
        </Link>
        <Link to="/PreguntasFrecuentes" className={style.Link}>
          <h4 className={style.LinkCont}> Asesoramiento </h4>
        </Link>
        <Link to="/LandingTienda" className={style.Link}>
          <h4 className={style.LinkCont}> Tienda </h4>
        </Link>
      </div>

    </div>
  )
}

export default Footer