import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active: note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    console.log(formValues);
    const {body,title} =formValues;
    return (
        <div className = "notes__main-content">
            <NotesAppBar />
            <div className = "notes__content">
                    <input
                        type = "text"
                        placeholder = "Título..."
                        className = "notes__title-input"
                        value ={title}
                        onChange={handleInputChange}
                        
                    />
                    <textarea
                        placeholder = "Que paso hoy?"
                        className = "notes__textarea"
                        value ={body}
                        onChange={handleInputChange}
                    >

                    </textarea>

                    {  
                        (note.url) &&
                        <div className = "notes__image">
                            <img 
                                src = "https://deydrums.com/proyectos/react-hereosapp/static/media/marvel-iron.b394df11.jpg"
                                alt = "image"
                            />
                        </div>
                    }

            </div>
        </div>
    )
}
