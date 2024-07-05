import './App.css';
import Header from './Components/Header';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Header />
      <center>
        <div className='bg-light m-3 p-3 border border-1 w-50'>
          <h1 className='text-dark'>Message Box</h1>
          
          <Button variant="success" className='m-1' onClick={() => setShow(true)}>DISPLAY</Button>
          <Button variant="danger" className='m-1' onClick={() => setShow(false)}>HIDE</Button>

          <MDBCardText>
            {show ? <h2 className='mt-3 text-warning'>Hello, Welcome to REACT</h2> : <h2 className='mt-3 text-warning'><br /></h2>}
          </MDBCardText>
        </div>
      </center>
    </div>
  );
}

export default App;
