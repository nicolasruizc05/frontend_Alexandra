// Definicion de la funcion de adivinar el numero
let adivinar=()=>{
    // Obtiene el valor del usuario y lo almacena en una variable
    let numero=document.getElementById("numero").value
    // Genera un numero aleatorio entre 1 y 10
    let random=Math.floor(Math.random()*10)+1
    // Comprobar que el numero ingresado no este vacio y que este entre 1 y 10
    if (numero==""){
        alert("El numero no puede estar vacio")
        return
    }else if(numero<1 || numero>10){
        alert("El numero debe estar entre 1 y 10")
        return
    }
    // Se ejecuta la comprobacion para dar inicio al juego y se muestra el mensaje si gano o perdio
    if(numero==random){
        alert("Felicidades, adivinaste el numero")
    }else{
        alert(`Lo siento el numero era ${random}`)
    }
}