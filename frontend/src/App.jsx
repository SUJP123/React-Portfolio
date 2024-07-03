import React from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './styles/App.css';
import About from './components/About';
import Projects from './components/Projects';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar/index";


function App() {

    return (
        <>
            <div className='App'>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/dashboard' element={<Dashboard />} />
                        <Route exact path='/dashboard' element={<About />} />
                        <Route exact path='/dashboard' element={<Projects />} />
                        <Route exact path='/contact' element={<Contact />} />
                    </Routes>

                </Router>
            </div>

        </>
    )
}

export default App;