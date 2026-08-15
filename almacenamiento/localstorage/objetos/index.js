let guardar=()=>{
    let name = document.getElementById("nombre").value 
    let lastName = document.getElementById("apellido").value 
    let address = document.getElementById("direccion").value 
    let cell = document.getElementById("telefono").value
    let password = document.getElementById("contraseña").value
    localStorage.setItem("nombre",name)
    localStorage.setItem("apellido",lastName)
    localStorage.setItem("direccion",address)
    localStorage.setItem("telefono",cell)
    localStorage.setItem("contraseña",password)
}
let ver=()=>{
    let nombre = localStorage.getItem("nombre")
    let apellido= localStorage.getItem("apellido")
    let direc= localStorage.getItem("direccion")
    let telefono=localStorage.getItem("telefono")
    let contra=localStorage.getItem("contraseña")
    alert(`name ${nombre}
           last name ${apellido}
           address ${direc}
           cel ${telefono}
           password ${contra}`)
}