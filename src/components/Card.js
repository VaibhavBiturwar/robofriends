import React from 'react';
import './Card.css';

const Card = (props) =>{
    return(
        // <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
        <div className="tc cardbg dib br3 pa3 ma3 grow bw2 shadow-5">
            <img alt="Robot" src={`https://robohash.org/${props.id}?200x200?set=set4`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );

}

export default Card;