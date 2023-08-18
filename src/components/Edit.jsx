

// eslint-disable-next-line react/prop-types
export const Edit = ({ movie, getMovies, setEditState, setListState }) => {
  const titleComponent = "Editar película";
  const saveEdition = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const storedMovies = getMovies();

    // eslint-disable-next-line react/prop-types
    const index = storedMovies.findIndex(movie => movie.id === id);

    let updateMovie = {
      id,
      title: target.title.value,
      description: target.description.value
    }
    //Update movie with this id
    storedMovies[ index ] = updateMovie;
    //Save the movie in local storage
    localStorage.setItem("movies", JSON.stringify(storedMovies));
    setListState(storedMovies);
    setEditState(0);
  }

  return (
    <div className="sidebar edit">
      <h3 className="titleComponent">{ titleComponent }</h3>
      {/* eslint-disable-next-line react/prop-types*/ }
      <form onSubmit={ e => saveEdition(e, movie.id) }>
        <input type="text"
          name="title"
          // eslint-disable-next-line react/prop-types
          defaultValue={ movie.title } />
        <textarea
          name="description"
          // eslint-disable-next-line react/prop-types
          defaultValue={ movie.description } />
        <input type="submit"
          className="edit"
          value="actualizar" />
      </form>
    </div>
  )
}
