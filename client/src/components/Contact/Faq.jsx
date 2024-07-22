import { useState } from "react";
import "./Faq.css";

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
    "Comment puis-je rechercher des films ou séries par année de sortie?",
    "Puis-je créer une liste de mes séries et films préférés?",
    "Est-ce que VHS propose des contenus en qualité HD?",
    "Comment signaler un problème de lecture vidéo?",
    "Y a-t-il des fonctionnalités spéciales pour les nostalgiques des années 90?",
  ];

  const answers = [
    "VHS est un service de streaming dédié aux séries et films des années 90, offrant une vaste sélection de classiques cultes, de comédies, de drames, d'animations et de documentaires. Accédez à notre catalogue riche et nostalgique sur des milliers d'appareils connectés à Internet. Regardez tout ce que vous voulez, quand vous voulez, à un prix mensuel très attractif. Découvrez ou redécouvrez de nouveaux films et séries chaque semaine, spécialement choisis pour ravir les amateurs des années 90 !",
    "Pour vous inscrire sur VHS, cliquez sur le bouton 'S'inscrire' en haut à droite de la page d'accueil et suivez les instructions.",
    "VHS propose une large gamme de films et de séries, y compris des classiques, des nouveautés, des documentaires et des productions originales.",
    "Vous pouvez trouver des films cultes des années 90 sur VHS, y compris 'Pulp Fiction', 'Titanic', 'The Matrix' et 'Jurassic Park'.",
    "Pour rechercher des films ou séries par année de sortie, utilisez la barre de recherche et sélectionnez le filtre 'Année de sortie' pour affiner vos résultats.",
    "Oui, vous pouvez créer et gérer une liste de vos séries et films préférés en vous rendant dans la section 'Ma Liste' de votre compte.",
    "La plupart des contenus disponibles sur VHS sont en qualité HD, offrant une meilleure expérience visuelle pour les classiques des années 90.",
    "Pour signaler un problème de lecture vidéo, allez dans la section 'Aide' et sélectionnez 'Signaler un problème', ou contactez notre support à support@vhs.com.",
    "Oui, VHS propose des fonctionnalités spéciales telles que des playlists thématiques, des documentaires sur les années 90 et des interviews exclusives des stars de cette époque.",
  ];

  return (
    <>
      <h1 className="h1-faq">Foire aux questions</h1>
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
    </>
  );
}

export default Faq;
