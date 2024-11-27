import './App.css';
import RedesSociales from './RedesSociales';
import redesSocialesData from "./redes-sociales.json";

function App() {
  
  return (
    <>
    <div className="container">
        <div className="left">
            <h2>¡LAMENTAMOS LAS MOLESTIAS!</h2>
            <p>Este espacio se encuentra en mantenimiento.</p>
            <p>Muy pronto estará disponible.</p>
        </div>
        <div className="right">
            <img src="./background.png" alt="Imagen Mantenimiento CCD"/>
        </div>
    </div>
    <div className='socials'>
      <RedesSociales redes={redesSocialesData} />
    </div>
    </>
  );
}

export default App;
