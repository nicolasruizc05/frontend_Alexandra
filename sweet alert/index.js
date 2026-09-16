let boton = document.querySelector("#boton")
boton.addEventListener("click", ()=>{
    Swal.fire({
        title:"Bienvenido a mi alerta",
        text: "Esta es la alerta de bienvenido",
        icon: "success",
        confirmButtonText:"Aceptar"
    });
})
let boton2 = document.querySelector("#boton2")
boton2.addEventListener("click", ()=>{
    let resultado=Swal.fire({
        title:"Desea Eliminar",
        text:"Esta seguro que desea Elminar",
        icon:"error",
        showCancelButton: true,
        confirmButtonText:"Si Eliminar",
        cancelButtonText:"No, salir alerta"
    })
    console.log(resultado.isConfirmed)
})