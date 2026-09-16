// capturar el boton
let boton = document.querySelector("#boton")
let conte = document.querySelector("#contenedor")
boton.addEventListener("click",()=>{
    if(conte.value=="activo"){
        conte.style.background ="green"
        conte.value = "inactivo"
        console.log("Boton esta activo")
    }else{
        conte.style.background="red"
        conte.value="activo"
        console.log("Boton esta inactivo")
    }
})


let btn = document.querySelector(".boton")
let cont = document.querySelector("#contenedor")
btn.addEventListener("click",()=>{
    if(cont.value=="activo"){
        cont.style.background="green"
        cont.value="inactivo"
    } else {
        cont.style.background="red"
        cont.value= "activo"
    }
})