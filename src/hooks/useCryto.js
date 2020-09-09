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

const UseCrypto = (label, listCryptos) => {
  // state del custom hook
  const [stateCryto, setStateCryto] = useState("");

  const selectCriypto = () => (
    <Fragment>
      <Label> {label} : </Label>
      <Select
        onChange={(e) => setStateCryto(e.target.value)}
        value={stateCryto}
      >
        <option>- Seleccionar -</option>
        {listCryptos.map((crypto) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [stateCryto, selectCriypto];
};

export default UseCrypto;
