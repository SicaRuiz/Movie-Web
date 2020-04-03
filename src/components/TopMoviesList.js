import React, { useEffect , useState} from 'react';
import axios from 'axios';
import  CardColumns from 'react-bootstrap/CardColumns';
import  Container  from 'react-bootstrap/Container';
import Movie from './Movie';

const TopMoviesList = () => {
    
    const [topMoviesList, SaveTopMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=927f2d7f4c8e1f2606022420021e33aa&language=es-Ar&page=3';

    const getTopMoviesAPI = async () => {
            await axios.get(url)
            .then(res => {
                SaveTopMovies(res.data.results)
                 console.log(res.data.results);
            });
           
    }

    useEffect(()=> {
        getTopMoviesAPI()
    }, []);

    return (  
        <Container className="mt-5"> 
            <div>
                <h1 className="text-white border-bottom mb-4">Top Ranking</h1>
            </div>
            <CardColumns className="mx-5">
            {
            topMoviesList.map(movie => (
                
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
 
export default TopMoviesList;