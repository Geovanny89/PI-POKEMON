const axios = require("axios");
const {Pokemon, Tipo} = require('../../db') 

const getDbInfo = async() => {
    return await Pokemon.findAll({
        include:{
            model:Tipo,
            attributes: ['name'],
            through:{
                attributes: [],
            },
        }
    })
}

module.exports= getDbInfo;