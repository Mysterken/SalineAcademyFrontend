import React, { useState, useEffect } from "react";
import HexagonalProgressbar from "react-hexagonal-progressbar";
import photodone from "../assets/done.png";

export const Level = ({ badgeImg, stepDone = 0, badge, defaultValue = 0 }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    let newValue = 10 * stepDone; // Par défaut, la valeur est de 10 fois "stepDone"

    if (badge === 3 && stepDone % 2 === 0) {
      // Cas 3 : Si "badge" vaut 3 et "stepDone" est pair
      newValue = (10 * stepDone) / 2;
    } else if (badge === 4 && stepDone % 3 === 0) {
      // Cas 4 : Si "badge" vaut 4 et "stepDone" est divisible par 3
      newValue = (10 * stepDone) / 3;
    } else if (badge === 5 && stepDone % 4 === 0) {
      // Cas 5 : Si "badge" vaut 5 et "stepDone" est divisible par 4
      newValue = (10 * stepDone) / 4;
    } else if (badge === 6 && stepDone % 5 === 0) {
      // Cas 6 : Si "badge" vaut 6 et "stepDone" est divisible par 5
      newValue = (10 * stepDone) / 5;
    }

    setValue(newValue); // Met à jour la valeur
  }, [stepDone, badge, defaultValue]);

  return (
    <div className="w-[100px] h-[100px]">
      <HexagonalProgressbar
        value={value}
        lineCap="round"
        color="#F8C647"
        level={100}
        location="rightTop|rightBottom|leftBottom|leftTop"
        badgeImg={value === 100 ? photodone : badgeImg}
      />
    </div>
  );
};