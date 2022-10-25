import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../redux/actions";

export default function SearchBar(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch= useDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name,setName]=useState("")

    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)

    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
       
        
    }

    return(
        <div>
            <input 
            type="text" 
           placeholder="Buscar..."
           onChange = {(e)=> handleInputChange(e)}
            />
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
    )
}