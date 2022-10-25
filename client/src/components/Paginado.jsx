/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './paginado.css'

export default function Paginado({pokemonsXPage,allPokemons,paginado}){
    const pageNumbers =[];

    for(let i=0; i<=Math.ceil(allPokemons/pokemonsXPage)-1; i++){
        pageNumbers.push(i+1)
    }
    return (
        <nav className='barra'>
            <ul>
                {pageNumbers && 
                pageNumbers.map(number =>(
                    <li className="number" key={number}>
                    <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}