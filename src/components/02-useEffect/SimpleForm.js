import React, { useEffect, useState } from "react";
import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    lastname: "",
  });

  const { name, lastname } = formState;

  useEffect(() => {
    // console.log("Un primer Efecto sin dependencia");
  }, []);
  
  useEffect(() => {
    // console.log("Segundo Efecto que se lanza con el primer efecto y se vuelve a lanzar cuando formState cambia");
  }, [ formState ]);
 
  useEffect(() => {
    // console.log("tercer Efecto que se lanza con el primer efecto y se vuelve a lanzar cuando lastname cambia (más específico)");
  }, [lastname]);
 
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="name"
          onChange={handleInputChange}
          placeholder="Tu nombre"
          type="text"
          value={name}
        />
      </div>

      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="lastname"
          onChange={handleInputChange}
          placeholder="Tu apellido"
          type="text"
          value={lastname}
        />
      </div>

      { (name === '123') && <Message /> }
    </>
  );
};
