import React, {useState} from "react";
import "./SearchMovies.css"
import MovieCard from "./MovieCard.js"


export default function SearchMovies() {
//set query useState hook
const [query, setQuery] = useState('');

//set movie useState hook
const [movies, setMovies] = useState([]);

const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
    
    try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d8955e427ed83abc4f49a8b15207ec3e&language=en-US&page=1&query=${query}&include_adult=false`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    document.getElementById("movies").value =  setMovies
    } catch(err) {
        console.log(err)
    }
}

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query" >Movie Name</label>
                <input id="input" type="text" name="query" placeholder="enter a movie" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Submit</button>
                
            </form>
            <div className="card--list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} />
                ))}

            </div>
        </>
    );
}


