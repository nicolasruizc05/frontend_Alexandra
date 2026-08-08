function capturarDatos(event){
    event.preventDefault(); // Evita que la pagina se recargue al enviar el formulario
    let correo = document.getElementById("correo").value;
    let mensaje= document.getElementById("mensaje").value;
    if(correo === "" || mensaje === ""){
        alert("Debe completar todos los campos.");
        return;
    }
    document.getElementById("resultado").innerHTML =`Correo: ${correo} <br> Mensaje: ${mensaje}`;
}