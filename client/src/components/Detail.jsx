/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getDetail } from "../redux/actions/index";
import { useEffect } from "react";
import "./detail.css"

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    const myPokemons = useSelector((state)=> state.details)
return(
    <div className="carta">
        {
            myPokemons.length > 0 ?
            <div className="detalle">
                <h1>{myPokemons[0].name}</h1>
                <img src={myPokemons[0].img }/>
                <h2>Hp: {myPokemons[0].hp}</h2>
                <p>Ataque: {myPokemons.ataque}</p>
                <p>Tipo: {!myPokemons[0].createdInDb ? myPokemons[0].types + " " : myPokemons[0].tipos.map(el =>el.name +(' '))}</p>

            </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <button>Volver</button>
        </Link>
    </div>
)

}