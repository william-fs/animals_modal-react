import "./Modal.css"

function Modal({animal, closeMX, closeME, status, imgAnimal, load, outro}) {
    if(status) {
        return ( 
            <div className={`modal`} onClick={closeME}>
                <div className="boxModal">
                    <span className="closeX" onClick={closeMX}>X</span>
                    <span className="outro" onClick={outro}>Mais Um =)</span>
                    <h2>{animal}</h2>
                    <img className="imgAnimals" src={imgAnimal} alt="" />
                    <div>{load}</div>
                </div>
            </div>
        );
    }

    return null;
}

export default Modal;