import "./Modal.css"

function Modal({animal, closeMX, closeME, status}) {
    if(status) {
        return ( 
            <div className={`modal`} onClick={closeME}>
                <div className="boxModal">
                    <span className="closeX" onClick={closeMX}>X</span>
                    <h2>{animal}</h2>
                    <img className="imgAnimals" src="https://images.dog.ceo/breeds/keeshond/n02112350_1456.jpg" alt="" />
                </div>
            </div>
        );
    }

    return null;
}

export default Modal;