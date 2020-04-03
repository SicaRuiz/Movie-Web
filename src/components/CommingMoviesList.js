import React, { useEffect , useState} from 'react';
import axios from 'axios';
import  CardColumns from 'react-bootstrap/CardColumns';
import  Container  from 'react-bootstrap/Container';
import Movie from './Movie';

const CommingMoviesList = () => {

    const [commingMoviesList, SaveCommingMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=927f2d7f4c8e1f2606022420021e33aa&language=es-AR&page=1';

    const getCommingMoviesAPI = async () => {
            await axios.get(url)
            .then(res => {
                SaveCommingMovies(res.data.results)
                 console.log(res.data.results);
            });
           
    }

    useEffect(()=> {
        getCommingMoviesAPI()
    }, []);

    return (  
        <Container className="mt-5"> 
            <div>
                <h1 className="text-white border-bottom mb-4">Ultimas Peliculas</h1>
            </div>
            <CardColumns className="mx-5">
            {
            commingMoviesList.map(movie => (
                
                    <Movie
                    key={movie.id}
                    movie={movie}>
                    </Movie>
                
            ) )
            }
            </CardColumns>

        </Container>

     );
}
 
export default CommingMoviesList;