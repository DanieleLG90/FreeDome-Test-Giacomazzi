import React from 'react'
// import dei 3 components 
import ActualMeteo from './ActualMeteo.jsx'
import NextOursMeteo from './NextOursMeteo.jsx'
import NextDaysMeteo from './NextDaysMeteo.jsx'
// import libreria e css file per >Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css'

function App() {

  const [infoMeteo, setInfoMeteo] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null);

  const [location, setLocation] = React.useState('Coimbra,PT')
  const [apiKey, setApiKey] = React.useState('00a1709f4f44bf968a53f24d450c2c56')
  
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=it&appid=${apiKey}`

  React.useEffect(() => {
    const getInfoMeteo = async () =>{
      try {
        setLoading(true);
        const response = await fetch(URL);
        
        if (!response.ok) {
          throw new Error('Qualcosa è andato storto con la chiamata');
        }

        const fullData = await response.json();
      
        // selezione dati necessari per i props
        const organized = {
          city: fullData.city.name, // città
          country: fullData.city.country, // paese
          current: fullData.list[0], // Il meteo attuale
          hourly: fullData.list.slice(1, 6), // Prossime 5 ore
          daily: fullData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 5) // previsioni prossimi giorni 
        };

        setInfoMeteo(organized);
      } catch (error) {
        console.error("Errore nel recupero dati:", error);
      } finally {
        setLoading(false);
      }
    };
    getInfoMeteo();
  }, [])

  if (loading) return <div className="previsioni-container">Caricamento...</div>;
  if (error) return <div className="previsioni-container">Errore!</div>;
  if (!infoMeteo) return null;

  return(
    <div className='previsioni-container'>

     <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}      
        slidesPerView={1} // per inserire una slide alla volta
        pagination={{ 
          clickable: true, // punti cliccabili per navigare
          dynamicBullets: true // punto grande per pagina corrente
        }}
        navigation={true} //frecce per il desktop
        className="mySwiper"
        style={{
          height: '12.5rem',
          borderRadius: '1.75rem',
          
          '--swiper-theme-color': '#ffffff',
          '--swiper-navigation-size': '20px',
        }}
      >

        <SwiperSlide>
          <ActualMeteo 
            data={infoMeteo.current} 
            city={infoMeteo.city} 
            country={infoMeteo.country}
          />
        </SwiperSlide>

        <SwiperSlide>
          <NextOursMeteo data={infoMeteo.hourly} />
        </SwiperSlide>

        <SwiperSlide>
          <NextDaysMeteo data={infoMeteo.daily} />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default App
