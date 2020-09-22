import React from "react";
import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const TextPrice = styled.p`
  font-size: 30px;
  /* span {
    font-weight: bold; */
  /* } */
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const ShowData = ({ getData }) => {
  // console.log(getData);

  // si el objeto esta vacio retun null
  if (Object.keys(getData).length === 0) return null;

  return (
    <ContainerDiv>
      <TextPrice>
        el precio es : <span>{getData.PRICE}</span>
      </TextPrice>
      <Text>
        valor mas alto del dia : <span>{getData.HIGHDAY}</span>
      </Text>
      <Text>
        valor mas bajo del dia : <span>{getData.LOWDAY}</span>
      </Text>
      <Text>
        varicacion ultimas 24 horas: <span>{getData.CHANGEPCT24HOUR} %</span>
      </Text>
      <Text>
        Ultima actualizacion : <span>{getData.LASTUPDATE}</span>
      </Text>
    </ContainerDiv>
  );
};

export default ShowData;
