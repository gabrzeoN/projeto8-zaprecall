import { useState } from "react";

import FlashcardPageName from "./FlashcardPageName";
import FlashcardPageQuestion from "./FlashcardPageQuestion";
import FlashcardPageAnswer from "./FlashcardPageAnswer";
import FlashcardPageAnswered from "./FlashcardPageAnswered";

export default function Flashcard(props) {
    const { name, question, answer, increseQuestionsAnswered, setIcon } = props;
    const [flashcardPage, setFlashCardPage] = useState("name"); //Possible states: name, question, answer, zap, notZap, notRight.

    if (flashcardPage === "name") {
        return (
            <FlashcardPageName name={name} setFlashCardPage={setFlashCardPage} />
        );
    } else if (flashcardPage === "question") {
        return (
            <FlashcardPageQuestion question={question} setFlashCardPage={setFlashCardPage} />
        );
    } else if (flashcardPage === "answer") {
        return (
            <FlashcardPageAnswer answer={answer} setFlashCardPage={setFlashCardPage} increseQuestionsAnswered={increseQuestionsAnswered} setIcon={setIcon} />
        );
    } else if (flashcardPage === "zap" || flashcardPage === "notZap" || flashcardPage === "notRight") {
        return (
            <FlashcardPageAnswered
                name={name}
                buttonClicked={flashcardPage}
            />
        );
    }
}