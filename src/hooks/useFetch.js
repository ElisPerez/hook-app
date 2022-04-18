import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
 
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });
 
 useEffect(() => {

  return () => {
   isMounted.current = false;
  };
 }, []);

  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {       
        
          if (isMounted) {
           setState({
             data,
             error: null,
             loading: false,
           });
          }
       
      });
    
  }, [url]);

  return state;
};
