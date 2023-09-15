// Importation du composant Profil depuis le chemin spécifié
import Profil from "./Profile.jsx";

// Importation du composant Level depuis le chemin spécifié
import { Level } from "./Level.jsx";

import Photoguitare from "../assets/guitare.png"

// Définition de la fonction LeftContent
function LeftContent() {
  return (
    <div>
      {/* Section de profil */}
      <div className="profil-center">
        {/* Utilisation du composant Profil */}
        <Profil /> {/* Composant profil */}
      </div>

      {/* Section des badges en cours, visible uniquement sur les écrans larges */}
      <div className="mt-10 hidden lg:block">
        {/* Libellé des badges en cours */}
        <span className="text-white">Badges en cours:</span>
        <div className="flex justify-center w-full">
          <div className="relative w-80 mt-7 flex flex-wrap justify-between">
            {/* Création de plusieurs instances du composant Level pour afficher différents badges */}
            <Level badge={1} badgeImg={Photoguitare} stepDone={10} />
            <Level badge={2} badgeImg={Photoguitare} stepDone={10} />
            <Level badge={3} badgeImg={Photoguitare} stepDone={10} />
            <Level badge={4} badgeImg={Photoguitare} stepDone={10} />
            <Level badge={5} badgeImg={Photoguitare} stepDone={10} />
            <Level badge={6} badgeImg={Photoguitare} stepDone={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportation de la fonction LeftContent en tant que composant par défaut
export default LeftContent;