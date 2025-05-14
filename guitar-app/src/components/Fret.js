export default function Fret({ fretNum }) {
    const notes = ['E', 'F', 'F#', 'G', "G#", "A", "A#", "B", "C", "C#", "D", "D#"]

    function calculateFretNotes(fretNum) {
        const string1 = notes[fretNum%12]
        const string2 = notes.at(fretNum-5)
        const string3 = notes.at(fretNum-9)
        const string4 = notes[(fretNum+10) % 12]
        const string5 = notes[(fretNum+5) % 12]
        const string6 = notes[fretNum%12]
        return [string1, string2, string3, string4, string5, string6]
    }
    const fretNotes = calculateFretNotes(fretNum)

    const handleClick = (event) => {
        console.log(event.target.textContent)
    }
    
    return (
        <>
            <span onClick={handleClick}>
                <span>{fretNotes[0]}</span>
            </span>
            <span onClick={handleClick}>
                <span>{fretNotes[1]}</span>
            </span>
            <span onClick={handleClick}>
                <span>{fretNotes[2]}</span>
            </span>
            <span onClick={handleClick}>
                <span>{fretNotes[3]}</span>
            </span>
            <span onClick={handleClick}>
                <span>{fretNotes[4]}</span>
            </span>
            <span onClick={handleClick}>
                <span>{fretNotes[5]}</span>
            </span>
        </>
    )
}