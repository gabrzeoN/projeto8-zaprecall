import Flashcards from "./Flashcards";

export default function Main({ increseQuestionsAnswered, setIcon}) {
    return (
        <main>
            <Flashcards increseQuestionsAnswered={increseQuestionsAnswered} setIcon={setIcon} />
        </main>
    );
}