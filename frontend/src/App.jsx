import React from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './styles/App.css';
import About from './components/About';


function App() {

    return (
        <>
            <div className='App'>
                <Router>

                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/dashboard' element={<About />} />
                    </Routes>

                </Router>
            </div>

        </>
    )
}

export default App;