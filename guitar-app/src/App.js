import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage.js"
import FindNote from "./components/FindNote.js"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/find-note" element={<FindNote />} />
      </Routes>
    </Router>
  );
}

export default App;
