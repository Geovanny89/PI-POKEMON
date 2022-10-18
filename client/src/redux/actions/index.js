import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
        var pedidoApi = await axios.get("http://localhost:3001/getAll")
        /* console.log(pedidoApi.data) */
        return dispatch({
            type: 'GET_POKEMONS',
            payload: pedidoApi.data
        })
    }
}
export function filterPokemonsByFilter(payload){
  console.log(payload)
  return{
    type: 'FILTER_BY_FILTER',
    payload
  }
}
export function orderByName(payload){
  return{
    type: 'ORDER_BY:NAME',
    payload
  }
}
 
export function filterCreated(payload){
  return{
    type: 'FILTER_CREATED',
    payload
  }
}


/* export const getPokemons = () => async (dispatch) => {
  const response = await fetch("http://localhost:3000/pokemons");
  const data = await response.json();
  dispatch({
    type: "GET_POKEMONS",
    payload: data,
  });
}; */
// conexion de back con front