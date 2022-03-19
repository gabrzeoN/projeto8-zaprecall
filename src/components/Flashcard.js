import { useState } from "react";
import Turn from "./../assets/img/turn.png";

export default function Flashcard(props){
    const {name, question, answer} = props;
    const [flashcardStatus, setFlashCardStatus] = useState("answer")

    if (flashcardStatus === "name") {
        return (
            <li className="flashcard name" >
                <h2>{name}</h2>
                <ion-icon name="play-outline" onClick={() => setFlashCardStatus("question")} ></ion-icon>
            </li>
        );
    } else if (flashcardStatus === "question") {
        return (
            <li className="flashcard question">
                <h2>{question}</h2>
                <img src={Turn} alt="Virar carta" onClick={() => setFlashCardStatus("answer")} />
            </li>
        );
    } else if (flashcardStatus === "answer") {
        return (
            <li className="flashcard answer">
                <h2>{answer}</h2>
                <div>
                    <button onClick={() => setFlashCardStatus("name")} >Não lembrei</button>
                    <button onClick={() => setFlashCardStatus("name")} >Quase não lembrei</button>
                    <button onClick={() => setFlashCardStatus("name")} >Zap!</button>
                </div>
            </li>
        );
    }

}