import React from "react";
import { Link } from "react-router-dom";
import drinkImage from './drink.gif'
import './style.css'

const Drink = () =>{
    return(
        <div>
            <h3> So MUSH SUGARRR! NO NO NO!!!</h3>
            <div className="wrapper">
                <img src={drinkImage} width="400px" height="500px" />
                <Link exact to='/' >Mainpage</Link>
            </div>
        </div>
    )
}

export default Drink;