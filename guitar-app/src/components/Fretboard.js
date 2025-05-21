import { useState } from 'react'
import Fret from "./Fret.js"
import "./component_css/Fretboard.css"

export default function Fretboard() {
    const [activeFrets, setActiveFrets] = useState([null, null, null, null, null, null])

    function handleFretClick(fretNum, stringNum) {
        if (activeFrets[stringNum] === fretNum) {
            const newActiveFrets = activeFrets.map((fret, index) => (
                index === stringNum ? null : fret
            ))
            setActiveFrets(newActiveFrets)
        } else {
            const newActiveFrets = activeFrets.map((fret, index) => (
                index === stringNum ? fretNum : fret
            ))
            setActiveFrets(newActiveFrets)
        }
    }


    return (
        <div>
            <div className="guitar-neck">
                <ul>
                    <li className="open-fret">
                        <Fret fretNum={0} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={1} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={2} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                        <Fret fretNum={3} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={4} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                        <Fret fretNum={5} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={6} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                        <Fret fretNum={7} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={8} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                        <Fret fretNum={9} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={10} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={11} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <div className="double-dots">
                            <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                            <img className="dots" alt="dot" src="/images/fret-dot.webp" />
                        </div>
                        <Fret fretNum={12} activeFrets={activeFrets} handleClick={handleFretClick}/>
                    </li>
                    <li>
                        <Fret fretNum={13} activeFrets={activeFrets} handleClick={handleFretClick}/>
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
        </div>
    )
}