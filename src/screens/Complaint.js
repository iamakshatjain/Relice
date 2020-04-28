import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';   
import Container from 'react-bootstrap/Container';   
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';

const handleSubmit = (e) => {
    e.preventDefault();
}


const Complaint = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [imageURL, setImageURL] = useState('');

    return(
        <>
            <Container>
                <Form onSubmit={handleSubmit} stye={{width : "100vw"}}>
                    <Form.Row>
                        <Form.Group controlId="user-name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="user-gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="user-age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter age" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
              
        </>
    );
}

export default Complaint;