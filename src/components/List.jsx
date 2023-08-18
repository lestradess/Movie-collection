import { useEffect,useState } from "react";
import { Edit } from "./Edit";

// eslint-disable-next-line react/prop-types
export const List = ({ listState, setListState }) => {

    const [editState, setEditState]= useState(0);

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('movies'));
        setListState(movies);
        return movies;
    }
    const deleteMovie = (id) => {
        let savedMovies = getMovies();
        let newListMovies = savedMovies.filter(movies => movies.id !== parseInt(id));
        setListState(newListMovies);
        localStorage.setItem('movies', JSON.stringify(newListMovies));
    }

    return (
        <>
            { (listState != null) ?
                // eslint-disable-next-line react/prop-types
                listState.map(movie => {
                    return (
                        <article className="movie-item" key={ movie.title }>
                            <h3 className="title">{ movie.title }</h3>
                            <p className="description">{ movie.description }</p>
                            <button className="edit" onClick={ () => setEditState(movie.id) }>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                            {/*form editing*/}
                            {editState=== movie.id && (
                                <Edit movie={movie} 
                                getMovies={getMovies}
                                setEditState={setEditState}
                                setListState={setListState}/>
                            )}
                        </article>
                    )
                })
                : <h2>No hay películas para mostrar</h2>
            }
        </>
    );
}
