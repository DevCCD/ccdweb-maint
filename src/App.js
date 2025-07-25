import './App.css';
import RedesSociales from './RedesSociales';
import redesSocialesData from "./redes-sociales.json";

function App() {
  
  return (
    <>
      <div className="container">
        <div className="left">
          <img src="./logoccd.png" alt="Logo CCD"/>
          <h1>Nuestra página se encuentra en mantenimiento.</h1>
          <p>Muy pronto estará disponible.</p>
          {/* MOVIMOS LAS REDES SOCIALES AQUÍ */}
          <div className='socials'>
            <RedesSociales redes={redesSocialesData} />
          </div>
        </div>
        <div className="right">
          <img src="./background.png" alt="Imagen Mantenimiento CCD"/>
        </div>
      </div>
    </>
  );
}

export default App;