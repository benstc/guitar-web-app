import Fret from "./Fret.js"
import "./component_css/Fretboard.css"

export default function Fretboard() {


    return (
        <div className="guitar-neck">
            <ul>
                <li className="open-fret">
                    <Fret fretNum={0}/>
                </li>
                <li>
                    <Fret fretNum={1}/>
                </li>
                <li>
                    <Fret fretNum={2}/>
                </li>
                <li>
                    <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                    <Fret fretNum={3}/>
                </li>
                <li>
                    <Fret fretNum={4}/>
                </li>
                <li>
                    <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                    <Fret fretNum={5}/>
                </li>
                <li>
                    <Fret fretNum={6}/>
                </li>
                <li>
                    <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                    <Fret fretNum={7}/>
                </li>
                <li>
                    <Fret fretNum={8}/>
                </li>
                <li>
                    <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                    <Fret fretNum={9}/>
                </li>
                <li>
                    <Fret fretNum={10}/>
                </li>
                <li>
                    <Fret fretNum={11}/>
                </li>
                <li>
                    <div className="double-dots">
                        <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                        <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                    </div>
                    <Fret fretNum={12}/>
                </li>
                <ul className="strings">
                    <li>
                        <span className="string"></span>
                    </li>
                    <li>
                        <span className="string"></span>
                    </li>
                    <li>
                        <span className="string"></span>
                    </li>
                    <li>
                        <span className="string"></span>
                    </li>
                    <li>
                        <span className="string"></span>
                    </li>
                    <li>
                        <span className="string"></span>
                    </li>
                </ul>
            </ul>
        </div>
    )
}