import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className = "notes__main-content">
            <NotesAppBar />
            <div className = "notes__content">
                    <input
                        type = "text"
                        placeholder = "Título..."
                        className = "notes__title-input"
                    />
                    <textarea
                        placeholder = "Que paso hoy?"
                        className = "notes__textarea"
                    >

                    </textarea>

                    <div className = "notes__image">
                        <img 
                            src = "https://deydrums.com/proyectos/react-hereosapp/static/media/marvel-iron.b394df11.jpg"
                            alt = "image"
                        />
                    </div>

            </div>
        </div>
    )
}
