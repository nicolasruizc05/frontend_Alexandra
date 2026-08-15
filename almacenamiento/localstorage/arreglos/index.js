let productos=[]
let datos=JSON.parse(localStorage.getItem("productos"))
let guardar=()=>{
    let nombre=document.getElementById("name").value 
    let tipo=document.getElementById("type").value
    let precio=document.getElementById("price").value
    let product={
        nombre:nombre,
        tipo:tipo,
        precio:precio
    }
    // push final de un arreglo
    productos.push(product)
    console.log(productos)
    // Todo lo que se guarda en local storage es de tipo texto
    localStorage.setItem("productos",JSON.stringify(productos))
}
let verDatos=()=>{
    //let datos=JSON.parse(localStorage.getItem("productos"))
    alert(datos)
    let contenedor=document.getElementById("tabla")
    let tabla=document.createElement("table")
    let fila=document.createElement("tr")
    let celda=document.createElement("td")
    celda.textContent=datos[0].nombre
    let celda1=document.createElement("td")
    celda1.textContent=datos[0].tipo
    let celda2=document.createElement("td")
    celda2.textContent=datos[0].precio
    fila.appendChild(celda)
    fila.appendChild(celda1)
    fila.appendChild(celda2)
    tabla.appendChild(fila)
    contenedor.appendChild(tabla)
}
// json.stringify=> convertir objeto a texto
// json.parse=> convertir texto a arreglo
let verDatosfor=()=>{
	//let datos=JSON.parse(localStorage.getItem("productos"))
	let tabla = document.createElement("table")
	let contenedor=document.getElementById("tabla")
	for (let i = 0; i < datos.length; i++) {
	 let fila=document.createElement("tr")
    let celda=document.createElement("td")
    celda.textContent=datos[i].nombre
    let celda1=document.createElement("td")
    celda1.textContent=datos[i].tipo
    let celda2=document.createElement("td")
    celda2.textContent=datos[i].precio
	 fila.appendChild(celda)
    fila.appendChild(celda1)
    fila.appendChild(celda2)
    tabla.appendChild(fila)
	}
	contenedor.appendChild(tabla)
}