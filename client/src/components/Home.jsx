/* eslint-disable no-unused-vars */
import React from "react";
import { useState ,  useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons,filterPokemonsByFilter, filterCreated,orderByName} from "../redux/actions";
import {Link} from 'react-router-dom'
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./home.css"


//trabajamsos con hooks

export default function Home(){
    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const allPokemons = useSelector((state) => state.pokemons);

//creo estados locales
const [order,setOrder]=useState('')
const [currentPage, setCurrentPage]= useState(1)
const [pokemonsXpage, setPokemonsXpage]= useState(12)
const indexOfLastPokemon = currentPage * pokemonsXpage
const indexOfFirstPokemon = indexOfLastPokemon - pokemonsXpage
const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)

const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber);
};

    useEffect(() => { //traemos los personajes
        dispatch(getPokemons())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    // eslint-disable-next-line no-unused-vars
    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
    }
    function handleFilterTypes(e){
        console.log(allPokemons);
        dispatch(filterPokemonsByFilter(e.target.value))
    }
function handleFilterCreate(e){
    dispatch(filterCreated(e.target.value))
}
function handleFilterAsc(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
}

    return (
        <div className="page">
            <Link to='/pokemons'>Crear Pokemon</Link>
            <h1>POKEMON</h1>
            <button onClick={e=> handleClick(e)}>
                Volver a cargar todos los Pokemons
            </button>
            <div>
            <select onClick={e=>handleFilterAsc(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value="desc">Descendente</option>
            </select>
                <select onChange={e => handleFilterTypes(e)}>
                    <option value="All">Todos</option>
                    <option value="steel">Acero</option>
                    <option value="water">Agua</option>
                    <option value="unknown">Desconocido</option>
                    <option value="dragon">Dragon</option>
                    <option value="electric">Electrico</option>
                    <option value="ghost">Fantasma</option>
                    <option value="fire">Fuego</option>
                    <option value="fairy">Hada</option>
                    <option value="ice">Hielo</option>
                    <option value="bug">Insecto</option>
                    <option value="fighting">Lucha</option> 
                    <option value="normal">Normal</option>
                    <option value="dark">Oscuro</option>
                    <option value="grass">Planta</option>
                    <option value="psychic">Psíquico</option>
                    <option value="rock">Roca</option> 
                    <option value="shadow">Sombra</option>  
                    <option value="ground">Terrestre</option>
                    <option value="flying">Volador</option>  
                    <option value="poison">Veneno</option>  


                </select>
                <select onChange={e => handleFilterCreate(e)}>
                    <option value="All">Todos</option> 
                    <option value="created">Creados</option>
                    <option value="api">Existente</option>
                </select>
                <Paginado
                pokemonsXPage={pokemonsXpage}
                allPokemons ={allPokemons.length}
                paginado={paginado}

                />
                
                <SearchBar/>

                {currentPokemons?.map(c=>{
                    return(
                        // eslint-disable-next-line react/jsx-no-undef
                        
                            <Link to={'/home'}>
                                <Card key={c.id} id={c.id} name={c.name} img={c.img ? c.img : c.image} types={c.types} hp={c.hp} ataque={c.ataque} 
                                
                                />
                            </Link>
                        )
                })} 

            </div>
        </div>
    )
}
