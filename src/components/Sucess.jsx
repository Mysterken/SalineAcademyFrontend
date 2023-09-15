import Cardaccomplishement from "../assets/Card-accomplishement.png"
import Group324 from "../assets/Group 324.png"
import Card2 from "../assets/Card-accomplishement (1).png"

// Définition d'une liste d'objets représentant des images et leurs titres
const imgList = [
    {
      link: Cardaccomplishement,
      title: "Badge guitare",
    },
    {
      link: Group324,
      title: "Suivis régulier expert",
    },
    {
      link: Card2,
      title: "Badge expert guitare",
    },
    {
      link: Cardaccomplishement,
      title: "Le gratteur fou",
    },
    {
      link: Group324,
      title: "Suivis régulier",
    },
    {
      link: Card2,
      title: "Badge expert guitare",
    },
  ];
  
  // Définition d'une fonction React appelée "Succes"
  function Succes() {
    {/** composant qui affiche en mode mobile */}
    return (
      // Début du rendu du composant Succes
      <div className="lg:hidden mt-8">
        <h2 className="text-white font-semibold text-xs ml-9 md:text-center md:text-base">Vos succès</h2>
        <div className="md:flex md:justify-center">
          <div className="p-4 ml-3 grid grid-cols-3 gap-7">
            {imgList.map((item, i) => (
              // Mapping à travers la liste d'objets pour générer des éléments React
              <div key={i} className="w-20">
                {/* Affichage de l'image avec l'URL provenant de l'objet actuel */}
                <img src={item.link} alt="" />
                <div className="text-center mt-[-1rem]">
                  {/* Affichage du titre de l'image provenant de l'objet actuel */}
                  <span className="text-white text-xs">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> // Fin du rendu du composant Succes
    );
  }
  
  // Exportation du composant Succes pour une utilisation ultérieure
  export default Succes;