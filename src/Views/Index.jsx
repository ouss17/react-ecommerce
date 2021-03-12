import React from 'react'

import LigneProduits from '../Components/LigneProduits/LigneProduits';


import './Index.scss';

const Index = ({ produits }) => {
    return (
        <section className="presentationProduit">

            <LigneProduits produits={produits} />

        </section>
    )
}

export default Index
