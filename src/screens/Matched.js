import React,{useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Axios from 'axios';

const Matched = () => {

    const [loading, setLoading] = useState(true);
    const [matchedImages, setMatchedImages] = useState(`{
        "https://i.imgur.com/TQwMnoT.jpg": [
                "Zana Huan",
                [
                "https://i.imgur.com/CmOZsgq.jpg",
                "https://i.imgur.com/CmOZsgq.jpg",
                "https://i.imgur.com/CmOZsgq.jpg",
                "https://i.imgur.com/CmOZsgq.jpg"
                ]
            ]
        }`);
    // const [matchedImages, setMatchedImages] = useState(null);

    const renderMatchingImages = (image) => {
        let MI = {};
        if(matchedImages == null) return;
        else MI = JSON.parse(matchedImages);
        console.log(MI[image][1]);
        return MI[image][1].map((matchingImage) =>{
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
        let MI = {};
        if(matchedImages == null) return;
        else MI = JSON.parse(matchedImages);
        let matchingImages = Object.keys(MI);
        return matchingImages.map(image => {
                return (
                    <div>
                        Matching Image : 
                        <img src={image} width="100px" height="100px"/>
                        <br/>
                        Name : {MI[image][0]}
                        <div>
                            {renderMatchingImages(image)}
                        </div>
                    </div>
                );
            });
            
    }

    const renderLoding = () => {
        return <div>Loading...</div>
    }

    const getMatchedImages = async () => {
        let result = await Axios.get("https://relice.herokuapp.com/getinfo");
        return result;
    }

    useEffect(() => {
        getMatchedImages()
        .then((response) => setMatchedImages(response))
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