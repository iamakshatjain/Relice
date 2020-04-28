import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';   
import Container from 'react-bootstrap/Container';   
import Form from 'react-bootstrap/Form'
import Axios from 'axios';


const Complaint = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(0);
    const [imageURL, setImageURL] = useState('');
    const [widget, setWidget] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            name : name,
            im_url : imageURL,
            gender : gender,
            age : age
        };
        console.log(data);
        const response = await Axios.post("https://relice.herokuapp.com/store", data);
        console.log(response.data);
        if (response.data.resp == "CADDED") {
            alert("Your complaint is filed!");
        } else {
            alert("Try again!");
        }
    }

    const showWidget = () => {
        widget.open()
    }

    const checkUploadResult = (resultEvent) => {
        if(resultEvent.event === 'success'){
            console.log(resultEvent.info);
            setImageURL(resultEvent.info.secure_url);
        }
    }

    useEffect(()=>{
        setWidget(window.cloudinary.createUploadWidget({
            cloudName : 'whiteknight',
            uploadPreset : 'b0z6jywd' 
        }, (err, result) => {checkUploadResult(result)}));
    }, []);

    return(
        <>
            <Container>
                <Form onSubmit={handleSubmit} stye={{width : "100vw"}}>
                    <Button variant="primary" onClick={showWidget}>Upload Image</Button>
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
                                <option selected value="male">Male</option>
                                <option value="memale">Female</option>
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