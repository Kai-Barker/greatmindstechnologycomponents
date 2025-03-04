import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    const displayDog = (event) => {
        event.preventDefault();
        const dogThought = document.getElementById('dogInput').value;
        console.log(dogThought);
        alert("Reading your mind...");
        setTimeout(() => {
          alert(`You are thinking about a ${dogThought}`);
        } , 3000);
    };
  return (
    <Form style={{ width: '50%', textAlign: 'left'}} onSubmit={displayDog}>
      <Form.Group className="mb-3" controlId="formInput">
        <Form.Label style={{padding : 0}}>What dog are you thinking about?</Form.Label>
        <p><Form.Text style={{fontSize: '15px', color: 'white', paddingTop:0}}>We will try guess it</Form.Text></p>
        <Form.Control id='dogInput' type="text" placeholder="Enter dog breed" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

/*
function BasicExample() {
  const displayDog = (event) => {
    event.preventDefault();
    const dogThought = document.getElementById('dogInput').value;
    alert(dogThought);
  };
  
  return (
    <Form style={{ width: '50%', textAlign: 'left'}} onSubmit={displayDog}>
      <Form.Group className="mb-3" controlId="formInput">
        <Form.Label style={{padding : 0}}>What dog are you thinking about?</Form.Label>
        <p><Form.Text style={{fontSize: '15px', color: 'white', paddingTop:0}}>We will try guess it</Form.Text></p>
        <Form.Control id='dogInput' type="text" placeholder="Enter dog breed" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
*/

export default BasicExample;