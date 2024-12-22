import './HomeStyled.css';


function Home() {
    return (
      <div className="container-fluid home d-flex" style={{ backgroundImage: `url("/inicio/inicio.png")`}}>
      <div className='container d-flex align-items-start'>
        <div className='title-home'>
            <h1> Encontrá tu próximo </h1>
        </div>
        <div className='contadores'>

        </div>
        <div className='component-filtro' > </div>
      </div>
       
      </div>
    );
  }
  
  export default Home;