import './actualMeteo.css'
import { getWeatherIcon } from './NewSetIcon';

//Components per la visualizzazione di temperatura, luogo e meteo in tempo reale

export default function ActualMeteo ({data, city, country }){

    if (!data) return null;

    const temp = Math.round(data.main.temp)// temperatura
    const description = data.weather[0].description // descrizione clima
    const iconCode = data.weather[0].icon // codice icona

    return(
        <div className="actual-meteo-container">
            <div className="temp-city-actual-info">
                <h2>{temp}<sup>°</sup></h2>
                <p>{city}, {country}</p>
            </div>
            <div className="img-actual-meteo">
                {getWeatherIcon(iconCode, "16rem")}
            </div>
            
        </div>
    )
}