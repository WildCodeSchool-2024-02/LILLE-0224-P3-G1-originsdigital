import { useState } from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Faq() {
  const [showAnswers, setshowAnswers] = useState(Array(9).fill(false));

  const toggleAnswer = (questAns) => {
    setshowAnswers(
      showAnswers.map((visible, i) => (i === questAns ? !visible : visible))
    );
  };

  const questions = [
    "VHS, qu'est-ce que c'est?",
    "Comment puis-je m'inscrire sur VHS?",
    "Quelles séries des années 90 sont disponibles sur VHS?",
    "Quels films cultes des années 90 puis-je trouver sur VHS?",
    "Comment puis-je rechercher des films ou séries ?",
  ];

  const answers = [
    "VHS est un service de streaming dédié aux séries et films des années 90, offrant une vaste sélection de classiques cultes, de comédies, de drames, d'animations ect ... Accédez à notre catalogue riche et nostalgique sur des milliers d'appareils connectés à Internet.",
    "Pour vous inscrire sur VHS, cliquez sur le bouton 'inscription' en haut à droite de la page d'accueil et suivez les instructions.",
    "VHS propose une large gamme de films et de séries, y compris des classiques, des nouveautés et des productions originales.",
    "Vous pouvez trouver des films cultes des années 80 a 2010.",
    "Utilisez la barre de recherche et sélectionnez le film qui vous plait.",
  ];

  return (
    <>
      <div className="div-info-contact">
        <Link to="/browsepage">
          <img
            src="/public/LOgo1.png"
            className="img-info-contact"
            alt="logo"
          />
        </Link>
      </div>
      <div className="container-body" id="hdp">
        {" "}
      </div>
      <h1 className="h1-faq" id="hdp">
        Foire aux questions
      </h1>
      <div className="fair-Container">
        {questions.map((question, index) => (
          <div key={`question_${question}`} className="fair-item">
            <button
              type="button"
              className="question"
              onClick={() => toggleAnswer(index)}
            >
              {question}
            </button>
            {showAnswers[index] && (
              <div className="answer">{answers[index]}</div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Faq;
