import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div className='bg-light p-3 d-flex align-items-center justify-content-center'>
            <h1><i class="fa-solid fa-message fa-shake" style={{ color: '#ff9500' }}></i></h1>
            <h1><Navbar.Brand href="" className='text-info'> &nbsp; Show Hide</Navbar.Brand></h1>
        </div>
    )
}

export default Header