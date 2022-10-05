import React from "react";
import { Link } from "react-router-dom";
import VendingMachineImage from './vending.png'
import './style.css'


const VendingMachine = () =>{
    return(
        <>
        <div className="vending-wrapper">
                <h1>I'm a Vending Machine</h1>
                <h3>tell me what do you want!!!!!!</h3>
            <div className="wrapper">
                <div className="image-wrapper">
                    <img  src={VendingMachineImage} width="500px" height="500px" />
                    {/* <button> <Link exact to='/eat' >Chips</Link> </button>
                    <button> <Link exact to='/drink' >Drink</Link> </button>
                <button> <Link exact to='/sardine' >Sardine</Link> </button> */}
                </div>
                <div className="link-wrapper"> 
                        <Link exact to='/eat' >Chips</Link> 
                        <Link exact to='/drink' >Drink</Link> 
                        <Link exact to='/sardine' >Sardine</Link> 
                </div>
            </div>
        </div>
        </>
    )
}

export default VendingMachine;