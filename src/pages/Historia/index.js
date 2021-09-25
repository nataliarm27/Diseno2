import React, { useState,useEffect } from "react";
import {useHistory,Link} from 'react-router-dom';
import Boton from "../../Components/Button";

function Historia() {
    return(
        <div className="flex bg-black">
        <img
          className="relative flex z-0 h-screen w-screen bg-no-repeat bg-cover"
          src="./assets/Group.png"
          alt=""
        />
          <div className="">
        <img 
        className="absolute flex z-10 left-47 top-17"
        src="/assets/Group 96(1).png" alt="" />
        <img 
        className="absolute flex z-10 h-40 w-80 left-40 top-8"
        src="/assets/Group 145.png" alt="" />
        <h1 className="absolute flex z-10 left-42 top-11 text-white font-body text-base w-1/2">
          Ahora que conoces mi historia
        </h1>
        <img
        className="absolute flex z-10 left-72 top-14 right-47 h-80 w-44"
        src="/assets/Group 81(3).png" alt=""/>
        <Boton className="absolute flex z-10 top-36 right-8 w-56 h-16 justify-center pt-4 font-body text-yellow-600 bg-yellow-400 border-2 border-white rounded-2xl p-2 brightness-125 hover:text-white hover:bg-yellow-600 transition duration-150 ease-in-out" type="submit" titulo="Siguiente" />
        </div>
        </div>
     
        );
}

export default Historia