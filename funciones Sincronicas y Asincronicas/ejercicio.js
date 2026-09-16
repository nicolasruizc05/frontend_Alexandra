// 4. Comprendiendo el funcionamiento 
console.log("Inicio")
function saludar(){
    console.log("Hola aprendiz")
}
saludar()
console.log("Fin")

// 5. Analizando una funcion asincrona
console.log("Inicio")
setTimeout(()=>{
    console.log("Proceso terminado")
}, 2000)
console.log("Fin")

// 6. Prediga el resultado  
console.log("A")
setTimeout(()=>{
    console.log("B")
}, 0)
console.log("C")
setTimeout(()=>{
    console.log("D")
},1000)
console.log("E")

// 7. Funciones con async y await
function obtenerUsuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Usuario encontrado")
        },2000)
    })
}
async function mostrarUsuario(){
    console.log("Buscando usuario...")
    const resultado = await obtenerUsuario()
    console.log(resultado)
    console.log("Proceso terminado")
}
mostrarUsuario()

// Reto practico
function consultarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuario encontrado");
        }, 3000);
    });
}

async function mostrarUsuario() {
    console.log("Consultando usuario...");

    const resultado = await consultarUsuario();

    console.log(resultado);
    console.log("Proceso terminado");
}

mostrarUsuario();