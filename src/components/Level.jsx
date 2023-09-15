import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HexagonalProgressbar from "react-hexagonal-progressbar";

// Définition du composant "Level" avec des propriétés (props) badgeImg, stepDone, badge, et defaultValue
export const Level = ({ badgeImg, stepDone = 0, badge, defaultValue = 0 }) => {
  // Déclaration d'une variable d'état "value" pour stocker la valeur de la jauge
  // Elle est initialisée avec "defaultValue" ou 0 si "defaultValue" n'est pas fourni
  const [value, setValue] = useState(defaultValue);

  // Utilisation de l'effet secondaire "useEffect" pour réagir aux changements de "stepDone"
  useEffect(() => {
    // Le switch est utilisé pour gérer différents cas en fonction de la valeur de "badge"
    switch (badge) {
      case 1:
        // Si "badge" vaut 1, la valeur de la jauge est définie comme 10 fois "stepDone"
        setValue(10 * stepDone);
        break;
      case 2:
        // Si "badge" vaut 2, la valeur de la jauge est également définie comme 10 fois "stepDone"
        setValue(10 * stepDone);
        break;
      case 3:
        // Si "badge" vaut 3, la valeur de la jauge dépend de "stepDone"
        // Si "stepDone" est un nombre pair, la valeur est la moitié de 10 fois "stepDone"
        if (stepDone % 2 === 0) {
          setValue((10 * stepDone) / 2);
        }
        break;
      case 4:
        // Si "badge" vaut 4, la valeur de la jauge dépend également de "stepDone"
        // Si "stepDone" est divisible par 3, la valeur est un tiers de 10 fois "stepDone"
        if (stepDone % 3 === 0) {
          setValue((10 * stepDone) / 3);
        }
        break;
      case 5:
        // Si "badge" vaut 5, la valeur de la jauge dépend de "stepDone"
        // Si "stepDone" est divisible par 4, la valeur est un quart de 10 fois "stepDone"
        if (stepDone % 4 === 0) {
          setValue((10 * stepDone) / 4);
        }
        break;
      case 6:
        // Si "badge" vaut 6, la valeur de la jauge dépend de "stepDone"
        // Si "stepDone" est divisible par 5, la valeur est un cinquième de 10 fois "stepDone"
        if (stepDone % 5 === 0) {
          setValue((10 * stepDone) / 5);
        }
        break;
      default:
        // Par défaut, aucune action n'est prise
        break;
    }
  }, [stepDone]); // Cette fonction useEffect sera appelée chaque fois que "stepDone" change

  // Rendu du composant
  return (
    <div className="w-[100px] h-[100px]">
      {/* Composant HexagonalProgressbar avec différentes propriétés */}
      <HexagonalProgressbar
        value={value} // La valeur de la jauge dépend de la logique précédente
        lineCap="line|round" // Le style de fin de la ligne de progression
        color="#F8C647" // La couleur de la ligne de progression
        level={100} // Niveau maximal de la jauge
        location="rightTop|rightBottom|leftBottom|leftTop" // Position de l'image du badge
        badgeImg={value === 100 ? "/assets/done.png" : badgeImg} // URL de l'image du badge
      />
    </div>
  );
};