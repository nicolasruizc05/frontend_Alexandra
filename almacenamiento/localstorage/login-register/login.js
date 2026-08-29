const inicioSesion=()=>{
    let email=document.getElementById("user")
    let contra=document.getElementById("contra")
    let vEmail=email.value 
    let vPass=contra.value
    let usuario=JSON.parse(localStorage.getItem("usuario"))
    console.log(usuario)
    if (vEmail == usuario.correo){
        alert("Email escrito correctamente")
        if (vPass== usuario.contrasena){
        alert("Contraseña escrita correctamente")
        console.log("logeado correctamente")
        usuarioLogeado={                            // Objeto del usuario logeado
            email:vEmail,
            contra:vPass
        }
        localStorage.setItem("usuarioLogeado",JSON.stringify(usuarioLogeado))  //Se almacena el usuario en el localStorage
    }
    else{
        alert("Contraseña igresada incorrecta")
    }
    }
    else{
        alert("Correo ingresado es incorrecto")
    }
    
}