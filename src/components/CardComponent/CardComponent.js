import React from 'react';
import './CardComponent.scss'

function CardComponent({hotel}) {

    return(
        <div className="card">
            <div className="photo" style={{backgroundImage: `url(${hotel.photo})`}}></div>
            <div className="footer">
                {hotel.superHost && <span className="super-host">SUPER HOST</span>}
                <span className="type">{hotel.type}, {hotel.beds} beds</span>
                <div className="rating">
                    <span class="material-icons">star</span> {hotel.rating}
                </div>
            </div>
            <p className="title">{hotel.title}</p>
        </div>
    )
}

export default CardComponent;