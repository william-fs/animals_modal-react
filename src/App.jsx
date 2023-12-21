import { useState } from "react";
import BtnCall from "./components/BtnCall/BtnCall";
import Modal from "./components/Modal/Modal";
import Loading from "./components/Loading/Loading";


function App() {

  const [statusModal, setStatusModal] = useState(false);
  const [carregando, setCarregando] = useState(<Loading />);
  const [imagemEscolhida, setImagemEscolhida] = useState("");
  const [animalEscolhido, setAnimalEscolhido] = useState("");

  // Fazendo requisição de API de acordo com o animal escolhido 

  // Gato
  async function callCat() {
    if(imagemEscolhida == "") {
      setStatusModal(true);
      setAnimalEscolhido("Gato");
      await fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemEscolhida(data[0].url);
        })

        setCarregando("");
    }
  }

  // Cachorro 
  async function callDog() {
    if(imagemEscolhida == "") {
      setStatusModal(true);
      setAnimalEscolhido("Cachorro");
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemEscolhida(data.message);
        })

        setCarregando("");
    }
  }

  // Raposa
  async function callFox() {
    if(imagemEscolhida == "") {
      setStatusModal(true);
      setAnimalEscolhido("Raposa");
      await fetch("https://randomfox.ca/floof/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemEscolhida(data.image);
        })

        setCarregando("");
    }
  }

  function callDuck() {

  }


  // Solicitando mais um no botão dentro do modal: 
  async function maisUm() {

    // Gato 
    if(animalEscolhido == "Gato") {
      setCarregando(<Loading />);
      setImagemEscolhida("");
      await fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemEscolhida(data);
          setImagemEscolhida(data[0].url);
        })

        setCarregando("");
    }
    
    // Cachorro 
    if(animalEscolhido == "Cachorro") {
      setCarregando(<Loading />);
      setImagemEscolhida("");
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemEscolhida(data.message);
        })

        setCarregando("");
    }

    // Raposa
    if(animalEscolhido == "Raposa") {
      setCarregando(<Loading />);
      setImagemEscolhida("");
      await fetch("https://randomfox.ca/floof/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImagemEscolhida(data.image);
        })

        setCarregando("");
    }

  }

  // Fechar modal 
  function closeModal(event) {
    if(event.target.className === 'closeX' || event.target.className === 'modal') {
      setStatusModal(false);
      setImagemEscolhida("");
      setCarregando(<Loading />)
    }
  }
  
  return (
    <div className="app">
      <h1>Modal de Animais</h1>
      <div className="boxBtn">
        <BtnCall btnColor={"btnCat"} btnText={"Gato"} call={callCat} imgAnimal={imagemEscolhida} />
        <BtnCall btnColor={"btnDog"} btnText={"Cachorro"} call={callDog} imgAnimal={imagemEscolhida} />
        <BtnCall btnColor={"btnFox"} btnText={"Raposa"} call={callFox} imgAnimal={imagemEscolhida} />
      </div>

      <Modal status={statusModal} animal={animalEscolhido} closeMX={closeModal} closeME={closeModal} imgAnimal={imagemEscolhida} load={carregando} outro={maisUm} />

    </div>
  )
}

export default App;
