import React from "react"
import './About.css';

export default function(props) {
    return (
        <div className="col-lg-6 mt-3 value">
            <div>
                <p className="valuenum">{props.item.number}</p>
            </div>
            <div className="valuetext">
            <h4 className="pt-2">{props.item.title}</h4>
            <p className="valuesubtext">{props.item.subtitle}</p>
            </div>   
        </div>
        
    ) 
}