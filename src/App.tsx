import './App.css'
import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"

function App() {

    useEffect 
 
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes> 
        </BrowserRouter>      
    )
}

export default App
