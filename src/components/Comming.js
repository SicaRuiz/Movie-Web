import React from 'react';
import Card from 'react-bootstrap/Card';



const Comming = ({movie}) => {

    let imgurl = ' https://image.tmdb.org/t/p/w500/' + movie.poster_path;

    return ( 
        
            <Card  style={{ width: '20rem' }}>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
            </Card>
        
     );
}
 
export default Comming;