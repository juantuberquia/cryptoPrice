import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import img from "./crypto.png";
import Form from "./components/Form";
import ShowData from "./components/ShowData";
import Spinner from "./components/Spinner";
import axios from "axios";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 88%;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    @media (max-width: 992px) {
      width: 43%;
    }
  }
`;

function App() {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");
  const [getData, setGetData] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (coin === "") return null;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const res = await axios.get(url);
      setGetData(res.data.DISPLAY[crypto][coin]);
    };
    getData();
  }, [crypto, coin]);

  return (
    <Container>
      <div>
        <Image src={img} alt="imagen crypto"></Image>
      </div>
      <div>
        <Heading> Cotiza Criptomonedas</Heading>
        <Form setCoin={setCoin} setCrypto={setCrypto} setSpinner={setSpinner} />
        <Spinner spinner={spinner} />
        {spinner ? null : <ShowData getData={getData} />}
      </div>
    </Container>
  );
}

export default App;
