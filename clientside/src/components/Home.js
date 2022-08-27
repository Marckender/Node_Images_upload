import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'

const Home = () => {

    const [fname, setFName] = useState("");
    
    const [ file, setFile ] = useState("");

  return (
    <>
        <div className='container mt-2'>
            <h1 className='text-center mt-2'> Images Uploader</h1>

            <div className='text-end'>
                <Button variant="primary" > <NavLink to="/register" className="text-decoration-none text-white"> Add User</NavLink></Button>
            </div>

            <div className='row d-flex justify-content-between align-items-center mt-5'>
                <Card style={{ width: '22rem', height: "18rem" }} className="mb-3">
                    <Card.Img variant="top" style={{ width: '100px', textAlign: "center", margin:"auto" }} src="https://img.lovepik.com/element/45001/3052.png_860.png" className='mt-2'/>
                    <Card.Body className="text-center">
                        <Card.Title>User Name: Laouni</Card.Title>
                        <Card.Text>
                            Date Added: 12/02/93.
                        </Card.Text>
                        <Button variant="danger" className='col-lg-6 text-center'>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}

export default Home