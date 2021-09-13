import './App.css';
import './SearchMovies';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div className="App">
      <div className="container">
          <h1 className="title">My Movie Database</h1>
          <SearchMovies />
          <p></p>
          </div>
    </div>
  );
}

export default App;
