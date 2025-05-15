import "./component_css/Homepage.css"
import { useNavigate } from 'react-router-dom'


export default function Homepage() {
    const navigate = useNavigate()
    return (
        <div className="homepage App">
            <h1 className="title">Welcome Rockstars!</h1>
            <div className="gif-container">
                <img src="/gifs/rock-on.gif" />
                <p>Choose your game mode</p>
                <img src="/gifs/rock-out2.gif" />
            </div>
            <div className="buttons-wrapper">
                <div className="buttons-container">
                    <button onClick={() => navigate("/find-note")}>Find The Note</button>
                    <button>Find The Triad</button>
                    <button>Dink Around</button>
                </div>
            </div>
        </div>
    )
}