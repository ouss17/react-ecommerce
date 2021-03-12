import React from 'react'

import LigneProduits from '../Components/LigneProduits/LigneProduits'

import './Index.scss'

const Index = ({produits, setPanier, panier}) => {
    return (
        <section className="presentationProduit">

            <LigneProduits produits={produits} titre="Sacs à main" categorie="sacamain" setPanier={setPanier} panier={panier} />

            <div style={{marginTop:'40px'}}>
                <LigneProduits produits={produits} titre="Bagues" categorie="bague" setPanier={setPanier} panier={panier} />
            </div>
            
            <div style={{marginTop:'40px'}}>
                <LigneProduits produits={produits} titre="Chaussures" categorie="chaussures" setPanier={setPanier} panier={panier} />
            </div>
        
        </section>
    )
}

export default Index
