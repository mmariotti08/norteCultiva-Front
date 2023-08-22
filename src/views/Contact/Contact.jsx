import {React, useRef, useEffect, useState} from 'react'
import style from './Contact.module.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const [h1Text, setH1Text] = useState('');
    const [h3Text, setH3Text] = useState('');

    const typeText = (targetText, setTextFunc, currentIndex, interval) => {
        if (currentIndex < targetText.length) {
          setTextFunc((prevText) => prevText + targetText[currentIndex]);
          setTimeout(() => {
            typeText(targetText, setTextFunc, currentIndex + 1, interval);
          }, interval);
        }
      };
    useEffect(() => {
        const h1TextToType = 'CONTACTANOS';
        const h3TextToType = 'Te responderemos con brevedad.';
      
        const typeText = (targetText, setTextFunc, currentIndex, interval) => {
          if (currentIndex < targetText.length) {
            setTextFunc((prevText) => prevText + targetText[currentIndex]);
            setTimeout(() => {
              typeText(targetText, setTextFunc, currentIndex + 1, interval);
            }, interval);
          }
        };
      
        typeText(h1TextToType, setH1Text, 0, 100);
        setTimeout(() => {
          typeText(h3TextToType, setH3Text, 0, 75);
        }, h1TextToType.length * 100 + 500); // Esperar a que termine de escribir el h1
      }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4u29i0q', 'template_jrnv4xa', form.current, 'fniuvgdMWeG0uGsRx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
    <div className={style.bgg}>
        <div className={style.container}>
            <div className={style.msg}>
                <h1>{h1Text}</h1>
                <h3>{h3Text}</h3>
            </div>
            <div className={style.contForm}>
                <form className={style.fform} ref={form}  onSubmit={sendEmail}>
                    <input type='text' placeholder='Nombre y Apellido'name='user_name' required className={style.noAutofill}/>
                    <input type='email' placeholder='Email' name='user_email' required />
                    <input type='text' placeholder='Asunto' name='user_asunt' required />
                    <textarea name='message'  placeholder='Escribi tu consulta acá' ></textarea>
                    <button type='sumbit'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Contact