import Turn from "./../assets/img/turn.png";

export default function FlashcardPageQuestion({setFlashCardPage, question}) {
    return (
        <li className="flashcard question">
            <h2>{question}</h2>
            <img src={Turn} alt="Virar carta" onClick={() => setFlashCardPage("answer")} />
        </li>
    );
}