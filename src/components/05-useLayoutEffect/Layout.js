import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [ quote ]);
 
 // Funcion reemplazar para el segundo parámetro el método JSON.stringify (opcional)
 // function replace(key, value) {
 //  if (typeof value === 'string') {
 //   return 'Elis cambió el valor de esta key por este texto con la funcion replace';
 //  } else {
 //   return value;
 //  }
 // }
 // console.log(replace('nombre', 'Elis Antonio'));
// el tercer parámetro del método JSON.stringify es el número de tabulacion que deseo entre cada resultado.
  return (
    <>
      <h1>Layout - useLayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      {/* en vez de usar una funcion replace para el segundo parametro se puede usar un arreglo indicando solamente las keys que se desean mostrar en los resultados */}
      <pre>{JSON.stringify(boxSize, ['width', 'right'], 3)}</pre>

      <button onClick={increment} className="btn btn-primary">
        Next quote
      </button>
    </>
  );
};
