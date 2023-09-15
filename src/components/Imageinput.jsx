// Importer la fonction useState depuis la bibliothèque React
import { useState } from "react";
import Photoprofil from "../assets/photo.png"

// Définir une composante fonctionnelle ImageInput
const ImageInput = () => {
  // Définir deux états avec useState :
  // - selectedImage gère l'image actuellement sélectionnée
  // - previewImage gère la prévisualisation de l'image sélectionnée
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Définir une fonction handleImageChange qui sera appelée lorsque l'utilisateur sélectionne une image
  const handleImageChange = (event) => {
    // Récupérer le fichier image sélectionné depuis l'événement de changement
    const imageFile = event.target.files[0];
    
    // Mettre à jour l'état selectedImage avec le fichier image sélectionné
    setSelectedImage(imageFile);

    // Créer une instance de FileReader pour lire le contenu de l'image
    const reader = new FileReader(); 

    // Définir une fonction à exécuter lorsque la lecture du fichier est terminée
    reader.onloadend = () => {
      // Mettre à jour l'état previewImage avec le résultat de la lecture (l'image prévisualisée)
      setPreviewImage(reader.result);
    };
    
    // Vérifier si un fichier image a été sélectionné avant de lancer la lecture
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  // Définir une fonction handleImageUpload qui sera appelée lorsque l'utilisateur clique sur le bouton de téléchargement d'image
  const handleImageUpload = () => {
    // Vérifier si une image a été sélectionnée (selectedImage) et afficher un message dans la console en conséquence
    if (selectedImage) {
      console.log("Selected image:", selectedImage);
    } else {
      console.log("No image selected.");
    }
  };

  // Rendu de la composante
  return (
    <div>
      <div className="bg-[#161D3D] w-[73px] h-[73px] rounded-full flex justify-center items-center">
        {/* Conditionnellement afficher l'image prévisualisée si elle existe */}
        {previewImage && (
          <img
            src={previewImage}
            id="photo"
            className="w-[73px] h-[73px] rounded-full"
          />
        )}

        {/* Div contenant le bouton pour sélectionner une image */}
        <div
          onClick={handleImageUpload}
          className="absolute bg-[#A64646] w-[18px] h-[18px] ml-12 mt-12 rounded-full flex justify-center items-center"
        >
          {/* Contenu du bouton (une icône d'appareil photo) */}
          <div className="absolute">
            <div className="flex flex-col items-center">
              <img src={Photoprofil} alt="" /> 
            </div>
          </div>

          {/* Input de type fichier masqué graphiquement pour sélectionner une image */}
          <input
            type="file"
            className="h-full w-full opacity-0"
            onChange={handleImageChange}
            name=""
          />
        </div>
      </div>
    </div>
  );
};

// Exporter la composante ImageInput pour pouvoir l'utiliser ailleurs
export default ImageInput;