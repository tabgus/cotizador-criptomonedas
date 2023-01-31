import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImagenCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-width: 380px) {
    margin-right: 1px;
    margin-left: 1px;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 30px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Card = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        //console.log(resultado.DISPLAY[criptomoneda][moneda]);
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagen criptomonedas" />
      <div>
        <Heading>Cotiza tus Criptomonedas</Heading>
        <Formulario setMonedas={setMonedas} />
      </div>
      {cargando && <Spinner />}
      <Card>{resultado.PRICE && <Resultado resultado={resultado} />}</Card>
    </Contenedor>
  );
}

export default App;
