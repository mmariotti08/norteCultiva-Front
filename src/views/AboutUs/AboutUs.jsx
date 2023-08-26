import style from './AboutUs.module.css'
import { useEffect, React } from 'react'

function AboutUs() {

     useEffect(()=>{
        window.scroll(0,0)
     },[])
  return (
    <div className={style.bg}>
        <div className={style.curtain}>
          <div className={style.divOne}>
                 <div className={style.textOne}>
                    <h1>¡Bienvenidos a El Norte Cultiva!</h1>
                    <span>Somos un grupo apasionado de amigos oriundos del norte argentino, específicamente de Jujuy, que compartimos un amor profundo por el cultivo de cannabis. Lo que comenzó como una amistad enraizada en esta pasión común, se ha transformado en una vibrante comunidad de cultivadores comprometidos.</span>
                </div>
                <div className={style.imgOne}>
                    <img src='/public/IMG_3694.JPG'/>
                </div>
         </div>
         <div className={style.divTwo}>
                <div className={style.textTwo}>
                    <span>Nuestro enfoque no solo reside en el crecimiento saludable de las plantas, sino también en el cultivo de relaciones significativas. En nuestra comunidad, la camaradería florece tanto como nuestras plantas, y la sinergia entre personas con conocimientos profundos y aquellos que están empezando crea un ambiente acogedor y enriquecedor.</span>
                    <br/>
                    <span>Hemos dado un paso más allá al lanzar este sitio web, donde abrimos las puertas virtuales de nuestra comunidad al mundo. Ahora no solo compartimos nuestras experiencias y consejos a través de asesoramientos especializados, sino que también ofrecemos acceso a una cuidadosamente seleccionada gama de parafernalia y materiales de cultivo. Nuestro compromiso con la calidad y la autenticidad sigue siendo el mismo en línea que en la vida real.</span>
                </div>
        </div>
        <div className={style.divTree}>
            <div className={style.textTree}>
                <span>Este sitio es un reflejo de nuestra pasión y dedicación, un lugar donde los entusiastas de la botánica y la cultura cannábica pueden encontrar recursos confiables y productos excepcionales. Te invitamos a explorar, aprender y crecer junto a nosotros mientras cultivamos no solo plantas, sino también conexiones duraderas.</span>
                <br/>
                <br/>
                <span>
                    Bienvenidos a nuestro espacio digital. Juntos, cosechemos conocimiento y amistad en cada click.
                </span>
                <br/>
                <br/>
                <span>
                    El equipo de El Norte Cultiva.
                </span>
            </div>
            <div className={style.imgTree}>
                <img src='/public/IMG_3732.JPG'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs