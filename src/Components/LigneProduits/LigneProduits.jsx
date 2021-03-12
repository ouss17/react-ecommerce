import React from "react";

import Slider from "react-slick";

import Card from '../Produits/Card'

import './LigneProduits.scss'

const LigneProduits = ({ produits }) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: 3.1,
        draggable: true,
        autoplay: true,
        speed: 500,
        dots: false,
        arrows: false
    };

    return (
        <Slider {...settings}>
            {produits.map(produit =>
                <Card key={produit.id} produit={produit} />
            )}
        </Slider>
    )
}

export default LigneProduits
