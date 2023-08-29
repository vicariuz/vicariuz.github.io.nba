import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Buscador from "./Buscador";


const MiAppi = () => {
    const [teams, setTeams] = useState ([]);
    const [busqueda, setBusqueda] = useState ("");


const getData =  async () => {
   
    const url = "https://www.balldontlie.io/api/v1/teams";
    const response = await fetch(url);
    const json = await response.json();
    const jsonOrdenado = json.data.sort((a,b) =>
     a.city.localeCompare(b.city)
     );
setTeams(jsonOrdenado);
};

useEffect(() =>{
    getData();
}, []);
 
const teamFilter = (t) => {
    return t.city.toLowerCase().includes(busqueda.toLowerCase());
};

const getTeamImageURL = (city) => {
    // Normaliza la ciudad a minúsculas y reemplaza espacios por guiones bajos
    const normalizedCity = city.toLowerCase().replace(/\s/g, "_");
    
    // Construye la URL de la imagen basada en la carpeta "img" y la ciudad
    return `/src/assets/img/${normalizedCity}.jpg`; // Ajusta la ruta según tu estructura de carpetas
  };

    return (
    <><div className="buscador1">
        <i className="fa-solid fa-basketball" ></i>
      <h1>Search your NBA team:</h1> </div>
      
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} /> 

      
        {teams.filter(teamFilter).map((t,index)=> (
            <div className="acordeon">
        <div key={index} className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h1 className="accordion-header">
                    <button className="accordion-button" id="cityName" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="false" aria-controls="collapseOne">
                             {t.city}
                                </button>
            </h1>
            <div id={`collapse-${index}`} className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                 <div className="accordion-body">  {t.full_name}  
                 <img src={getTeamImageURL(t.city)} alt={t.full_name} />
                        </div>
                     </div>
                </div>
             </div>
        </div>
    ))}
    </>
    );
};  
    export default MiAppi;


    

