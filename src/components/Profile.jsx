import React, { useState, useEffect, createContext, useContext } from "react";

import ImageInput from "./ImageInput";
import LineChartComponent from "./LineChartComponent";

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  // État pour stocker les données du profil
  const [profileData, setProfileData] = useState({
    Name: "John DOE",
    DateInscription: "01/01/2000",
    Badge: "OR",
    Niveau: 50,
  });

  // Fonction pour effectuer la requête API
  const fetchProfileDataFromAPI = async () => {
    try {
      // Effectue une requête à une API fictive (veuillez remplacer par votre propre API)
      const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}");
      if (!response.ok) {
        // Si la réponse n'est pas OK, génère une erreur
        throw new Error(`Réponse de l'API non valide. Statut : ${response.status}`);
      }
      // Transforme la réponse en JSON
      const data = await response.json();
      // Affiche les données récupérées dans la console
      console.log("Données récupérées avec succès :", data);
      // Met à jour l'état avec les données récupérées
      setProfileData(data);
      return data;
    } catch (error) {
      // En cas d'erreur, affiche l'erreur dans la console
      console.error("Erreur lors de la récupération des données du profil :", error);
      throw error;
    }
  };

  useEffect(() => {
    // Effectuer une requête à votre API réelle ici
    fetchProfileDataFromAPI()
      .then((data) => {
        // Met à jour l'état avec les données récupérées
        setProfileData(data);
      })
      .catch((error) => {
        // En cas d'erreur, affiche l'erreur dans la console
        console.error("Erreur lors de la récupération des données du profil :", error);
      });
  }, []);

  return (
    // Fournit les données du profil via le contexte
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  // Utilise le contexte pour accéder aux données du profil
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile doit être utilisé à l'intérieur de ProfileProvider");
  }
  return context;
}

function Profil() {
  // Utilise le hook useProfile pour obtenir les données du profil
  const profileData = useProfile();

  return (
    <div className="bg-white rounded-xl p-4 w-[320px] h-[220px] relative">
      <div className="absolute ml-32 mt-10">
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="flex justify-between">
        <ImageInput />
        <div className="flex flex-wrap w-24 ml-[-3rem]">
          <span className="text-base font-[600] ">{profileData.Name}</span>
          <span className="text-[7px]">
            Inscrit depuis le {profileData.DateInscription}
          </span>
          <span className="text-[7px] font-[600] inline-flex">
            Badge:{" "}
            <div className="bg-[#ffd600] text-white rounded-full w-3 h-3 flex justify-center items-center ml-1 mt-0">
              {profileData.Badge}
            </div>
          </span>
        </div>
        <div className="Niveau">
          <span className="text-[7px]">
            Niveau: <span id="niveau" className="text-base font-[600]">{profileData.Niveau}</span>
          </span>
        </div>
      </div>
      <div className="mt-7 mb-2">
        <span id="historique" className="underline text-[8px]">
          Ton historique de suivi :
        </span>
      </div>
      <div className="flex justify-between">
        <div className="w-[60%]">
          <LineChartComponent />
        </div>
        <div id="plus" className="cursor w-[25%] text-[7px] underline mt-49">
          <span id="Plus">Plus de statistiques </span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    // Enveloppe l'application avec le composant ProfileProvider pour fournir les données du profil
    <ProfileProvider>
      <Profil />
    </ProfileProvider>
  );
}