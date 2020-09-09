import React from "react";

const Error = ({ message, error }) => {
  if (error === false) return null;

  return (
    <div>
      <p>{(message = "diligenciar los campos")} </p>
    </div>
  );
};

export default Error;
