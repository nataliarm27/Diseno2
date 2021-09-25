import React, { useState,useEffect } from "react";
import {useHistory,Link} from 'react-router-dom';
import Boton from "../../Components/Button";

function Ordenar() {
    return(
        <div className="flex bg-black">
        <img
          className="relative flex z-0 h-screen w-screen bg-no-repeat bg-cover"
          src="./assets/Asset 24 1.png"
          alt=""
        />
          <div className="">
        <img 
        className="absolute flex z-10 right-8 top-2"
        src="/assets/Group 96(1).png" alt="" />
        <img 
        className="absolute flex z-10 h-32 w-80 right-19 top-2"
        src="/assets/Group 64.png" alt="" />
        <h1 className="absolute flex z-10 right-2 top-5 text-white text-justify font-body text-base w-1/2">
        Antes de empezar a trabajar en tu futuro debes organizar tu presente.
        </h1>
        <img
        className="absolute flex z-10 left-72 top-17 left-2 h-80 w-44"
        src="/assets/Group 81(3).png" alt=""/>
        <Boton className="absolute flex z-10 top-36 right-8 w-56 h-16 justify-center pt-4 font-body text-yellow-600 bg-yellow-400 border-2 border-white rounded-2xl p-2 brightness-125 hover:text-white hover:bg-yellow-600 transition duration-150 ease-in-out" type="submit" titulo="Empezar" href="/ordenar"/>
        </div>
        </div>
     
        );
}

export default Ordenar