import styled from "@emotion/styled";

const Contenedor = styled.div`
  width: 600px;
  background-color: #fff;
  color: #262628;
  font-family: "Lato", sans-serif;
  display: flex;
  margin-top: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  @media (min-width: 380px) {
    display: grid;
    grid-template-columns: repeat(1);
    max-width: 330px;
    margin-right: 1px;
    margin-left: 1px;
    padding-left: 8px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  gap: 1rem;
  margin-top: 30px;
  margin-right: 20px;
  @media (min-width: 380px) {
    margin: 0 auto;
  }
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Image
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          El precio es de : <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día : <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día : <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas : <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización : <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
