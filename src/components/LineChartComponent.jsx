import {
    LineChart,         // Importe le composant LineChart de Recharts pour créer un graphique en ligne.
    Line,              // Importe le composant Line pour définir la ligne du graphique.
    CartesianGrid,     // Importe le composant CartesianGrid pour ajouter une grille au graphique.
    XAxis,             // Importe le composant XAxis pour spécifier l'axe X du graphique.
    YAxis,             // Importe le composant YAxis pour spécifier l'axe Y du graphique.
    Tooltip,           // Importe le composant Tooltip pour afficher des informations au survol du graphique.
  } from "recharts";
  
  
  function LineChartComponent() {  // Définit une fonction composant React appelée LineChartComponent.
  
    const data = [  // Définit un tableau de données fictives pour le graphique.
      { name: "2000", uv: 0 },
      { name: "2002", uv: 200},
      { name: "2004", uv: 300},
      { name: "2006", uv: 400},
      { name: "2008", uv: 500},
      { name: "2010", uv: 500},
      { name: "2012", uv: 500},
      { name: "2014", uv: 200},
      { name: "2016", uv: 400},
      { name: "2018", uv: 300},
      { name: "2020", uv: 400},
      { name: "2022", uv: 500},
    ]; // Définit des données factices pour le graphique. Chaque objet a un nom (année) et une valeur uv.
  
    const CustomTooltip = ({ active, payload, label }) => {  // Définit une fonction CustomTooltip pour personnaliser l'info-bulle.
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip" style={{backgroundColor:"white", paddingLeft:"2px",paddingRight:"2px",fontSize:"10px"}}>
            <h3 style={{}}>Progression</h3>
            <h4 className="label">{`${label} : `}<span style={{fontSize:"15px", color:"#161D3D"}}>{`${payload[0].value}`}</span></h4>
            {/* Personnalise le contenu de l'info-bulle ici */}
          </div>
        );
      }
      return null;
    }; // Définit une fonction pour personnaliser le contenu de l'info-bulle.
  
    return (
      <LineChart
        width={300}  // Définit la largeur du graphique.
        height={100} // Définit la hauteur du graphique.
        data={data}  // Utilise les données définies précédemment pour le graphique.
        margin={{ top: 5, right: 60, bottom: 5, left: 0 }} // Définit les marges autour du graphique.
        padding={0} // Définit le padding (marges internes) du graphique.
        style={{marginLeft: "-30px"}} // Applique un style CSS au composant du graphique.
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" /> // Définit la ligne du graphique avec des propriétés spécifiques.
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> // Ajoute une grille au graphique avec des propriétés spécifiques.
        <XAxis dataKey="name" /> // Définit l'axe X du graphique en utilisant les noms (années).
        <YAxis name="stature" /> // Définit l'axe Y du graphique avec le nom "stature".
        <Tooltip content={<CustomTooltip />} /> // Utilise la fonction CustomTooltip pour personnaliser l'info-bulle.
      </LineChart>
    );
  }
  
  export default LineChartComponent; // Exporte le composant LineChartComponent pour être utilisé ailleurs dans l'application.