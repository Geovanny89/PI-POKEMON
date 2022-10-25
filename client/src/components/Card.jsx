import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
export default function Card({name,img,hp,ataque,types,id }){
    return(
        <div className="card">
            <div className="card-nombre">
                <Link to={`/pokemon/${id}`}>{name}</Link>
                
            </div>
            <div>
               
                <img src={img} alt="img Not found" width="200px" height="200px" />
            </div>
            <div className="contenedor">
            <div className="vida">
                <p>Hp:</p>     
                <h3>{hp}</h3>
            </div>
            <div className="atack">
                <p> Ataque</p>
                <h3>{ataque}</h3>
            </div>
            <div className="type">   
                <p>Tipo: </p>
                <h3>{types}</h3>
            </div> 
            
          </div>  
            
            
            
        </div>
    )
}



/* Imagen
Nombre
Tipos (Electrico, Fuego, Agua, etc) */