import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
 const { counter, increment } = useCounter(1);
 const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
 
 // data puede ser null, al hacer !null retorna true. pero con !!null retorna falso. Entonces !!data significa "si data es falso entonces..." Lo que hace es que se  convierte a boleano y si es falso entonces no evalua la otra condicion.

 const { author, quote } = !!data && data[ 0 ];

  return (
    <>
      <h1>Breakingbad Quote</h1>
      <hr />

    { loading
     ?
      (
        <div className="alert alert-info text-center">Loading...</div>
      )
     :
      (
        <blockquote className="blockquote text-end">
       <p>{ quote }</p>
       <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
      )
    }

    <button onClick={ increment } className="btn btn-primary">Next quote</button>
    </>
  );
};
