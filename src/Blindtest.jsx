import React, { Component } from 'react';
import './Quizz.css';
import Question from './Question';
import BoutonsReponse from './Boutonsreponse';
import Score from './score';
import axios from 'axios';


class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    quizzTermine: false,// État pour suivre si le quizz est terminé

      questions: [
        {
          id: 1,
          texte: "Qui est le célébre compositeur de 'La Lettre à Élise' ?",
          options: ["Mozart", "Clementi", "Beethoven", "Boccherini"],
          reponseCorrecte: "Beethoven"
        },
        {
          id: 2,
          texte: "Quel instrument de musique est souvent associé à Mozart ?",
          options: ["Piano", "Violon", "Trompette","Flûte"],
          reponseCorrecte: "Piano"
        },
        {
            id: 3,
            texte: "Quel terme désigne la succession de notes dans une mélodie musicale ?",
            options: ["Timbre", "Harmonie", "Rythme","Mélodie"],
            reponseCorrecte: "Mélodie"
        },
        {
            id: 4,
            texte: "Qui est célèbre pour sa technique de guitare appelée 'tapping' ?",
            options: ["Jimi Hendrix", "Eric Clapton", "John Lennon","Eddie Van Halen"],
            reponseCorrecte: "Eddie Van Halen"
        },
        {
            id: 5,
            texte: "Quel genre musical est caractérisé par l'utilisation de platines vinyles et de samples ?",
            options: ["Jazz", "Blues", "Hip-hop","Reggae"],
            reponseCorrecte: "Hip-hop"
        },
        {
            id: 6,
            texte: "Dans quel genre musical peut-on entendre le sitar, un instrument à cordes indien ?",
            options: ["Country", "Rock", "Reggae","Musique classique indienne"],
            reponseCorrecte: "Musique classique indienne"
        },
        {
            id: 7,
            texte: "Quel instrument à percussion est constitué d'une série de cloches de différentes tailles ?",
            options: ["Glockenspiel", "Marimba", "Xylophone","Tambour"],
            reponseCorrecte: "Glockenspiel"
        },
        {
            id: 8,
            texte: "De quel pays provient le tango, un style musical et une danse passionnée ?",
            options: ["France", "Espagne", "Argentine","italie"],
            reponseCorrecte: "Argentine"
        },
        {
            id: 9,
            texte: "Quel genre musical est caractérisé par le jeu virtuose de la guitare et des paroles poétiques ?",
            options: ["Country", "Flamenco", "Salsa","R&B"],
            reponseCorrecte: "Flamenco"
        },
        {
            id: 10,
            texte: "Quelle est la note la plus basse d'un piano standard ?",
            options: ["La", "Fa", "Do","Sol"],
            reponseCorrecte: "La"
        },
      ],
      indexQuestionCourante: 0,
      score: 0,
    };
  }
  

  // Fonction pour gérer le clic
  gererClicReponse = (reponseSelectionnee) => {
    const { indexQuestionCourante, questions, score } = this.state;
    const questionCourante = questions[indexQuestionCourante];
    this.audioCorrect = new Audio("Bonnereponsev2.mp3") // Son de bonne réponse


    // Vérification réponse + score
    if (reponseSelectionnee === questionCourante.reponseCorrecte) {
      this.setState({
        score: score + 1
      });
      this.audioCorrect.play();

    }

    // vérification question suivante
    if (indexQuestionCourante < questions.length - 1) {
        this.setState({ //maj index
          indexQuestionCourante: indexQuestionCourante + 1
        });
      } else {
        // vérificatin quizz terminé
        this.setState({
          quizzTermine: true
        });
      }
    };

    render() {
        const { questions, indexQuestionCourante, score, quizzTermine } = this.state;
        const questionCourante = questions[indexQuestionCourante];
    
        return (
          <div className="conteneur-quizz">
            {quizzTermine ? (
              // condition quizz termine
              <div>
                <h1>Score final : {score}/10</h1>
                <button onClick={this.recommencerQuizz}>Recommencer</button>
                <button onClick={this.retourPageAccueil}>Retour à la page d'accueil</button>
              </div>
            ) : (
              // sinon continuer
              <div>
                <Question question={questionCourante} />
                <BoutonsReponse
                  options={questionCourante.options}
                  gererClicReponse={this.gererClicReponse}
                />
                <Score score={score} />
            
              </div> 
              //const response = await axios.get(`/api/points?amount=${points}`);
            )}
          </div>
        );
      }

      // bouton recommencer
  recommencerQuizz = () => {
    this.setState({
      quizzTermine: false,
      indexQuestionCourante: 0,
      score: 0
    });
  };

  retourPageAccueil = () => {
    // redireciton
  };

  
}


export default Quizz;
