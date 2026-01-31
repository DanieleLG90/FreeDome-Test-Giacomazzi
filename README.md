# FreeDome-Test-Giacomazzi
widget per meteo, test stage front end


Ho sviluppato il widjet utilizzando React.

Ho utilizzato Swiper.js per gestire lo slide tra i 3 components.
Swiper mi ha inoltre fornito le frecce per la navigazione da desktop ed i punti per indicare la pagina corrente, anche lo cliccabili per la navigazione.
Nella parte mobile, le frecce vengono rimosse.

Ho optato per utilizzare un set di icone di react icon, più in linea con il design.
Ho creato una funzione getWeatherIcon() per associare e poi convertire le icone già presenti.

Ho deciso di tenere le parti css separate su varie pagine, per essere gestite in maniera più fluida e più chiara.
la pagine css delle ore e dei giorni sono molto simili e potevano essere gestite insieme quasi interamente, ma visto che non erano troppo grandi
ho deciso di tenerle separate.

ho utilizazzato una funzione async e useEffect per recuperare i dati e salvarli utilizzando useState.
ho deciso di separare location e apiKey in due distinti per rendere il widget riutilizzabile in futuro con altre key e altre location
