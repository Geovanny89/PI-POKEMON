const router= require('express').Router();
const getAllPokemon = require('../Controllers/Pokemon/getAllPokemon');


//const axios = require("axios");


//const router = Router();

router.get('/name', async(req, res) => {
    const name = req.query.name
    let pokeTotal = await getAllPokemon(name);
    if(name){
        let pokeNombre =await pokeTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        pokeNombre.length ? 
        res.status(200).send(pokeNombre) : 
        res.status(400).send ('No existe el Pokemon')
    }else{
        res.status(200).send(pokeTotal)
    }
});
module.exports = router;