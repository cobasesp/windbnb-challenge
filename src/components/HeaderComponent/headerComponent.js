import React from 'react';
import './headerComponent.scss';
import {useEffect} from 'react';

function HeaderComponent() {

    useEffect(() => {
        document.querySelector('.search').addEventListener("click", (e) => {
            let el = document.querySelector('.search');
            if(el.classList.contains('open')){
                if(e.target.classList.contains('search')){
                    el.classList.remove('open');
                }
            }else{
                el.classList.add('open');
            }
        })
    }, []);
    

    return(
        <div id="header">
            <div className="content">
                <div className="header-content">
                    <h2 className="title">windbnb</h2>

                    <div id="search" className="search">
                        <div className="drawer">
                            <div className="search-container">
                                <div className="location">
                                    <span className="title">Location</span>
                                    <span className="name">Helsinki, Finland</span>
                                </div>
                                <div className="guests no-info">
                                    <span className="title">Guests</span>
                                    <span className="name">Add guests</span>
                                </div>
                                <div className="search-btn primary-color">
                                    <span class="material-icons">search</span>
                                    <span className="title">Search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderComponent;