import { useState } from 'react'
import Fretboard from "./Fretboard.js"
import Instructions from "./Instructions.js"
import "./component_css/FindNote.css"

export default function FindNote() {
    /* 
    Thinking through page layout and funcitonality:
    
    Layout:
    Page title (maybe do a falling down animation?)
    instructions button (When clicked opens up a subwindow that has instructions for the game that can be clicked through with directional arrows at the bottom
    and informational gifs (screen recordings) )
    Play game button (When clicked, sets a useState variable to true that indicates the user is playing. Conditionally render game... need to figure that out)

    There should be a timed mode and a learning mode

    How I want the game to work:
    User is prompted with a random string and random note to click.
    Have a set amount of time (60-30sec) to click as many correct notes as possible.
    When the user clicks the wrong string/note, indicate so (gif/animation?) and generate a new random string and note to click.
    When user clicks right string+note, indicate so (gif/animation?) and generate a new random string and note to click.
    User should be able to see time ticking down and their score going up as they play.
    When the time runs out, some score popup should show up.
    The popup should have have a green play again button and a grey go back button, the ladder of which sends back to findnote.js (sets useState to not playing)

    Additional styling ideas:
    When selecting a fret, put a gray (pixelated) circle on the selected fret and it turns green if it is right and red if it is wrong.
    
    
    */
   const [viewInstructions, setViewInstructions] = useState(false)
    
    return (
        <div className="App">
            <h1>Find the note!</h1>
            <div className="buttons-wrapper">
                <div className="buttons-container">
                    <button onClick={() => setViewInstructions(!viewInstructions)} className="instructions-button">Instructions</button>
                    <button className="learning-button">Play Learning Mode</button>
                    <button className="timed-button">Play Timed Mode</button>
                </div>
            </div>
            {viewInstructions && <Instructions />}
            <div className="fretboard-wrappe">
                <Fretboard />
            </div>
        </div>
    )
}