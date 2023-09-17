import React, { Component } from 'react';
import './Quizz.css';
import Question from './Question';
import BoutonsReponse from './Boutonsreponse';
import Score from './score';

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
          texte: "Quel est le langage de programmation le plus populaire en 2023 ?",
          options: ["JavaScript", "Python", "Beethoven",],
          reponseCorrecte: "JavaScript"
        }
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
                <h1>Score final : {score}</h1>
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
