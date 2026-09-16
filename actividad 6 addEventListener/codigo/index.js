let btn = document.querySelector(".boton")
let cont = document.querySelector("#contenedor")
btn.addEventListener("click",()=>{
    cont.classList.toggle("inactivo")
    if (cont.classList.contains("inactivo")) {
        btn.textContent="Activar"
    }else{
        btn.textContent="Desactivar"
    }
})
