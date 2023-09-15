import React from "react";
import '../CardMetier.css';


function CardMetier(props) {

    return(
        <>
            <div className="containerCardMetier">
                <div className="containerImageMetier">
                    <img src={props.images} alt={props.descriptionImage}className="imageMetier"></img>
                </div>
                <div className="containerParagrapheMetier">
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}
export default CardMetier;