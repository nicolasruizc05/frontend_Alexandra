let guardar =()=>{
    let nombre=document.getElementById("nombre") 
    let apellido=document.getElementById("apellido")
    let direccion=document.getElementById("direc")
    let telefono=document.getElementById("tel")
    let correo= document.getElementById("correo")
    let contra=document.getElementById("contra")
    let nuevoUsuario={
        nombre:nombre.value,
        apellido:apellido.value,
        direccion:direccion.value,
        telefono:telefono.value,
        correo:correo.value,
        contrasena:contra.value
    }
    localStorage.setItem("usuario",JSON.stringify(nuevoUsuario))
    alert("Usuario Guardado correctamente: "+ nuevoUsuario)
}