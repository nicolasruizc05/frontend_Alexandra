import fotoNicolas from './img/28.jpg'
function Tarjeta(){
    return(
        <div>
            <div>
                <img src={fotoNicolas} alt="Nicolas" width="200" height="150"/>
                <h2>Nicolas </h2>
                <p>Ruiz</p>
                <p>28</p>
            </div>
        </div>      
    )
}
export default Tarjeta