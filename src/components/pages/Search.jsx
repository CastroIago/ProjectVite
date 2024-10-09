import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const searchURL = import.meta.env.VITE_API

import "./Series.css";

function Search () {
    
    const [searchParams] = useSearchParams();
    const [series, setseries] = useState([]);
    const query = searchParams.get("q");

    const GetSearchedseries = async () => {
        console.log("URL da API:", `${searchURL}search/shows?q=${query}`);
        const res = await fetch(`${searchURL}search/shows?q=${query}`);
        const data = await res.json();
        console.log("Dados retornados da API:", data);
        setseries(data); 
    
    }
    useEffect(() => {
            GetSearchedseries();
    }, [query]);
    
    return (

        <div className="container">
            <h2 className="title">
                Resultados para:<span className="query-text">{query}</span></h2>
            <div className="series-container">
            {/* Renderizar os dados da série */}
            <ul>
                {console.log (series[0])}
                {series.map((serie, index) => (
                    <li key={index}>
                        {console.log ("Image", serie)}
                        <img src={serie.show.image?.medium} alt={serie.name} />
                        <p>{serie.show.name}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Search