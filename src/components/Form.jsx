import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCryto from "../hooks/useCryto";
import axios from "axios";
import Error from "./Error";

const Botton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  // menu monedas
  const Coins = [
    { codigo: "USD", nombre: "Dolar de EEUU" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  // listado de critomonedas, segun api
  const [listCrytos, setListCryptos] = useState([]);
  // state del mensaje de error
  const [error, setError] = useState();
  // custom hooks tipo de moneda
  const [typeCoin, SelectCoin] = useCoin("Elegi tu moneda", Coins);

  // consulta api crypto
  useEffect(() => {
    const apiCryto = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const res = await axios.get(url);
      setListCryptos(res.data.Data);
    };
    apiCryto();
  }, []);

  // custom hooks consulta api cryto
  const [stateCryto, SelectCriyto] = useCryto(
    "Elige tu criptomoneda: ",
    listCrytos
  );

  console.log(stateCryto);
  console.log(typeCoin);

  // validar form
  // if (stateCryto.trim() === "" || typeCoin.trim() === "") {
  //   setError(true);
  //   return;
  // } else {
  //   setError(false);
  // }

  return (
    <form>
      {/* <Error error={error} /> */}
      <SelectCoin />
      <SelectCriyto />
      <Botton type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
