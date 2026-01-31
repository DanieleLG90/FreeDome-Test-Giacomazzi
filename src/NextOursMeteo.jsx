import './nextOursMeteo.css'
import { getWeatherIcon } from './NewSetIcon.jsx';

export default function NextOursMeteo ({ data }){

    if (!data || data.length === 0) return null

    return(
        <div className="hours-container">
            {data.map((item, index) =>{
                const hour = item.dt_txt.split(' ')[1].slice(0, 5)
                const temp = Math.round(item.main.temp)
                const iconCode = item.weather[0].icon

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