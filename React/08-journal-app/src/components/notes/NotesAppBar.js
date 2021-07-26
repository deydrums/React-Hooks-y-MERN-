import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureUpload = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files;
        if(file){
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2021</span>
            <input
                type="file"
                style = {{display:'none'}}
                onChange={handleFileChange}
                id = "fileSelector"
                name = "file"
            />

            <div>
                <button className="btn" onClick = {handlePictureUpload}>
                    Fotografía
                </button>
                <button className="btn" onClick={handleSave}>
                    Guardar
                </button>
            </div>
        </div>
    )
}
