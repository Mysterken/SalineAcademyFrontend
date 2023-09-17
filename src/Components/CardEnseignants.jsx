import React, { Component } from 'react';
import '../CardEnseignants.css';



function CardEnseignants(props) {
    
    return(
        <>
            <a className='CTAProfs' href="#">
                <div className='containerCard'>
                    <div className='containerCardEnseignants'>
                        <img src={props.images}/>
                    </div>
                    <div className='containerNameProf'>
                        <h5 className='titreName'>{props.name}</h5>
                    </div>
                </div>
            </a>
        </>
    )
}
export default CardEnseignants;