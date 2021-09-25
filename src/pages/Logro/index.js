import React, { useState,useEffect } from "react";
import {useHistory,Link} from 'react-router-dom';
import Boton from "../../Components/Button";

function Felicitacion() {
    return(
        <div className="flex bg-black">
        <img
          className="relative flex z-0 h-screen w-screen bg-no-repeat bg-cover"
          src="./assets/Frame(2).png"
          alt=""
        />
          <div className="">
        <img 
        className="absolute flex z-10 right-31 top-2"
        src="/assets/¡eSO ES!.png" alt="" />  
         <img 
        className="absolute flex z-10 right-36 top-8"
        src="/assets/Frame-1(2).png" alt="" /> 
         <img 
        className="absolute flex z-10 right-36 top-17 h-60 w-56"
        src="/assets/perro.png" alt="" />       
        <h1 className="absolute flex z-10 right-2 top-5 text-white text-justify font-body text-base w-1/2">
        Antes de empezar a trabajar en tu futuro debes organizar tu presente.
        </h1>
        <Boton className="absolute flex z-10 top-33 right-36 w-56 h-16 justify-center pt-4 font-body text-yellow-600 bg-yellow-400 border-2 border-white rounded-2xl p-2 brightness-125 hover:text-white hover:bg-yellow-600 transition duration-150 ease-in-out" type="submit" titulo="Siguiente" href="/ordenar"/>
        </div>
        </div>
     
        );
}

export default Felicitacion