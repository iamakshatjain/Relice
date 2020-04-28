import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';   
import Container from 'react-bootstrap/Container';   
import Form from 'react-bootstrap/Form';
import Axios from 'axios';


const Report = () => {
    const [imageURL, setImageURL] = useState('');
    const [widget, setWidget] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            im_url : imageURL
        };
        console.log(data);
        const response = await Axios.post("https://relice.herokuapp.com/check", data);

        if(response.data.resp == "CMATCHED"){
            alert("Image matched!");
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
        <Container>
            <Form onSubmit={handleSubmit} stye={{width : "100vw"}}>
                <Button variant="primary" onClick={showWidget}>Upload Image</Button>
                <br/>
                <Button variant="primary" type="submit">Report</Button>
            </Form>
        </Container>
    );
}

export default Report;