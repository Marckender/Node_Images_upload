import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const Register = () => {

  const [fname, setFName] = useState("");
    
  const [ file, setFile ] = useState("");

  console.log(fname)

  const setData = (e) => {
    const { value } = e.target

    setFName(value)
  }

  const setImgFile = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div className='container mt-3'>
      <h1>Upload Your IMG Heare</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="" name="fname" onChange={setData}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>select your image</Form.Label>
          <Form.Control type="file" placeholder="" name="photo" onChange={setImgFile}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default Register