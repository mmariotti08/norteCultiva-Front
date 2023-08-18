import React from "react";
import { Link } from "react-router-dom";
import style from "./PreguntasFrecuentes.module.css";
import { useState } from "react";



const PreguntasFrecuentes = () => {
    const [selector, setSelector] = useState(null);

    const toggle = (i) => {
        if (selector === i) {
            return setSelector(null);
        }

        setSelector(i);
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <div className={style.acordion}>
                    {data.map((item, i) => (
                        <div className={style.item} key={i}>
                            <div className={style.title} onClick={() => toggle(i)}>
                                <h1>{item.question}</h1>
                                <span>{selector === i ? "-" : "+"}</span>
                            </div>
                            <div
                                className={`${style.content} ${selector === i ? style.contentShow : ""}`}
                            >
                                <h4>
                                    {item.answer.split('\n').map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph.includes("**") ? (
                                                <strong>{paragraph.replace(/\*\*/g, "")}</strong>
                                            ) : (
                                                paragraph
                                            )}
                                        </p>
                                    ))}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <Link to='/chat'>
                        <button>Consulta</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        question: "¿Cuáles son los diferentes tipos de cultivos de cannabis?",
        answer:` Hay varios tipos de cultivos de cannabis, cada uno con sus propias ventajas y desafíos:
       
        Cultivo en interior (indoor): Si eres nuevo en el cultivo, esta podría ser una excelente opción. Significa cultivar tus plantas en un espacio controlado, como una habitación o tienda de cultivo. Puedes controlar factores como la temperatura, la humedad y la luz. Para la iluminación, se utilizan luces de cultivo, como las LED o incluso los focos galponeros, que emiten el espectro de luz necesario para el crecimiento de las plantas.

        Cultivo en exterior (outdoor): Si tienes acceso a un espacio exterior adecuado, puedes optar por el cultivo en exterior. Las plantas reciben luz solar natural, lo que puede ser beneficioso, pero ten en cuenta que estarás a merced de las estaciones y condiciones climáticas.

        Cultivo en invernadero: Esta opción combina las ventajas del cultivo en interior y en exterior. Un invernadero te permite crear un entorno controlado mientras aprovechas la luz solar. Puedes usar focos galponeros como suplemento de luz si es necesario.`
    },
    {
        question: "¿Cuáles son los requisitos básicos para cultivar cannabis?",
        answer:`Para cultivar cannabis con éxito, debes prestar atención a los siguientes aspectos:
        Luz: Las plantas de cannabis necesitan mucha luz para crecer. Si estás cultivando en interior, considera las luces LED de espectro completo o los focos galponeros. Si cultivas en exterior, elige un lugar con buena exposición al sol.

        Sustrato: Elige un medio de cultivo adecuado, como tierra de maceta de alta calidad o medios hidropónicos. Para el cultivo hidropónico, las plantas crecen en una solución de nutrientes en lugar de tierra.

        Agua: Riega las plantas de manera regular y evita el exceso de agua, ya que puede provocar problemas de raíces. El cultivo hidropónico requiere un sistema de suministro y drenaje adecuado para la solución de nutrientes.

        Aire: Asegúrate de que haya un flujo de aire adecuado en tu espacio de cultivo para evitar problemas de humedad y moho. La ventilación es especialmente importante en el cultivo en interior.`
    },
    {
        question: "¿Cuáles son los nutrientes esenciales para el cannabis?",
        answer:`Las plantas de cannabis necesitan nutrientes para crecer saludablemente. Los tres nutrientes principales son el nitrógeno, el fósforo y el potasio. Estos se encuentran en la mayoría de los fertilizantes para cannabis. Además, hay nutrientes secundarios como el calcio y el magnesio, así como micronutrientes como el zinc y el hierro. En el cultivo hidropónico, los nutrientes se suministran directamente a través de la solución de nutrientes.`
    },
    {
        question: "¿Cuáles son los problemas comunes en el cultivo de cannabis y cómo se pueden manejar?",
        answer:`Es común enfrentar plagas como ácaros o pulgones, así como enfermedades fúngicas como el moho gris. La prevención es clave: mantén el área de cultivo limpia y bien ventilada. Si aparecen problemas, existen soluciones naturales o químicas. Investiga sobre insecticidas y fungicidas seguros para las plantas.`
    },
    {
        question: "¿Cuál es el ciclo de vida típico del cannabis?",
        answer:`El ciclo de vida consta de varias etapas:
        Germinación: Las semillas germinan cuando se les proporciona humedad y calor adecuados.

        Crecimiento vegetativo: Las plantas desarrollan hojas y tallos fuertes. La duración de esta etapa depende de la variedad, pero se centra en el crecimiento y la nutrición.

        Floración: Las plantas desarrollan flores. En el caso de las plantas de cannabis femeninas, estas flores contienen tricomas ricos en cannabinoides.

        Cosecha: Las flores maduran y se cosechan. Esto implica cortar, secar y curar las flores antes de su consumo.`
    },
    {
        question: "Consejos adicionales sobre pH y electroconductividad:",
        answer:`El pH es importante para la absorción de nutrientes. En el cultivo de cannabis, el rango de pH óptimo para la mayoría de los medios de cultivo (incluido el hidropónico) es generalmente entre 5.8 y 6.5. Controla el pH de la solución de nutrientes para evitar problemas de absorción.

        La electroconductividad (EC) mide la concentración de sales en la solución de nutrientes. Es vital en el cultivo hidropónico. Mide la EC regularmente para asegurarte de que la solución de nutrientes tenga la concentración adecuada para el crecimiento saludable de las plantas.
        
        Espero que esta información detallada sea útil para tu proyecto de app didáctica sobre el cultivo de cannabis. Recuerda siempre fomentar prácticas responsables y legales en cualquier tipo de proyecto educativo. Si tienes más preguntas o necesitas información adicional, no dudes en preguntar.`
    },
]

export default PreguntasFrecuentes;