import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Searcher = ({ listState, setListState }) => {
    const [ searchState, setSearchState ] = useState('');
    const [ noFoundState, setNoFoundState ] = useState(false);

    const searchMovie = (e) => {
        const searchValue = e.target.value; 

        setSearchState(searchValue); 

        // eslint-disable-next-line react/prop-types
        let foundMovies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(searchValue.toLowerCase());
        });

        if (searchValue.length <= 1 || foundMovies.length <= 0) {
            foundMovies = JSON.parse(localStorage.getItem('movies'));
            setNoFoundState(true);
        } else {
            setNoFoundState(false);
        }

        console.log(searchValue); 
        setListState(foundMovies);
    };

    return (
        <div className="search">
            <h3 className="title">Buscador: { searchState }</h3>
            { noFoundState && searchState.length > 2 && <span className="no-found">Película no encontrada</span> }
            <form action="">
                <input
                    type="text"
                    id="search_field"
                    name="search"
                    autoComplete="off"
                    placeholder="Busca tu película"
                    onChange={ searchMovie }
                />
                <button className="edit">Buscar</button>
            </form>
        </div>
    );
};
