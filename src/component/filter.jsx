import React, { useState } from 'react';
import "../decouvrir.css"

function TextWithAnimation() {
    // Créez un tableau de données pour stocker l'état de chaque div
    // const initialDivState = [
    //   { id: 1, isHovered: false },
    //   { id: 2, isHovered: false },
    //   { id: 3, isHovered: false },
    // ];
  
    // const [divs, setDivs] = useState(initialDivState);
  
    // // Fonction pour gérer le survol de chaque div
    // const handleMouseEnter = (id) => {
    //   const updatedDivs = divs.map((div) =>
    //     div.id === id ? { ...div, isHovered: true } : div
    //   );
    //   setDivs(updatedDivs);
    // };
  
    // // Fonction pour gérer la sortie du survol de chaque div
    // const handleMouseLeave = (id) => {
    //   const updatedDivs = divs.map((div) =>
    //     div.id === id ? { ...div, isHovered: false } : div
    //   );
    //   setDivs(updatedDivs);
    // };
  
    // const divComponents = divs.map((div) => (
    //     <div
    //       key={div.id}
    //       className={`text-container ${div.isHovered ? 'hovered' : ''}`}
    //       onMouseEnter={() => handleMouseEnter(div.id)}
    //       onMouseLeave={() => handleMouseLeave(div.id)}
    //     >
    //       Texte avec animation au survol
    //     </div>
    //   ));
  return (
            <aside id='searchFilter'>

                <h2>Catégories</h2>
                <ul>
                    <li className='glowHover'>Tous</li>
                    <li className='glowHover'>Récent</li>
                    <li className='glowHover'>Populaires</li>
                    <li id='spaceList'className='glowHover'>Vue récemment</li>
                    <li className='glowHover'>Violon</li>
                    <li className='glowHover'>Piano</li>
                    <li className='glowHover'>Voix</li>
                    <li className='glowHover'>Flûte</li>
                    <li className='glowHover'>Musique de Chambre</li>
                    <li className='glowHover'>Trombone</li>
                    <li className='glowHover'>Violoncelle</li>
                    <li className='glowHover'>Clarinette</li>
                    <li className='glowHover'>Hautbois</li>
                </ul>
            </aside>

    
  );
}

export default TextWithAnimation;
