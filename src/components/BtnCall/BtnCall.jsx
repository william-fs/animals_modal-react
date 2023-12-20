import "./BtnCall.css"

function BtnCall({btnColor, btnText, call}) {
    return ( 
        <button onClick={call} className={`btnCall ${btnColor}`}>{btnText ? btnText : "Clique"}</button>
    );
}

export default BtnCall;