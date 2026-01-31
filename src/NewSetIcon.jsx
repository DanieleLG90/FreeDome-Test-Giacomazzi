// funzione per convertire e utilizzare icone migliori e più in linea con il design
//icone importate da react icons

import { 
  WiDaySunny, WiNightClear, 
  WiDayCloudy, WiNightAltCloudy, 
  WiCloud, WiCloudy, 
  WiRain, WiShowers, 
  WiThunderstorm, WiSnow, WiFog 
} from "react-icons/wi";

export const getWeatherIcon = (iconCode, size = "2rem") => {
  const iconMap = {
    "01d": <WiDaySunny size={size} />,
    "01n": <WiNightClear size={size} />,
    "02d": <WiDayCloudy size={size} />,
    "02n": <WiNightAltCloudy size={size} />,
    "03d": <WiCloud size={size} />,
    "03n": <WiCloud size={size} />,
    "04d": <WiCloudy size={size} />,
    "04n": <WiCloudy size={size} />,
    "09d": <WiShowers size={size} />,
    "09n": <WiShowers size={size} />,
    "10d": <WiRain size={size} />,
    "10n": <WiRain size={size} />,
    "11d": <WiThunderstorm size={size} />,
    "11n": <WiThunderstorm size={size} />,
    "13d": <WiSnow size={size} />,
    "13n": <WiSnow size={size} />,
    "50d": <WiFog size={size} />,
    "50n": <WiFog size={size} />
  };

  return iconMap[iconCode] || <WiDaySunny />;
};