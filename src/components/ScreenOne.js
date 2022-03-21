import Logo from "./../assets/img/logo.png";

export default function ScreenOne(props) {
  const { setScreen } = props;

  return (
    <div className="screen-1 ">
      <div className="logo">
        <img src={Logo} alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </div>
      <button onClick={() => setScreen('2')}>Iniciar Recall!</button>
    </div>
  );
}