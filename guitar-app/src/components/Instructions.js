import { useState } from 'react'
import InstructionPage from "./InstructionPage.js"

export default function Instructions() {
    const [instructionIndex, setInstructionIndex] =  useState(0)

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