import { useState } from "react";
import BtnCall from "./components/BtnCall/BtnCall";
import Modal from "./components/Modal/Modal";

function App() {

  const [statusModal, setStatusModal] = useState(false);

  function callDog() {
    setStatusModal(true);
  }

  function closeModal(event) {
    if(event.target.className === 'closeX' || event.target.className === 'modal') {
      setStatusModal(false);
    }
  }
  
  return (
    <div className="app">
      <h1>Modal de Animais</h1>
      <div className="boxBtn">
        <BtnCall btnColor={"btnDog"} btnText={"Cachorro"} call={callDog} />
        <BtnCall btnColor={"btnCat"} btnText={"Gato"} />
      </div>
      <div className="boxBtn">
        <BtnCall btnColor={"btnDuck"} btnText={"Pato"} />
        <BtnCall btnColor={"btnFox"} btnText={"Raposa"} />
      </div>

      <Modal status={statusModal} animal={"Animal escolhido"} closeMX={closeModal} closeME={closeModal} />
    </div>
  )
}

export default App;
