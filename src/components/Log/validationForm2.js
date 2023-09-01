const validation2 = (user, error2, setError2)=>{
    const errors={}

    ///NyA

    if(!user.name){
        errors.name = 'Este campo es obligatorio'
    }else if(!/^[a-zA-Z\s]+$/.test(user.name)){
        errors.name= 'No se permiten números ni caracteres especiales.'
    }else{
        errors.name=''
    }

    ///Mail

    if(!user.mail){
        errors.mail = 'Este campo es obligatorio'
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.mail)){
        errors.mail = 'Mail Invalido'
    }else{
        errors.mail=''
    }

    ///Password

    if(!user.password){
        errors.password= 'Este campo es obligatorio'
    }else if(user.password.length < 8 || user.password.length > 25 ){
        errors.password= 'Debe tener entre 8 y 25 carecteres'
    }else if(!/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(user.password)){
        errors.password = 'Debe contener al menos un Numero'
    }else{
        errors.password= ''
    }

    setError2(errors)
}
export default validation2