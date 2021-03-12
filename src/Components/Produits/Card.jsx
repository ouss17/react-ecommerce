import React from 'react'

import './Card.scss';

const Card = ({ produit }) => {
    return (
        <div className="card">
            <div className="img">
                <img src={produit.img} alt={produit.titre} />
            </div>
            <h2 className="title-article">{produit.titre}</h2>
            <div className="price-div">
                <span className="price">{produit.prix} €</span>
                <div className="basket">
                    <span ><i className="fas fa-cart-plus"></i></span>
                </div>
            </div>
            <p className="short-desc">{produit.descriptionCourte}</p>

        </div>
    )
}

export default Card
