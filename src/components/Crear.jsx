import { useState } from 'react';



export const Crear = () => {

    const titleComponent = "Añadir películas";
    const [ movieState, setmovieState ] = useState({})
    const getFormValues = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }
        setmovieState(movie);
        //Guardar en el local storage
        
    }

    return (
        <>
            <div className="add">
                <h3 className="title">{ titleComponent }</h3>
                <strong>
                    { (movieState.title && movieState.description) && "Has creado la película: " + movieState.title }
                </strong>

                <form onSubmit={ getFormValues }>
                    <input type="text"
                        id="title"
                        name="title"
                        placeholder="Título" />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Descripción"></textarea>
                    <input className="edit"
                        id="save"
                        type="submit"
                        value="Guardar" />
                </form>
            </div>
        </>
    )
}
