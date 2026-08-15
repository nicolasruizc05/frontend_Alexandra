// guardar la palabra a adivinar
let palabra="javascript";
// función para validar la respuesta del usuario
let validar=()=>{
// obtener la respuesta del usuario
    let respuesta=document.getElementById("respuesta").value
// comparar la respuesta con la palabra a adivinar y mostrar el resultado
    if (respuesta.toLowerCase() === palabra.toLowerCase()){
        document.getElementById("resultado").textContent="Palabra Correcta";
    } else {
        document.getElementById("resultado").textContent="Palabra Incorrecta";
    }
}
