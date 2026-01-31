import './actualMeteo.css'
import { getWeatherIcon } from './NewSetIcon';

export default function ActualMeteo ({data, city, country }){

    if (!data) return null;

    const temp = Math.round(data.main.temp)
    const description = data.weather[0].description
    const iconCode = data.weather[0].icon

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`

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