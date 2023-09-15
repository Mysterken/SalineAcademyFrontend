import LeftContent from "./LeftContent"; // Importe le composant LeftContent depuis un fichier local.

import RigthContent from "./RigthContent"; // Importe le composant RightContent depuis un fichier local.

import Succes from "./Succes"; // Importe le composant Succes depuis un fichier local.

function Container() { // Définit une fonction composant React appelée Container.
  return (
    <div className="mt-20"> {/* Crée un élément <div> avec une classe CSS mt-20 (marges en haut) */}
      <h1 className="text-center text-white text-3xl hidden lg:block">MON COMPTE</h1> {/* Affiche un titre h1 centré avec une classe CSS qui le masque sur les écrans de taille < lg */}
      <div className="mt-28 flex"> {/* Crée un élément <div> avec des marges en haut et qui utilise la flexbox */}
        <div className="lg:w-[40%] flex justify-center w-full"> {/* Crée un conteneur avec une largeur spécifique pour les écrans larges (lg) */}
          <LeftContent /> {/* Rend le composant LeftContent */}
          {/**composant des contenus du gauche */}
        </div>
        <div className="w-[0.5px] bg-white h-[600px] ml-0 mr-12 hidden lg:block"></div> {/* Crée un élément <div> pour le séparateur vertical */}
        <div className="hidden lg:block w-full-xl"> {/* Crée un conteneur pour les écrans larges (lg) */}
          <RigthContent /> {/* Rend le composant RightContent */}
          {/**composant des contenus da la droite */}
        </div>
      </div>
      <Succes/> {/* Rend le composant Succes */}
    </div>
  );
}

export default Container; // Exporte le composant Container pour être utilisé ailleurs dans l'application.