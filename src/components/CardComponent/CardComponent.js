import React from 'react';
import './CardComponent.scss'

function CardComponent({hotel}) {

    return(
        <div className="card">
            <p>{hotel.title}</p>
            <img src={hotel.photo} alt="" />
        </div>
    )
}

export default CardComponent;