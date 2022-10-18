import React from "react";

export default function Card({name, img,hp,ataque,types }){
    return(
        <div>
            <h3>Nombre: <br />{name}</h3>
            <img src={img} alt="img Not found" width="200px" height="250px" />
            <h5>Hp: <br />{hp}</h5>
            <h5> Ataque <br />{ataque}</h5>
            <h5>Tipo: <br />{types}</h5>
            
            
        </div>
    )
}



/* Imagen
Nombre
Tipos (Electrico, Fuego, Agua, etc) */