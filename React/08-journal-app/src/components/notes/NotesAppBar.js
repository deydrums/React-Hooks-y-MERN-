import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';
import moment from 'moment';

export const NotesAppBar = () => {
    const date = new Date().getTime();
    moment.updateLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      })
    const todayDate = moment(date);


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
            <span>{todayDate.format('dddd, Do MMMM yy')}</span>
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
