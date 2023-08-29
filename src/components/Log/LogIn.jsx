// import React, { useEffect, useState,  } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gapi } from 'gapi-script';
// import GoogleLogin from 'react-google-login';
// import style from './LogIn.module.css';
// import { addUser } from '../../redux/actions';
// import  {useDispatch}  from 'react-redux'

// const LogIn = ({isOpen, onClose, }) => {
//     const navigate =useNavigate();
//     if(!isOpen) return(
//         navigate('/')
//     );

//     const dispatch = useDispatch()

//     const clientID = '105939504937-9rdfe7nihsq80u98cb9rcdqm0o8bmmlb.apps.googleusercontent.com';

//     useEffect(() => {
//         const start = () => {
//             gapi.auth2.init({
//                 clientId: clientID,
//             });
//         };
//         gapi.load('client:auth2', start);
       
//     }, []);

//     const [user, setUser] = useState({
        
//             name: "",
//             mail: "",
//             password: ""
          
//     });

//     const onSuccess =  (response) => {
        
//             const newUser  = {
//                 name: response.profileObj.name,
//                 mail: response.profileObj.email,
//                 password:'porDefecto123'
//             }
       
//         setUser(newUser)

//         dispatch(addUser(newUser))
//     };
//     console.log('login',user);
    

//     const onFailure = () => {
//         console.log('Something went wrong');
//     };

//     return (
//             <div className={style.bg}>
//                 <div className={style.curtain}>
//                     <div className={style.bienv}>
//                         <h1  className={style.elnort}> EL NORTE CULTIVA</h1>
//                         <h3>Bienvenido!</h3>
                        
//                     </div>
//                     <div className={style.cont}>
//                         {!user.name ? ( 
//                             <div className={style.log}>
//                                 <div className={style.Is}>
//                                     <h2> Iniciar Sesion</h2>
//                                 </div>

//                                 <GoogleLogin
//                                     clientId={clientID}
//                                     onSuccess={onSuccess}
//                                     onFailure={onFailure}
//                                     cookiePolicy={'single_host_policy'}
//                                 />
//                             </div>
//                         ) : (
//                             <div className={style.welcome}>
//                                 <h2>El Norte Cultiva</h2>
//                                 <img src={user.imageUrl} alt='' />
//                                 <h3>Bienvenido {user.name}</h3>
//                                 <button onClick={onClose}>Volver</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//     );
// };

// export default LogIn;