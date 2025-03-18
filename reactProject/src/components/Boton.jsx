import React from "react";
import {useState} from "react";
const Boton=()=>{
    const [nombre, setNombre] = useState("");
    const [otraCosa, setOtraCosa] = useState("");
    
    return(
        <div>
            <div style={{display:"flex", gap:"20px", border:"1px solid gray" , backgroundColor:"royalblue",color:"white", flexDirection:"column"}}>
            <p>Escriba y toque el boton cuando lo escriba.</p>
            <input 
            onChange={(e)=>setNombre(e.target.value)} 
            placeholder= "Escriba el nombre..." 
            type = "text"
            />
            <button onClick={()=>setOtraCosa(nombre)}>Enviar</button>
            </div>
            <div>
            <p>Nombre: {otraCosa}</p>

            


            </div>
        </div>
    )
}

export default Boton;