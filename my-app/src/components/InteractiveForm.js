import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function InteractiveForm() {
  //display the data input in the text box
    const displayDog = (event) => {
      //prevent page refresh
        event.preventDefault();
        //fetch the data from the text box
        const dogThought = document.getElementById('dogInput').value;
        console.log(dogThought);
        //simulate reading your mind
        setTimeout(() => {
          alert(`You are thinking about a ${dogThought}`);
        } , 3000);
        alert("Reading your mind...");
        
    };
  return (
    //create the form. When submitted call the displayDog function
    <Form style={{ width: '50%', textAlign: 'left', padding: '50px', backgroundColor: '#171123', borderRadius: '20px'}} onSubmit={displayDog}>
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

export default InteractiveForm;