import LeftContent from "./LeftContent.jsx"; 

import RigthContent from "./Rightcontent.jsx"; 

import Succes from "./Sucess.jsx"; 

function Container() { 
  return (
    <div className="mt-20"> 
      <h1 className="text-center text-white text-3xl hidden lg:block">MON COMPTE</h1> 
      <div className="mt-28 flex"> 
        <div className="lg:w-[40%] flex justify-center w-full">
          <LeftContent /> {/* Rend le composant LeftContent */}
        </div>
        <div className="w-[0.5px] bg-white h-[600px] ml-0 mr-12 hidden lg:block"></div> {/* Crée un élément <div> pour le séparateur vertical */}
        <div className="hidden lg:block w-full-xl"> {/* Crée un conteneur pour les écrans larges (lg) */}
          <RigthContent /> {/* Rend le composant RightContent */}
        </div>
      </div>
      <Succes/> {/* Rend le composant Succes */}
    </div>
  );
}

export default Container;