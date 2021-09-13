import React from "react";

const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
    
    const query = "little women"
    try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d8955e427ed83abc4f49a8b15207ec3e&language=en-US&page=1&query=${query}&include_adult=false`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    } catch(err) {
        console.err(err)
    }
}

export default function SearchMovies() {
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query" >Movie Name</label>
            <input className="input" type="text" name="query" placeholder="enter a movie" />
            <button className="button" type="submit">Submit</button>
        </form>
    );
}


