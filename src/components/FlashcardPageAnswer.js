export default function FlashcardPageAnswer({ answer, setFlashCardPage }) {
    return (
        <li className="flashcard answer">
            <h2>{answer}</h2>
            <div>
                <button onClick={() => setFlashCardPage("notRight")} >Não lembrei</button>
                <button onClick={() => setFlashCardPage("notZap")} >Quase não lembrei</button>
                <button onClick={() => setFlashCardPage("zap")} >Zap!</button>
            </div>
        </li>
    );
}