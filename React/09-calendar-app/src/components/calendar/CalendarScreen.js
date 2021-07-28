import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
// the imports
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mier_Jue_Vier_Sab'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  })
moment.locale('es');

const localizer = momentLocalizer(moment)
const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar pastel',
    user:{
        _id: '123',
        name: 'Pedro'
    }
}]


export const CalendarScreen = () => {
    const [lastView, setlastView] = useState(localStorage.getItem('lastView')||'month');

    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setlastView(e);
        localStorage.setItem('lastView',e);
    }
    const eventStyleGetter = (event, start, end, isSelected) =>{
        const style ={
            backgroundColor: '#367CF7',
            borderRadius:'0px',
            opacity:0.8,
            display: 'block',
            color: 'white'
        }
        return{
            style
        }
    }
    return (
        <div className = 'calendar-screen'>
            <Navbar/>
            <div className = 'calendar'>
                <Calendar 
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages = {messages}
                eventPropGetter= {eventStyleGetter}
                onDoubleClickEvent = {onDoubleClick}
                onSelectEvent = {onSelectEvent}
                onView = {onViewChange}
                view ={lastView}
                components={{
                    event: CalendarEvent
                }}
                />
            </div>
                <CalendarModal/>
        </div>
    )
}
