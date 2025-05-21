import { useState } from 'react'
import InstructionPage from "./InstructionPage.js"

export default function Instructions() {
    const [instructionIndex, setInstructionIndex] =  useState(0)

    // I should probably hold out on writing the instructions until there is an interactive mode of the 
    // fretboard so I'll better know how to write instructions and I can make gifs using screen recordings
    const instructions = [
        {

        }
    ]

    return (
        <div className="instructions-overlay">
            <div className="instructions-modal">
                <InstructionPage />
                <div className="instructions-buttons">
                    {instructionIndex > 0 && <button>Prev</button>}
                    {instructionIndex < 5 && <button>Next</button>}
                </div>
            </div>
        </div>
    )
}