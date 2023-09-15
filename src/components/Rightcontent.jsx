import { useState } from "react";

function RigthContent() {
  const descriptions = [
    {
      linkImg: "/assets/Card-accomplishement.png",
      title: "Guitare débutant",
      date: "(Obtention le 02/07/2022)",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      linkImg: "/assets/Group 324.png",
      title: "20 Cours suivis",
      date: "(Obtention le 02/07/2022)",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      linkImg: "/assets/Card-accomplishement (1).png",
      title: "Guitare Intermédiaire",
      date: "(Obtention le 02/07/2022)",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      linkImg: "/assets/Card-accomplishement (1).png",
      title: "Guitare Intermédiaire",
      date: "(Obtention le 02/07/2022)",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      linkImg: "/assets/Card-accomplishement (1).png",
      title: "Guitare Intermédiaire",
      date: "(Obtention le 02/07/2022)",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      linkImg: "/assets/Card-accomplishement (1).png",
      title: "Guitare Intermédiaire",
      date: "(Obtention le 02/07/2022)",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed vitae nulla lacinia, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]; {/**données des descriptions */}

  const [showMoreData, setShowMoreData] = useState(4);
  const [blur, setBlur] = useState(true);

  const showMore = () => { {/**Fonction qui affiche/masque la suite de la liste */}
    setBlur(!blur);
    if (showMoreData === 4) {
      setShowMoreData(descriptions.length);
    } else if (showMoreData > 4) {
      setShowMoreData(4);
    }
  };

  return (
    <div>
      <div className="">
        {descriptions.slice(0, showMoreData).map((item, i) => (
          <div
            key={i}
            className={`flex justify-between mb-14 ${
              blur && i === 3 ? "blur-sm" : ""
            }`}
          >
            <img src={item.linkImg} alt="" />
            <div className="ml-10 mr-10">
              <h2 className="text-white text-xl font-normal leading-[24.2px]">
                {item.title}
                <span className="text-[10px] ml-4">{item.date}</span>
              </h2>
              <p className="text-white text-xs mt-4">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-[-4rem] mb-10">
        <div className="cursor rounded-full bg-[#252529] flex justify-center items-center w-14 h-14 text-white" onClick={showMore}>
          {showMoreData > 4 ? <img className="w-8 " src="/assets/haut.svg" alt="" /> : <img className="w-8" src="/assets/bas.svg" alt="" />}
        </div>
      </div>
    </div>
  );
}

export default RigthContent;
