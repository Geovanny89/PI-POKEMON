import React,{useState,useEffect} from "react";
// eslint-disable-next-line no-unused-vars
import { Link,useHistory } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {postPokemon,getTypes} from '../redux/actions/index'
import { useDispatch,useSelector } from "react-redux";
import "./PokemonCreate.css"

/* function validate(input){
    let errors ={};
    if(!input.name){
        errors.name = 'Se requiere un Nombre';
    }
    return errors;
};
 */
export default function PokemonCreate(){
    const dispatch =useDispatch()
    // eslint-disable-next-line no-unused-vars
   const history = useHistory()
    const allTypes = useSelector((state)=>state.typesAll)
    //const [errors, setErrors]=useState({});

    // eslint-disable-next-line no-unused-vars
    const [input,setInput]= useState({
        name: " ",
        img:' ', 
        hp: ' ',
        ataque:' ',
        altura:' ',
        peso:' ',
        defensa:' ',
        type: ['normal']

    })

    // eslint-disable-next-line no-unused-vars
    function handleChange(e){

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        /* setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        })); */
       
       // console.log(input)
    }
    function handleSelect(e){
        setInput({
            ...input,
            type: [...input.type,e.target.value]
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postPokemon(input))
        alert("Pokemon Creado con Exito!!")
        setInput({
        name: " ",
        img:" ", 
        hp: ' ',
        ataque:' ',
        altura:' ',
        peso:' ',
        defensa:' ',
        type: []
        })
      history.push('./home')
    }
    function handleDelete(el){
       setInput({
            ...input,
            type: input.type.filter(t => t !== el)
        }) 
    } 

    useEffect(()=> {
        dispatch(getTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <div className="fondo">
            <Link to= '/home'> <button> Volver</button></Link>
            <h1>Crear Pokemon</h1>
            <div className=" formulario">
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div className="name">
                    <label>Nombre: </label>
                    <input type="text" 
                    value={input.name} 
                    name="name" 
                    onChange={(e)=>handleChange(e)}
                    />
                   {/*  {errors.name && (
                        <p className="error">{errors.name}</p>
                        
                    )} */}
                
                    <label>Imagen</label>
                    <input type="text" name="img" onChange={handleChange}/>
                    <br />

                    <div className="vida">
                        <label>Vida </label>
                        <input type="text" value={input.hp} name="hp" onChange={handleChange}/>
               
                        <label>Ataque </label>
                        <input type="text" value={input.ataque} name="ataque" onChange={handleChange}/>
                    
                    <label>Altura </label>
                    <input type="text" value={input.altura} name="altura" onChange={handleChange}/>
               
                    <label>Peso </label>
                    <input type="text" value={input.peso} name="peso" onChange={handleChange}/>
                
                    <label>Defensa </label>
                    <input type="text" value={input.defensa} name="defensa" onChange={handleChange}/>
                    </div>
                <select onChange={(e)=>handleSelect(e)}>
                    {
                        allTypes?.map((t) =>(
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))
                    }
                   
                </select>
                {/* <ul><li>{input.type.map(el=>el + " ,")}</li></ul>   */}
                <button type="submit">Crear Pokemon </button>
                </div>
            </form>
            </div>
            {input.type?.map(el =>
                <div>
                    <p>{el}</p> 
                    <button className="botonX" name={el} onClick={()=> handleDelete(el)}>x</button>
                </div>
                )} 
        </div>
    )
}   