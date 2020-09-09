import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  -webkit-appearance: none;
`;

const UseCoin = (label, coins) => {
  // state del custom hook
  const [stateCoin, setStateCoin] = useState("");

  const select = () => (
    <Fragment>
      <Label> {label} : </Label>
      <Select onChange={(e) => setStateCoin(e.target.value)} value={stateCoin}>
        <option>- Seleccionar -</option>
        {coins.map((coin) => (
          <option key={coin.codigo} value={coin.codigo}>
            {coin.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [stateCoin, select];
};

export default UseCoin;
