import { useEffect, useState } from "react";
import BtnCall from "./components/BtnCall/BtnCall";
import Modal from "./components/Modal/Modal";
import fetchCachorro from "./fetchApi/fetchCachorro";
import Loading from "./components/Loading/Loading";


function App() {

  const [statusModal, setStatusModal] = useState(false);
  const [imagemCachorro, setImagemCachorro] = useState("");
  const [carregando, setCarregando] = useState(<Loading />);
  const [imagemGato, setImagemGato] = useState("");
  const [imagemPato, setImagemPato] = useState("");
  const [imagemRaposa, setImagemRaposa] = useState("");
  const [animalEscolhido, setAnimalEscolhido] = useState("");

  // Fazendo requisição de API de acordo com o animal escolhido 
  async function callDog() {
    if(imagemCachorro == "") {
      await setStatusModal(true);
      await setAnimalEscolhido("Cachorro");
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemCachorro(data.message);
        })

        setCarregando("");
    }
    
  }

  // Escolhendo qual animal chamar 
  function callCat() {
    setStatusModal(true);
    setAnimalEscolhido("Gato");
  }

  function callDuck() {
    setStatusModal(true);
    setAnimalEscolhido("Pato");
  }

  function callFox() {
    setStatusModal(true);
    setAnimalEscolhido("Raposa");
  }

  // Solicitando mais um no botão dentro do modal: 
  async function maisUm() {
    
    if(animalEscolhido == "Cachorro") {
      setCarregando(<Loading />);
      setImagemCachorro("");
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemCachorro(data.message);
          
        })

        setCarregando("");
    }
  }

  // Fechar modal 
  function closeModal(event) {
    if(event.target.className === 'closeX' || event.target.className === 'modal') {
      setStatusModal(false);
      setImagemCachorro("");
      setCarregando(<Loading />)
    }
  }
  
  return (
    <div className="app">
      <h1>Modal de Animais</h1>
      <div className="boxBtn">
        <BtnCall btnColor={"btnDog"} btnText={"Cachorro"} call={callDog} imgAnimal={imagemCachorro} />
        <BtnCall btnColor={"btnCat"} btnText={"Gato"} call={callCat} imgAnimal={imagemGato} />
      </div>
      <div className="boxBtn">
        <BtnCall btnColor={"btnDuck"} btnText={"Pato"} call={callDuck} imgAnimal={imagemPato} />
        <BtnCall btnColor={"btnFox"} btnText={"Raposa"} call={callFox} imgAnimal={imagemRaposa} />
      </div>

      <Modal status={statusModal} animal={animalEscolhido} closeMX={closeModal} closeME={closeModal} imgAnimal={imagemCachorro} load={carregando} outro={maisUm} />

    </div>
  )
}

export default App;
