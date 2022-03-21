import Party from "./../assets/img/party.png";
import Sad from "./../assets/img/sad.png";

const text = [
    "Você não esqueceu de nenhum flashcard!",
    "Ainda faltam alguns... Mas não desanime!"
];

export default function Footer({questionsAnswered, icons}) {    
    console.log("passei aqui")
    let finalMessage = <></>

    if(icons.length === 8 && icons.includes("close-circle")){
        finalMessage = <>
            <p className="zap-finish-text" >{text[1]}</p>
            <div className="zap-finished">
                <img src={Sad} alt="Nao acertou todas" />
                <p className="zap-finish-message" >PUTZ...!</p>
            </div>
        </>
    }else if(icons.length === 8 && !icons.includes("close-circle")){
        finalMessage = <>
            <p className="zap-finish-text" >{text[0]}</p>
            <div className="zap-finished">
                <img src={Party} alt="Acertou todas" />
                <p className="zap-finish-message" >PARABÉNS!</p>
            </div>
        </>
    }

    return (
        <footer>
            {finalMessage}
            <p className="zap-status" >{questionsAnswered}/8 CONCLUÍDOS</p>
            <div className="answers-icons">
                {
                    icons.map((icon) => <ion-icon name={icon} ></ion-icon>)
                }
            </div>
        </footer>
    );
}