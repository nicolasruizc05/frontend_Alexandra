import Dashboard from "./Dashboard"
function Header(props){
    return(
        <div>
            <Dashboard nombres={props.nombre}></Dashboard>
            <h1>Este es el header componente hijo</h1>
            <h1>Este es el componente de: {props.nombre} Contraseña: {props.password}</h1>
        </div>
    )
}
export default Header