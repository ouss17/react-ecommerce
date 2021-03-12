import React from 'react'
import Slider from "react-slick";

import Card from '../Produits/Card'

import './LigneProduits.scss'

const LigneProduits = ({produits, categorie, titre, setPanier, panier}) => {
    
    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect:false,
        speed: 200,
        slidesToShow: 5,
        // slidesToScroll: 2,
        swipeToSlide: true,

        responsive: [
            {
                breakpoint:400,
                settings:{
                    slidesToShow: 2,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint:700,
                settings:{
                    slidesToShow: 3,
                    // slidesToScroll: 2,
                }
            },

            {
                breakpoint:992,
                settings:{
                    slidesToShow: 4,
                    // slidesToScroll: 3,
                }
            },
        ]
    };

    return (
        <>
        
        <h1 className="titreLigneProduit">{titre}</h1>
        <div className="ligneProduits">
            <div className="ligneProduitsWrapper">
                <Slider {...settings}>

                    {
                        produits.map( elem => {
                            if(categorie === elem.categorie){
                                return <div
                                    key={elem.id}
                                    className="produitWrapper"
                                >
                                    <Card produit={elem} setPanier={setPanier} panier={panier} />
                                </div>
                            }else{
                                return(
                                    ''
                                )
                            }
                        })
                    }
                   
                    
                   

                </Slider>
            </div>
        </div>
        </>
    )
}

export default LigneProduits
