import React, { useEffect, useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import style from './LogIn.module.css';
import { addUser } from '../../redux/actions';
import  {useDispatch}  from 'react-redux'
import validation2 from './validationForm2';
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
    const [error2, setError2] = useState({
        
            name: "",
            mail: "",
            password: "",
            password2:""
          
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

    const handleSumbit2 = (e)=>{
       if(!error2.name && !error2.mail && !error2.password && error2.password2 === user.password){
        e.preventDefault()
        dispatch(addUser(user))
       }else{
        alert('Fallo el registro')
       }
    }
    const handleNA = (e)=>{
        setUser({
            ...user,
            name: e.target.value
        })
        validation2({
            ...user,
            name: e.target.value
        }, error2,  setError2)
    }
    const handleEmail2 = (e)=>{
        setUser({
            ...user,
            mail: e.target.value
        })
        validation2({
            ...user,
            mail: e.target.value
        }, error2,  setError2)
    }
    const handlePass2 = (e)=>{
        setUser({
            ...user,
            password: e.target.value
        })
        validation2({
            ...user,
            password: e.target.value
        }, error2,  setError2)
    }

    const handleRP  = (e)=>{
        setError2({
                ...error2,
                password2: e.target.value
            })
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
                                <div className={style.Is1}>
                                    <button  className={style.bis1} onClick={handleFalse}>Iniciar Sesion</button>
                                    <button className={style.br1} onClick={handleTrue}>Registrarse</button>
                                </div>
                                    <form className={style.formSignin} >
                                        <h3>Bienvenido de Nuevo!</h3>
                                        <input type='email'placeholder='Email'required />
                                        <input type='password'placeholder='Contraseña'/>
                                        <div className={style.inpTyC}>
                                        <input  type='checkbox'/><span>Recordar contraseña</span>
                                        </div>
                                        <button type='sumbit'>Iniciar Sesion</button>
                                        
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
                                <div className={style.Is2}>
                                    <button className={style.bis2} onClick={handleFalse}>Iniciar Sesion</button>
                                    <button className={style.br2} onClick={handleTrue}>Registrarse</button>
                                </div>
                                    <form className={style.formSignup} onSubmit={handleSumbit2}>
                                        <h3>Bienvenido!</h3>
                                        <input type='text'placeholder='Nombre y apellido'required onChange={handleNA}/>
                                        <span>{error2.name}</span>
                                        <input type='email'placeholder='Email'required onChange={handleEmail2}/>
                                        <span>{error2.mail}</span>
                                        <input type='password'placeholder='Contraseña'required onChange={handlePass2}/>
                                        <span>{error2.password}</span>
                                        <input type='password'placeholder='Repetir Contraseña'required onChange={handleRP} />
                                        {user.password !== error2.password2 ? <span>La contraseña no coincide</span> : <span/>}
                                        <div className={style.inpTyC}>
                                        <input  type='checkbox'/><span>Acepto los Terminos y Condiciones</span>
                                        </div>
                                        <button type='sumbit'>Registrarse</button>
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