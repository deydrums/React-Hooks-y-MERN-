import React from 'react';
import moment from 'moment';

export const JournalEntry = ({id, date, title, body, url}) => {
    moment.defineLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      })
    const noteDate = moment(date);
    console.log(noteDate);
    return (
        <div className="journal__entry pointer">
            {
                url &&
                <div 
                    className="journal__entry-picture"
                    style = {{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >
            
                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do MMM')}</h4>
            </div>
        </div>
    )
}
