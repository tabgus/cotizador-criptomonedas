import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: HSL(354, 95%, 90%);
  color: red;
  border: 2px solid red;
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
