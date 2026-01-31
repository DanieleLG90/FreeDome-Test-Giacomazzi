import './nextDaysMeteo.css'
import { getWeatherIcon } from './NewSetIcon.jsx';

export default function NextDaysMeteo ({ data }){
   if (!data || data.length === 0) return null

    return(
        <div className="days-container">
            {data.map((item, index) =>{

                const date = new Date(item.dt_txt)
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).replace('.', '')
                const temp = Math.round(item.main.temp)
                const iconCode = item.weather[0].icon

                return(
                    <div key={index} className="day-item">
                        <span className="temp">{temp}°</span>
                        <div className='day-meteo-icon'>
                           {getWeatherIcon(iconCode)} 
                        </div>
                        <span className="day">{dayName}</span>
                    </div>
                )
            })}
        </div>
    )
}