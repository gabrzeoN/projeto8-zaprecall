export default function ScreenOne(){
    function changeScreen(){}

    return(
        <div class="screen-1 ">
          <div class="logo">
            <img src="./assets/img/logo.png" alt="ZapRecall logo" />
            <h1>ZapRecall</h1>
          </div>
          <button onClick={() => changeScreen('2')}>Iniciar Recall!</button>
      </div>
    );
}