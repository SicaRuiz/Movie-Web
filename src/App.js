import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TopMoviesList from './components/TopMoviesList';
import CommingMoviesList from './components/CommingMoviesList';


function App() {

  

  return (
    <div className="App">
      <Header />
      <TopMoviesList />
      <CommingMoviesList />
  
        
    </div>
  );
}

export default App;
