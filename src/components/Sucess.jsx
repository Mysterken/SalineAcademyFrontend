// Définition d'une liste d'objets représentant des images et leurs titres
const imgList = [
    {
      link: "/assets/Card-accomplishement.png",
      title: "Badge guitare",
    },
    {
      link: "/assets/Group 324.png",
      title: "Suivis régulier expert",
    },
    {
      link: "/assets/Card-accomplishement (1).png",
      title: "Badge expert guitare",
    },
    {
      link: "/assets/Card-accomplishement.png",
      title: "Le gratteur fou",
    },
    {
      link: "/assets/Group 324.png",
      title: "Suivis régulier",
    },
    {
      link: "/assets/Card-accomplishement (1).png",
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