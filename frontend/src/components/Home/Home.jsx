import './HomeStyled.css';
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import { Box, Tabs, Tab } from '@mui/material';
import React, { useState, useEffect } from "react";
import "../../styles/variables.css"

function Home() {

  /* Para manejo de filtros */
  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*Tipos propiedad*/
  const [tiposPropiedad, setTiposPropiedad] = useState([]);

  useEffect(() => { //realizo una petición HTTP a tu backend y luego proceso esos datos para que se muestren en el frontend.
    fetch('http://localhost:3000/api/tipos-propiedad') //fetch realiza una solicitud HTTP
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
        setTiposPropiedad(data); //actualizo el estado de tiposPropiedad con los datos que vinieron de la API. 
      })
      .catch((error) => {
        console.error('Error al cargar los tipos de propiedad:', error); // Maneja el error
      });
  }, []);


  return (
    <div className="container-fluid home d-flex" style={{ backgroundImage: `url("/inicio/inicio.png")` }}>
      <div className='container d-flex align-items-start flex-column justify-content-center'>
        <div className='title-home'>
          <h1 class="urbanist-title"> Encontrá tu próximo <br /> <span class="finger-paint-regular"> HOGAR</span> </h1>
          <p> Te ayudamos a encontrar tu próximo hogar </p>
        </div>
        <div className='contadores'>
          <div className='contenedor-contadores row '>
            <div className="counter col-6 p-4">
              <FaPlus className="fa-2x" />
              <h2 className="timer count-title count-number">
                <CountUp end={300} duration={2} />
              </h2>
              <p className="count-text">Propiedades</p>
            </div>
            <div className="counter col-6 p-4">
              <FaPlus className="fa-2x" />
              <h2 className="timer count-title count-number">
                <CountUp end={4500} duration={2} />
              </h2>
              <p className="count-text">Clientes felices</p>
            </div>
          </div>
        </div>
        <div className='container-filtro border rounded-4' >
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'var(--color-green)', 
                },
                '& .MuiTab-root': {
                  color: 'var(--color-green)', 
                },
                '& .MuiTab-root.Mui-selected': {
                  color: 'var(--color-green)', 
                  fontWeight: 'bold', 
                },
              }}
            >
              <Tab value="one" label="Alquiler" />
              <Tab value="two" label="Venta" />
            </Tabs>

            {/* Conditional Filters */}
            <Box className="d-flex flex-row flex-wrap mt-3 align-items-center justify-content-around">
              {value === "one" && (
                <Box className="d-flex flex-row gap-5 align-items-center justify-content-around" >
                  <Box className="d-flex flex-column align-items-start">
                    <label>Ubicación:</label>
                    <input type="number" />
                  </Box>
                  <Box className="d-flex flex-column align-items-start">
                    <label>Tipo de propiedad:</label>
                    <select>
                      {tiposPropiedad.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>
                          {tipo.nombre}
                        </option>
                      ))}
                    </select>
                  </Box>
                  <Box className="d-flex flex-column align-items-start" >
                    <button> Buscar </button>
                  </Box>
                </Box>
              )}
              {value === "two" && (
                <Box className="d-flex flex-row gap-5">
                  <Box className="d-flex flex-column">
                    <label>Ubicación:</label>
                    <input type="number" />
                  </Box>
                  <Box className="d-flex flex-column">
                    <label>Tipo de propiedad:</label>
                    <select>
                      {tiposPropiedad.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>
                          {tipo.nombre}
                        </option>
                      ))}
                    </select>
                  </Box>
                  <Box >
                    <button> Buscar </button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </div>
      </div>

    </div>
  );
}

export default Home;