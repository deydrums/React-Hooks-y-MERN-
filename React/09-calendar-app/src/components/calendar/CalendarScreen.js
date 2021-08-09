import React, { useEffect, useState } from 'react'
import { Navbar } from '../ui/Navbar'
// the imports
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive, eventStartLoading, eventUnsetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mier_Jue_Vier_Sab'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  })
moment.locale('es');

const localizer = momentLocalizer(moment)



export const CalendarScreen = () => {
    const dispatch = useDispatch();
    //TODO leer del store, los eventos
    const {events} = useSelector(state =>state.calendar);
    const {uid} = useSelector(state =>state.auth);

    const [lastView, setlastView] = useState(localStorage.getItem('lastView')||'month');



    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch])


    const eventos = events.map((event, i)=>({
        ...event,
        start: moment(event.start).toDate(),
        end: moment(event.end).toDate()
    }));

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setlastView(e);
        localStorage.setItem('lastView',e);
    }


    const onSelectSlot = (e) => {
        dispatch(eventUnsetActive());
    }

    const eventStyleGetter = (event, start, end, isSelected) =>{

        const style ={
            backgroundColor: (uid === event.user._id) ? '#367CF7': '#465660',
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
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                messages = {messages}
                eventPropGetter= {eventStyleGetter}
                onDoubleClickEvent = {onDoubleClick}
                onSelectEvent = {onSelectEvent}
                onView = {onViewChange}
                view ={lastView}
                onSelectSlot = {onSelectSlot}
                selectable = {true}
                components={{
                    event: CalendarEvent
                }}
                />
            </div>
                <AddNewFab/>
                <CalendarModal/>
        </div>
    )
}
