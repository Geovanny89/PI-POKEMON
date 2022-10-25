const { Router } = require('express');
const getAllPokemon = require('../Controllers/Pokemon/getAllPokemon');
const {Pokemon, Tipo} = require('../db')
const getApiType = require('../Controllers/Type/getApiType')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');np

const axios = require("axios");


const router = Router();

router.get('/getAll', async(req, res) => {

        const{name} = req.query
        let pokeTotal = await getAllPokemon(name);
        if(name){
          console.log(name)
           let pokeNombre =await pokeTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase())); 
           //ejemkplo busqueda http://localhost:3001/getAll?name=bolbasour
             pokeNombre.length ? 
            res.status(200).send(pokeNombre) : 
            res.status(400).send ('No existe el Pokemon')
        }else{
            res.status(200).send(pokeTotal)
        }    
}); 

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const pokemonTotal = await getAllPokemon()
    if(id){
        let pokemonId = await pokemonTotal.filter(el => el.id == id)
        pokemonId.length ?
        res.status(200).json(pokemonId) : 
        res.status(404).send('No encontre Pokemon con ese Id')
    }

}); 

router.get("/getAll/types", async (req, res) => {
    try {
      const allTypes = await getApiType();
      res.send(allTypes);
    } catch (error) {
      console.log(error);
    }
  }); 
router.post('/pokemons', async(req, res) => {
    const {name,img,hp,ataque,type,altura,peso,defensa}=req.body;

    if(!name || !img || !hp || !ataque || !type ||!altura || !peso||!defensa) 
    return res.status(400).json({msg:"Faltan datos"});

    
    try {
      const obj = {name,img,hp,ataque,type,altura,peso,defensa}
      const nuevoPokemon= await Pokemon.create(obj) 
    
      res.send(nuevoPokemon);
      console.log(nuevoPokemon)

      
      
    } catch (error) {
      console.log(error)
    }
});
   /*  let {
        name,
        img,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        createdInDb,
        types
    }= req.body
    const createPokemon = await Pokemon.create({
      name,
        img,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        createdInDb
    })
    let typesDb = await Tipo.findAll({
        where:{
            name:types
        }
    })
    createPokemon.addTipo(typesDb)
    res.send('Pokemon Creado con Exito')
  }) */

module.exports = router;

