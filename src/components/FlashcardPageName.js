export default function FlashcardPageName({ name, setFlashCardPage }) {
    return (
        <li className="flashcard name" >
            <h2>{name}</h2>
            <ion-icon name="play-outline" onClick={() => setFlashCardPage("question")} ></ion-icon>
        </li>
    );
}