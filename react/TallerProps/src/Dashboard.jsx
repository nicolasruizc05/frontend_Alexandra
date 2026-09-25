import Cards from "./Cards"
import fresa from "./assets/img/fresas.jpg"
import mango from "./assets/img/mango.jpg"
import maracuya from "./assets/img/maracuya.jpg"
import pera from "./assets/img/pera.jpg"
import manzana from "./assets/img/manzana.jpg"
import piña from "./assets/img/piña.jpg"
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="contenedor">
                <Cards name="Fresa" desc="Libra de ricas y dulces fresas" price="$2000" estado="Disponible" img={fresa}></Cards>
                <Cards name="Mango" desc="Libra de Mango Tommy" price="$5000" estado="Disponible" img={mango}></Cards>
                <Cards name="Maracuya" desc="Libra de Maracuya" price="$5500" estado="Agotado" img={maracuya}></Cards>
                <Cards name="Pera" desc="Libra de pera jugosa" price="$3500" estado="Oferta" img={pera}></Cards>
                <Cards name="Manzana" desc="20 Manzanas rojas" price="5000" estado="Oferta" img={manzana}></Cards>
                <Cards name="Piña" desc="Piña oro miel por unidad" price="$2000" estado="Agotado" img={piña}></Cards>
            </div>
            
        </div>
    )
}
export default Dashboard