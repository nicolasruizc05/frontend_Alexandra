import './App.css'
import Sidebar from "./Sidebar"
import Dashboard from './Dashboard'

function App() {


  return (
    <div className='app'>
      <Sidebar nombre="Nicolas Ruiz"></Sidebar>
      <Dashboard nombretarjeta="Ariel Medina"></Dashboard>
    </div>
  )
}

export default App
