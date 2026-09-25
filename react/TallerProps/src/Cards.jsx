function Cards(props){
    return(
        <div className="card">
            <h3 className="titulo">{props.name}</h3>
            <img src={props.img} alt="" className="image"/>
            <p className="descripcion">{props.desc}</p>
            <p className="price">Precio: <span className="precio"> {props.price}</span></p>
            <p className="estado">{props.estado}</p>
        </div>
    )
}
export default Cards