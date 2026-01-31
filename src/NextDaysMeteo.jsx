import './nextOursMeteo.css'
import { getWeatherIcon } from './NewSetIcon.jsx';

export default function NextDaysMeteo ({ data }){
   if (!data || data.length === 0) return null

    return(
        <div className="hours-container">
            {data.map((item, index) =>{

                const date = new Date(item.dt_txt)
                const dayName = date.toLocaleDateString('it-IT', { weekday: 'short' }).replace('.', '')
                const temp = Math.round(item.main.temp)
                const iconCode = item.weather[0].icon

                return(
                    <div key={index} className="hour-item">
                        <span className="temp">{temp}°</span>
                        <div className='hour-meteo-icon'>
                           {getWeatherIcon(iconCode)} 
                        </div>
                        <span className="hour">{dayName}</span>
                    </div>
                )
            })}
        </div>
    )
}