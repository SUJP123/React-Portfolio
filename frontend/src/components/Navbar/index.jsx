import React, { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/contact">Contacts</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/contact">Contacts</Link>
                <button onClick={toggleNavbar}>Button</button>
            </div>
        </div>
    )
}

export default Navbar