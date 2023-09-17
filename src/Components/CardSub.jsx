import React, { Component } from 'react';
import '../CardSub.css';

function CardSub() {
    
    return(
        <>
            <div className='containerCardSub'>
                <div className='containerFlexSub'>
                    <h1 className='titreCardSub'>Annuel</h1>
                    <button className='CTASub'>S'abonner</button>
                </div>
                <p id='bold'>15,00€/MOIS</p>
                <p>Entretiens exclusifs avec nos professeurs </p>
                <p>Résolution: 4K</p>
                <p>Partitions Annotés </p>
                <p>Accès illimité aux Masterclass </p>
            </div>
        </>
    )
}
export default CardSub;