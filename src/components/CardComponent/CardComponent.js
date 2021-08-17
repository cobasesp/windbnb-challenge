import React from 'react';
import './CardComponent.scss'

function CardComponent({hotel}) {

    return(
        <div className="card">
            <img src={hotel.photo} alt="" />
            <div className="footer">
                {hotel.superHost && <span className="super-host">SUPER HOST</span>}
                <span className="type">{hotel.type}, {hotel.beds} beds</span>
                <span class="material-icons">star</span> {hotel.rating}
            </div>
            <p className="title">{hotel.title}</p>
        </div>
    )
}

export default CardComponent;