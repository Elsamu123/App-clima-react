import { useState, useEffect } from "react";

export const UseFetch = () => {
  
    const apiKey = '89f264995f46788a7cad85e64f1ab6dd';
    const lat = 18.7357;
    const lon = 70.1627;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    


    const [dataClima, setClima] = useState(null);

    useEffect(() => {
        console.log(dataClima)
        
  
      }, [dataClima]);

    const fetchUrl = async (urL) => {
        try{
          const response = await fetch(url)
          const data = await response.json()
          setClima(data)
          
  
        }catch(error){
          console.error('error', error)
  
        }
  
      }
  return {
    fetchUrl,
    ...dataClima,
    dataClima,
    url


  }

}
