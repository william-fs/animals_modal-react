import spinner from "../../assets/spinner.png"
import "./Loading.css"

function Loading() {
    return ( 
        <div className="loading">
            <img src={spinner} alt="" />
        </div>
    );
}

export default Loading;