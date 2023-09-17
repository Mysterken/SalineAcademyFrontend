import React from 'react';

function BoutonsReponse({ options, gererClicReponse }) {
  return (
    <div>
      {/* génération des boutons dynamic*/}
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => gererClicReponse(option)}

        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default BoutonsReponse;
