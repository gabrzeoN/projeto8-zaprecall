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
            <p class="zap-finish-text" >{text[1]}</p>
            <div class="zap-finished">
                <img src={Sad} alt="Nao acertou todas" />
                <p class="zap-finish-message" >PUTZ...!</p>
            </div>
        </>
    }else if(icons.length === 8 && !icons.includes("close-circle")){
        finalMessage = <>
            <p class="zap-finish-text" >{text[0]}</p>
            <div class="zap-finished">
                <img src={Party} alt="Acertou todas" />
                <p class="zap-finish-message" >PARABÉNS!</p>
            </div>
        </>
    }

    return (
        <footer>
            {finalMessage}
            <p className="zap-status" >{questionsAnswered}/8 CONCLUÍDOS</p>
            <div class="answers-icons">
                {
                    icons.map((icon) => <ion-icon name={icon} ></ion-icon>)
                }
            </div>
        </footer>
    );
}







{/* <div class="zap-finished">
                <img src={Party} alt="Acertou todas" />
                <p class="zap-finish-message" >PARABÉNS!</p>
            </div> */}

// <ion-icon name="checkmark-circle" ></ion-icon>
//                 <ion-icon name="help-circle" ></ion-icon>
//                 <ion-icon name="close-circle" ></ion-icon>
//                 <ion-icon name="close-circle"></ion-icon>





// if (renderFooter === 0) {
//     return ( 
//         <footer>
//             <div class="zap-finished">
//                 <img src={Party} alt="Acertou todas" />
//                 <p class="zap-finish-message" >PARABÉNS!</p>
//             </div>
//             <p class="zap-finish-text" >{text[0]}</p>
//             <p className="zap-status" >{questionAnswered}/8 CONCLUÍDOS</p>
//             <div class="answers-icons">
//                 <ion-icon name="checkmark-circle" ></ion-icon>
//                 <ion-icon name="help-circle" ></ion-icon>
//                 <ion-icon name="close-circle" ></ion-icon>
//                 <ion-icon name="close-circle"></ion-icon>
//             </div>
//         </footer>
//     );
// } else if (renderFooter === 1) {
//     return (
//         <footer>
           
//                 <ion-icon name="checkmark-circle" ></ion-icon>
//                 <ion-icon name="help-circle" ></ion-icon>
//                 <ion-icon name="close-circle" ></ion-icon>
//                 <ion-icon name="close-circle"></ion-icon>
            
//         </footer>
//     );
// } else if (renderFooter === 2) {
//     return (
//         <footer>
//             <div class="zap-finished">
//                 <img src="./assets/img/party.png" alt="" />
//                 <p class="zap-finish-message">PARABÉNS!</p>
//             </div>
//             <p class="zap-status">Você não esqueceu de nenhum flashcard!</p>
//             <div class="answers-icons">
//                 <ion-icon name="checkmark-circle"></ion-icon>
//                 <ion-icon name="help-circle"></ion-icon>
//                 <ion-icon name="close-circle"></ion-icon>
//                 <ion-icon name="close-circle"></ion-icon>
//             </div>
//         </footer>
//     );
// }