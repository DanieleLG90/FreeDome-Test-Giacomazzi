import React from 'react'

import ActualMeteo from './ActualMeteo.jsx'
import NextOursMeteo from './NextOursMeteo.jsx'
import NextDaysMeteo from './NextDaysMeteo.jsx'

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
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Coimbra,PT&units=metric&lang=it&appid=00a1709f4f44bf968a53f24d450c2c56`

  React.useEffect(() => {
    const getInfoMeteo = async () =>{
      try {
        setLoading(true);
        const response = await fetch(URL);
        
        if (!response.ok) {
          throw new Error('Qualcosa è andato storto con la chiamata');
        }

        const fullData = await response.json();
        console.log(fullData)
        
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
        modules={[Pagination, Navigation]} // Carichiamo i moduli
        spaceBetween={0}      // Nessuno spazio tra le slide
        slidesPerView={1}     // Una slide alla volta
        pagination={{ 
          clickable: true,    // I pallini sono cliccabili
          dynamicBullets: true // Effetto carino: il pallino attivo è più grande
        }}
        navigation={true}      // Abilita le frecce per il desktop
        className="mySwiper"
        style={{
          height: '12.5rem',
          borderRadius: '1.75rem',
          // Queste variabili CSS personalizzano i colori di Swiper
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
