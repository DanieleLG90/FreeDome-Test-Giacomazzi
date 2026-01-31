import './nextOursMeteo.css'
import { getWeatherIcon } from './NewSetIcon.jsx';

// components per la visualizzazione meteo delle prossime ore

export default function NextOursMeteo ({ data }){

    if (!data || data.length === 0) return null

    return(
        <div className="hours-container">
            {data.map((item, index) =>{

                const hour = item.dt_txt.split(' ')[1].slice(0, 5)// orario
                const temp = Math.round(item.main.temp) // temperatura
                const iconCode = item.weather[0].icon // codice

                return(
                    <div key={index} className="hour-item">
                        <span className="temp">{temp}°</span>
                        <div className='hour-meteo-icon'>
                           {getWeatherIcon(iconCode)} 
                        </div>
                        <span className="hour">{hour}</span>
                    </div>
                )
            })}
        </div>
    )
}