import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filtro from './components/Filtro/Filtro';
import Navbar from './components/Navbar/Navbar';

function App() {
  const PropiedadesPage = () => {
    return (
      <div>
        <Navbar/>
        <Filtro /> {/* Mostrar el componente Filtro */}
      </div>
    );
  };

    return (
      <Router>
        <div className="App">
          <Routes>
            {/* Ruta para /api/propiedades */}
            <Route path="/api/propiedades" element={<PropiedadesPage />} />
          </Routes>
        </div>
      </Router>
    );
  };
  

export default App;
