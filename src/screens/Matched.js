import React,{useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';

const Matched = () => {

    const [loading, setLoading] = useState(true);
    const [matchedImages, setMatchedImages] = useState(null);

    const renderMatchingImages = (image) => {
        if(matchedImages == null) return;
        console.log(matchedImages[image][1]);
        return matchedImages[image][1].map((matchingImage) =>{
            console.log(matchingImage);
            return(
                <>
                    <img src={matchingImage} width="100px" height="100px"/>
                    <br/>
                </>
            )
        });
    }

    const renderMatchedImages = () => {
        if(matchedImages == null) return;
        let matchingImages = Object.keys(matchedImages);
        return matchingImages.map(image => {
                return (
                    <div>
                        Matching Image : 
                        <img src={image} width="100px" height="100px"/>
                        <br/>
                        Name : {matchedImages[image][0]}
                        <div>
                            {renderMatchingImages(image)}
                        </div>
                    </div>
                );
            });
            
    }

    const renderLoding = () => {
        return <Spinner animation="border" />
    }

    const getMatchedImages = async () => {
        try{
            let result = await Axios.get("https://relice.herokuapp.com/getinfo");
            return result;
        } catch(e){
            alert(e.message);
            return {};
        } 
        
    }

    useEffect(() => {
        getMatchedImages()
        .then((response) => setMatchedImages(response.data))
        .then(() => setLoading(false))
        .catch(err => console.error(err));
    }, []);

    
        if(!loading){
            return(
                <Container>
                    {renderMatchedImages()}
                </Container>
            );
        }else{
            return(
                <Container>
                    {renderLoding()}
                </Container>
            );
        }
}

export default Matched;