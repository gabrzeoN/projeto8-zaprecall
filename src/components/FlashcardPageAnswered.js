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
        <li className={`flashcard name ${buttonClicked}`} >
            <h2>{name}</h2>
            <ion-icon name={icon} ></ion-icon>
        </li>
    );
}


// <ion-icon name="checkmark-circle"></ion-icon>
// <ion-icon name="help-circle"></ion-icon>
// <ion-icon name="close-circle"></ion-icon>