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
export function getNamePokemons(name){
  return async function(dispatch){
  //  console.log(dispatch)
    try {
      var llamadoApi =await axios.get('http://localhost:3001/getAll?name=' + name );
      return dispatch({
        type: "GET_NAME_POKEMONS",
        payload: llamadoApi.data
      })
     }catch (error) {
      console.log(error)
    }
  }
} 
export function getTypes(){
  return async function (dispatch){
    var info = await axios.get("http://localhost:3001/getAll/types");
    console.log(info)
    return dispatch({
      type: "GET_TYPES",
      payload:info.data
    });
  }
}


export function postPokemon(payload){
  return async function(dispatch){
    var response = await axios.post("http://localhost:3001/pokemons", payload);
    console.log(response)
    return response;
    /* return dispatch ({
      type: 'POST_POKEMON',
      payload:response  })*/
      
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
    type: 'ORDER_BY_NAME',
    payload
  }
}

// Filtro creados, existentes 
export function filterCreated(payload){
  return{
    type: 'FILTER_CREATED',
    payload
  }
}
export function getDetail(id){
  return async function(dispatch){
    try {
      var idApi = await axios.get("http://localhost:3001/" + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: idApi.data
      })
    } catch (error) {
      console.log(error)
    }
   
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