import './HomeStyled.css';
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import { Box, Tabs, Tab, Typography } from '@mui/material';
import React, { useState } from "react";

function Home() {

  /* Para manejo de filtros */
  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-fluid home d-flex" style={{ backgroundImage: `url("/inicio/inicio.png")` }}>
      <div className='container d-flex align-items-start flex-column justify-content-center'>
        <div className='title-home'>
          <h1> Encontrá tu próximo <br /> <span id='span-home'> HOGAR</span> </h1>
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
            >
              <Tab value="one" label="Alquiler" />
              <Tab value="two" label="Venta" />
            </Tabs>

            {/* Conditional Filters */}
            <Box className="d-flex flex-row flex-wrap mt-3 align-items-center justify-content-start ">
              {value === "one" && (
                <Box className="d-flex flex-row gap-5 " >
                  <Box className="d-flex flex-column">
                    <label>Ubicación:</label>
                    <input type="number" />
                  </Box>
                  <Box className="d-flex flex-column">
                    <label>Tipo de propiedad:</label>
                    <select>
                      <option value="casa">Casa</option>
                      <option value="departamento">Departamento</option>
                      <option value="terreno">Terreno</option>
                    </select>
                  </Box>
                  {/* Agrega más filtros específicos para Alquiler */}
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
                      <option value="casa">Casa</option>
                      <option value="departamento">Departamento</option>
                      <option value="terreno">Terreno</option>
                    </select>
                  </Box>
                  {/* Agrega más filtros específicos para Venta */}
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