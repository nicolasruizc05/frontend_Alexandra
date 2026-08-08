const inputTelefono = document.getElementById("telefono")
const mensaje = document.getElementById("mensaje")
inputTelefono. addEventListener('blur', function(){
    const valorIngresado = inputTelefono.value.trim()
    if(valorIngresado===""){
        mensaje.textContent="El numero de telefono no puede estar vacio"
        mensaje.className= "mensaje error"
        return
    }
    const esValido =/^[0-9]{8,10}$/.test(valorIngresado)
    if(esValido){
        mensaje.textContent= "¡Numero registrado correctamente!"
        mensaje.className = "mensaje valido"
    }else{
        mensaje.textContent="Por favor ingresa un numero de teléfono valido (8 a 10 digitos)"
        mensaje.className ="mensaje error"
    }
})