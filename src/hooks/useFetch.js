import { useEffect, useState } from 'react';

export const useFetch = (url) => {
 const [ state, setState ] = useState({
  data: null,
  error: null,
  loading: true,
 });
 
 useEffect(() => {

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
 setState({
  data,
  error: null,
  loading: false,
 })
 })
  
 }, [ url ]);
 

 return state;
}
