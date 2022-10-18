//const getApiPokemon = require('./getApiPokemon');

const getApiPokemon = require('./getApiPokemon'); 
const getDbInfo = require('./getDbInfo');


const getAllPokemon = async () =>{
    const apiInfo = await getApiPokemon();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports= getAllPokemon;