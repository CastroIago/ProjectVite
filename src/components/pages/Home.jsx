import { useState, useEffect } from "react";

import "./Series.css";

const seriesURL = import.meta.env.VITE_API;

function Home() {
    const [showserie, setserie] = useState([]);

    const Getserie = async (url) => {
        
            const res = await fetch(url+'shows');
            const data = await res.json();
            console.log(data);
            setserie(data); 
        
    }

    useEffect(() => {
        // Chamar a função Getserie com a URL da série
        Getserie(seriesURL);
    }, []); // Executar apenas uma vez quando o componente montar

    return (
        <div className="container">
            <h2 className="title">Seriados:</h2>
            <div className="series-container">
            {/* Renderizar os dados da série */}
            <ul>
                {showserie.map((serie, index) => (
                    <li key={index}>
                        <img src={serie.image?.medium} alt={serie.name} />
                        <p>{serie.name}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Home;