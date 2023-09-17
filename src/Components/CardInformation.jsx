import React from 'react';
import '../CardInformation.css';

function CardInformation(props) {
    return(
        <>
            <div className='containerCardInformation'>
                <h4>{props.titre}</h4>
                <p className='texteDate'>{props.date}</p>
                <img src={props.image} alt="#"/>
                <p className='texteActu'>{props.description}</p>
            </div>
        </>
    )
}

export default CardInformation;