import React, { useEffect, useState } from 'react'
import './styles/wheatherStyles.css'
import { UseFetch } from './hooks/UseFetch'

export const WheatherApp = () => {
    const [dataRequested, setRequest] = useState(false)

    
    const {fetchUrl, main, dataClima, url} = UseFetch()

    const handleCambioCiudad = () => {
     setCiudad(e.target.value)
    }

    const onSubmit = (e) => {
      setRequest(true)
      e.preventDefault()
      fetchUrl(url)
      
    }
    
    const defKelvin = 273.15;


  return (
    <div className='container'>
      <h1> Wheather app </h1>
      <form onSubmit={onSubmit}>
         <input
          type='text'
          //value={ciudad}
          onChange={handleCambioCiudad}
         />

         <button type='submit'>Get temperature</button>
        
      </form>

      <div className='container'>
      
                    
                    { dataRequested ?
                    
                    dataClima ? 
                    <> 
                      <h2>Temperature in Dominican Republic</h2>
                      <p>Temperature: {parseInt(main.temp - defKelvin)}°C</p>
                      <img src={'favicon.ico.png'}></img>


                      

                    </>    
                      
                      
                     

               : <h1>Cargando</h1>
               : <h2>pulse the button to get the temperature</h2>
            }
                
                      

      </div>


    </div>

  )
}
