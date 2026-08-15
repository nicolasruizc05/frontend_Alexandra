// Obtener el elemento del cuadrado
let cuadrado = document.getElementById("cuadrado");
// Establecer el tamaño y color del cuadrado
cuadrado.style.width = "100px";
cuadrado.style.height = "100px";
cuadrado.style.backgroundColor = "blue";
cuadrado.style.color="white";
cuadrado.style.position = "absolute";
// creamos una variable para saber si se esta arrastrando el cuadrado
let arrastrando = false;
// Agregamos un evento para cuando el usuario hace clic en el cuadrado
cuadrado.addEventListener("mousedown",()=>{
    arrastrando = true;
})
// Agregamos un evento para cuando el usuario mueve el mouse
document.addEventListener("mousemove",(event)=>{
    if(arrastrando){
// Actualizamos la posición del cuadrado a la posición del mouse
        cuadrado.style.left=event.clientX+"px"
        cuadrado.style.top=event.clientY+"px"
    }
})
// Agregamos un evento para cuando el usuario suelta el mouse
document.addEventListener("mouseup",()=>{
    arrastrando = false;
})


