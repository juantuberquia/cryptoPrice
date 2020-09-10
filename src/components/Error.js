import React from "react";
import styled from "@emotion/styled";

const ContainerError = styled.div`
  width: 99%;
  border-radius: 5px;
  background-color: #ffe0e0;
  padding: 1px;
  text-align: center;
`;

const TextError = styled.p`
  font-size: 25px;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  font-weight: lighter;
  color: #ba3939;
  padding: 0;
`;

const Error = ({ message, error }) => {
  if (error === false) return null;

  return (
    <ContainerError>
      <TextError>{message} </TextError>
    </ContainerError>
  );
};

export default Error;
