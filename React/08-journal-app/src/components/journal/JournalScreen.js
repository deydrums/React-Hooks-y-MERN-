import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
    const btnmoreClick = () => { 
        const q = document.querySelector('.journal__sidebar');
        q.classList.toggle('journal__active');
    }
    const btnmoreOutClick = () => { 
        const q = document.querySelector('.journal__sidebar');
        q.classList.remove('journal__active');
    }
    
    return (
        <div className = "journal__main-content animate__animated animate__fadeIn" >
            <Sidebar/>
            <main onClick = {btnmoreOutClick}>
                {/* <NothingSelected/> */}
                <NoteScreen />
            </main>
            <a 
                className = "journal__btnmore"
                onClick={btnmoreClick}
            >
                <i className="far fa-calendar-plus fa-2x"></i>
            </a>
        </div>
    )
}
