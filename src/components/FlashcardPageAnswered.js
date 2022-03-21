export default function FlashcardPageAnswered({ name, buttonClicked }) {
    let icon = "";
    
    if(buttonClicked === "zap"){
        icon = "checkmark-circle";
    }else if(buttonClicked === "notZap"){
        icon = "help-circle";
    }else if(buttonClicked === "notRight"){
        icon = "close-circle";
    }

    return (
        <>
            <li className={`flashcard name ${buttonClicked}`} >
                <h2>{name}</h2>
                <ion-icon name={icon} className={icon} ></ion-icon>
            </li>
        </>
    );
}