const icons = [
    "checkmark-circle",
    "help-circle",
    "close-circle"
];

export default function FlashcardPageAnswer({ answer, setFlashCardPage, increseQuestionsAnswered, setIcon}) {

    function compareAnswer(text){
        increseQuestionsAnswered(1);
        setFlashCardPage(text);
        if(text === "notRight"){
            setIcon("close-circle")
        }else if(text === "notZap"){
            setIcon("help-circle")
        }else if(text === "zap"){
            setIcon("checkmark-circle")
        }
    }

    return (
        <li className="flashcard answer">
            <h2>{answer}</h2>
            <div>
                <button onClick={() => compareAnswer("notRight")} >Não lembrei</button>
                <button onClick={() => compareAnswer("notZap")} >Quase não lembrei</button>
                <button onClick={() => compareAnswer("zap")} >Zap!</button>
            </div>
        </li>
    );
}