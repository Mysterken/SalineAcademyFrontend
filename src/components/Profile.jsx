import  { useState} from "react";
import ImageInput from "./ImageInput";
import LineChartComponent from "./LineChartComponent";

function Profil(){

    const [Name, setName] = useState("John DOE"); //Nom de l'utilisateur qui doit être importé du base de données
    const [DateInscription, setDateInscription] = useState("01/01/2000"); // Date d'inscription de l'utilisateur
    const [Badge, setBadge] = useState("OR"); //Badge
    const [Niveau, setNiveau] = useState(50); //Niveau de l'utilisateur

    return(
        <div className= "bg-white rounded-xl p-4 w-[320px] h-[220px] relative"> {/**Div composant le cadre de profil de l'utilisateur */}
            <div className="absolute ml-32 mt-10">
                <img src="/assets/logo.png" alt="" />
            </div>
            <div className="flex justify-between"> {/**Div contenant la photo de profil, Nom, date d'isncription, Badge et Niveau*/}
                <ImageInput />
                <div className="flex flex-wrap w-24 ml-[-3rem]">{/**Div contenant le Nom, Date d'inscription, Badge */}
                    <span className="text-base font-[600] ">{Name}</span>     {/**Nom de l'utilisateur qui doit être importé de la base de données */}
            
                    <span className="text-[7px]">Inscrit depuis le {DateInscription}</span>    {/**Date d'inscription de l'utilisateur */}
                
                    <span className="text-[7px] font-[600] inline-flex">Badge: <div className="bg-[#ffd600] text-white rounded-full w-3 h-3 flex justify-center items-center ml-1 mt-0">{Badge}</div></span>   {/**Badge */}
                </div>
                <div className="Niveau">
                    <span className="text-[7px]">Niveau:   <span id="niveau" className="text-base font-[600]">{Niveau}</span> </span>   {/**Niveau général de l'utilisateur */}
                </div>
            </div>
            <div className="mt-7 mb-2">
                <span id="historique" className="underline text-[8px]">Ton historique de suivi :</span> {/**Entete pour l'historique de suivi */}
            </div>
            <div className=" flex justify-between">
                <div className="w-[60%]">
                    <LineChartComponent/>
                </div>
                 {/**Simplement la balise de LineChart qui est le type de graphe utilisé et chartData == data mais LineChart requiert chartData */}
                
                <div id="plus" className="cursor w-[25%] text-[7px] underline mt-49">  {/**Bouton qui doit rediriger vers les autres statistiques*/}
                    <span id="Plus">Plus de statistiques    </span>
                    <span>→</span>                
                </div>
            </div>
        </div>
    )
}

export default Profil