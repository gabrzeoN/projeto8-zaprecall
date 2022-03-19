export default function Footer() {
    return (
        <footer>
            <div class="zap-finished">
                <img src="./assets/img/party.png" alt="" />
                <p class="zap-finish-message">PARABÉNS!</p>
            </div>
            <p class="zap-status">Você não esqueceu de nenhum flashcard!</p>
            <div class="answers-icons">
                <ion-icon name="checkmark-circle"></ion-icon>
                <ion-icon name="help-circle"></ion-icon>
                <ion-icon name="close-circle"></ion-icon>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        </footer>
    );
}