import { useState, useEffect } from 'react'
import Header from '../Components/Header.jsx'
import '../style/index.css';
import Orchestre from "../img/Saline-royale-Academy-orchestre.jpeg";
import '../Home.css';
import VideoPlayer from '../Components/VideoPlayer.jsx';
import CardMetier from '../Components/CardMetier.jsx';
import Footer from '../Components/Footer.jsx';
import CardInformation from '../Components/CardInformation.jsx';
import CardEnseignants from '../Components/CardEnseignants.jsx'
import CardSub from '../Components/CardSub.jsx';

export {Page}

function Page() {

  const [dataJson, setDataJson] = useState(null);
  const [getVideosUrl, setGetVideosUrl] = useState([]);

  useEffect(() => {
    // import de la base de donnée
    fetch('https://localhost/api/lessons')
      .then(reponse => reponse.json())
      .then(data => {
        const getVideosUrl = data['hydra:member'].map(lesson => lesson.videoUrl);
        setGetVideosUrl(getVideosUrl);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);


  // import des de data.json
  useEffect(()=> {
    fetch('../src/data/data.json')
      .then((reponse) =>{
        if (!reponse.ok){
          throw new Error("Nous n'avons pas pu importer vos datas");
        }
        return reponse.json();
      })
      .then((data) => {
        setDataJson(data);
      })
      .catch((error)=> {
        console.error("Nous rencontrons un problème avec la base de donnée", error)
      });
  }, []);

  const [hide, setHide] = useState(false);
  const [rotate, setRotate] = useState(true);

  const dataCardMetier = dataJson ? dataJson.dataCardInfo :[];

  const dataVideoPlayer = dataJson ? dataJson.dataVideoPlayer.slice() :[]; // crée une copie superficielle de la constante

  const dataEnseignants = dataJson ? dataJson.dataEnseignants :[];

  const dataActu = dataJson ? dataJson.dataInformation : [];

  function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  randomArray(dataVideoPlayer);


  return (
    <>
      <Header/>
      {dataJson ? (
        <>
          <section className='containerExpertise'>
            <div className='containerImageExpertise'>
              <img src={Orchestre} alt="Orchestre Saline Royale Academy"></img>
            </div>
            <div className='containerParagraphe'>
              <h2 className='titreExpertise'>Notre expertise</h2>
              <p className='paragrapheExpertise'>Bienvenue à Saline Royal Academy, l'incarnation même de l'excellence dans le domaine de la musique. Notre institution se distingue comme une référence incontestée pour l'apprentissage, l'innovation et la performance en musique. Notre renommée n'est pas simplement le fruit du hasard, mais le résultat d'un engagement profond et d'une passion indéfectible pour l'art musical, qui a été cultivée au fil des décennies.</p>
              <a href="#" className='linkExpertise'>En savoir plus</a>
            </div>
          </section>
          <section className='containerBlockVideos'>
            <div className='containerTitreSeeAll'>
              <h3>Live</h3>
              <a href="#">Voir tout</a>
            </div>
            <div className='containerVideos'>
              {getVideosUrl.slice(0, 2).map((url, index)=> (
                <VideoPlayer
                  key={index}
                  url={url}
                />
              ))}
            </div>
          </section>
          <section className="sectionCards">
            <h3 id="choix">Choisis ton instrument</h3>
            <p id="choixParagraphe">Pellentesque auctor et purus ut tincidunt. Praesent quis mi non lacus cursus pretium nec id orci. Nullam ut turpis massa.</p>
            <div className='containerCards'>
              {dataCardMetier.map((item, index)=> (
                <CardMetier
                  key={index}
                  images={item.photoLink}
                  name={item.title}
                  desc={item.description}
                />
              ))}
            </div>
            {hide && (
              <>
                <div className='containerCards' id='firstColumn'>
                  {dataCardMetier.map((item, index)=> (
                    <CardMetier
                      key={index}
                      images={item.photoLink}
                      name={item.title}
                      desc={item.description}
                    />
                  ))}
                </div>
                <div className='containerCards' id='secondColumn'>
                  {dataCardMetier.map((item, index)=> (
                    <CardMetier
                      key={index}
                      images={item.photoLink}
                      name={item.title}
                      desc={item.description}
                    />
                  ))}
                </div>
              </>
            )}
            <div onClick={() => setHide(!hide)} className='containerArrow'>
              <div onClick={() => setRotate(!rotate)} className="rond">
                <div className={`arrowLeft ${rotate ? '' : 'reverseLeft'}`}></div>
                <div className={`arrowRight ${rotate ? '' : 'reverseRight'}`}></div>
              </div>
            </div>
          </section>
          <section className='containerCardsSub'>
            <CardSub/>
          </section>
          <section className="containerTrends">
            <h3>Trends</h3>
            <div className="containerVideosTrends">
              {getVideosUrl.slice(0, 10).map((url, index)=> (
                <VideoPlayer
                  key={index}
                  url={url}
                  width='320px'
                  height='180px'
                />
              ))}
            </div>
          </section>
          <section className='containerEnseignants'>
            <h3 className='titreEnseignants'>Nos enseignants</h3>
            <div className='containerCardsProf'>
              {dataEnseignants.map((item, index)=> (
                <CardEnseignants
                  key={index}
                  images={item.imageEnseignant}
                  name={item.name}
                />
              ))}
            </div>
          </section>
          <section className='containerInformation'>
            <h3 className="titreInformation">Informations</h3>
            <div className='containerCards'>
              {dataActu.map((item, index)=> (
                <CardInformation
                  key={index}
                  titre={item.title}
                  date={item.date}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        <p>Chargement en cours...</p>
      )}
      <Footer />
    </>
  )
}
