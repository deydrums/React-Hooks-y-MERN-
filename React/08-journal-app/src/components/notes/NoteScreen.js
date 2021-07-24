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
                            src = "https://64.media.tumblr.com/b38f6615b179cff391fc31456895f6ab/9d110a7eb7405c5c-6f/s2048x3072/f8905f13c648107d1f218b9902f588dfd4ddcb6e.jpg"
                            alt = "image"
                        />
                    </div>

            </div>
        </div>
    )
}
