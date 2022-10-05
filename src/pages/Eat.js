import React from "react";
import eatImage from './eat.gif'
import { Link } from "react-router-dom";
import './style.css'

const Eat = () =>{
    return(
        <div>
            <h3> Yummy yummy in my tummy!!!</h3>
            <div className="wrapper">
                <img src={eatImage} width="400px" height="500px" />
                <Link exact to='/' >Mainpage</Link>
            </div>
        </div>
    )
}

export default Eat;

