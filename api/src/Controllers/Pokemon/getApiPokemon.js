const axios = require("axios");

const getApiPokemon = async (url)=> {
    try {
    const apiResults = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const apiNext =await axios.get(apiResults.data.next)
    const apiInfo = apiResults.data.results.concat(apiNext.data.results)//concateno para mostrar los 40 primeros pokemon
    for(let p of apiInfo){
        let url =await axios.get(p.url);
       // delete p.url;
        p.id = url.data.id;
        p.img = url.data.sprites.front_default;
        p.hp = url.data.stats[0].base_stat;
        p.ataque = url.data.stats[1].base_stat;
        p.defensa = url.data.stats[2].base_stat;
        p.velocidad= url.data.stats[5].base_stat;
        p.altura = url.data.height;
        p.peso = url.data.weight;
        p.types = url.data.types.map((el) => el.type.name);
        p.key =url.data.id;
      }
      return apiInfo;
    } catch (error) {
      console.log(error);
    }
}
module.exports =getApiPokemon;