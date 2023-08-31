import React, { useEffect, useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import style from './LogIn.module.css';
import { addUser } from '../../redux/actions';
import  {useDispatch}  from 'react-redux'

const LogIn = ({isOpen, onClose, }) => {
    const navigate =useNavigate();
    if(!isOpen) return(
        navigate('/')
    );

    const dispatch = useDispatch()

    const clientID = '105939504937-9rdfe7nihsq80u98cb9rcdqm0o8bmmlb.apps.googleusercontent.com';

    useEffect(() => {
        const start = () => {
            gapi.auth2.init({
                clientId: clientID,
            });
        };
        gapi.load('client:auth2', start);
       setUser({
            name: "",
            mail: "",
            password: ""
       })
    }, []);

    const [user, setUser] = useState({
        
            name: "",
            mail: "",
            password: ""
          
    });

    const [change, setChange] = useState(false)

    const onSuccess =  (response) => {
        
            const newUser  = {
                name: response.profileObj.name,
                mail: response.profileObj.email,
                password:'porDefecto123'
            }
       
        setUser(newUser)

        dispatch(addUser(newUser))
    };
    console.log('login',user);
    

    const onFailure = () => {
        console.log('Something went wrong');
    };
    const handleTrue = ()=>{
        setChange(true)
    }
    const handleFalse = ()=>{
        setChange(false)
    }

    return (
            <div className={style.bg}>
                <div className={style.curtain}>
                    <div className={style.bienv}>
                        <h1  className={style.elnort}> EL NORTE CULTIVA</h1>
                        <h3>Bienvenido!</h3>
                        
                    </div>
                    <div className={style.cont}>
                        {!change ? ( 
                            <div className={style.log}>
                                <div className={style.Is}>
                                    <button onClick={handleFalse}>Iniciar Sesion</button>
                                    <button onClick={handleTrue}>Registrarse</button>
                                </div>
                                    <form className={style.formSignin}>
                                        <h3>Bienvenido de Nuevo!</h3>
                                        <input type='email'placeholder='Email'required/>
                                        <input type='password'placeholder='Contraseña'required/>
                                        <div>
                                        <input  type='checkbox'/><span>Recordar contraseña</span>
                                        </div>
                                        <button>Iniciar Sesion</button>
                                        
                                    </form>
                                <GoogleLogin
                                    clientId={clientID}
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_policy'}
                                />
                            </div>
                        ) : (
                            <div className={style.log}>
                                <div className={style.Is}>
                                    <button onClick={handleFalse}>Iniciar Sesion</button>
                                    <button onClick={handleTrue}>Registrarse</button>
                                </div>
                                    <form className={style.formSignup}>
                                        <h3>Bienvenido!</h3>
                                        <input type='text'placeholder='Nombre y apellido'required/>
                                        <input type='email'placeholder='Email'required/>
                                        <input type='password'placeholder='Contraseña'required/>
                                        <input type='password'placeholder='Repetir Contraseña'required/>
                                        <div className={style.inpTyC}>
                                        <input  type='checkbox'/><span>Acepto los Terminos y Condiciones</span>
                                        </div>
                                        <button>Registrarse</button>
                                    </form>
                                <GoogleLogin
                                    clientId={clientID}
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_policy'}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default LogIn;