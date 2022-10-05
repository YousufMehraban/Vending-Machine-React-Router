import React from "react";
import sardineImage from './sardine.gif'
import { Link } from "react-router-dom";
import './style.css'

const Sardine = () =>{
    return(
        <div>
            <h3> You don't eat the sardines. The sardines, they eat you!!!</h3>
            <div className="wrapper">
                <img src={sardineImage} width="700px" height="500px" />
                <Link exact to='/' >Mainpage</Link>
            </div>

        </div>
    )
}

export default Sardine;