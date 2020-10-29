import React from 'react';
import './Myapp.css';

const Imagelist = (props) => {
    return (
        <div className="imagebox">
            <img src={props.path} className="image" alt="Images" />
            <p className="text">{props.name }</p>
        </div> 
            )
}
        


            
export default Imagelist;