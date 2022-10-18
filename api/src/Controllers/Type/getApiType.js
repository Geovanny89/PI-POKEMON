const axios = require("axios");
const { Tipo } = require("../../db");

const getApiType = async () => {
  try {
    let tipos = await Tipo.findAll({ attributes: ["name"] });
    if (!tipos.length) {
      let url = `https://pokeapi.co/api/v2/type`;
      tipos = await axios.get(url);
      tipos = tipos.data.results.map((result) => ({
        name: result.name,
      }));
      await Tipo.bulkCreate(tipos);
    }
    return tipos;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getApiType;