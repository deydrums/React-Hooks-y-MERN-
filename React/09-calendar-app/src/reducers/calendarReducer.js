import moment from "moment";
import { types } from "../types/types";


const initialState ={
    events:[{
        id: new Date().getTime(),
        title: 'Cumpleaños del jefe',
        start: moment().format("YYYY-MM-DDTHH:mm"),
        end: moment().add(2, 'hour').format("YYYY-MM-DDTHH:mm"),
        bgcolor: '#fafafa',
        notes: 'Comprar pastel',
        user:{
            _id: '123',
            name: 'Pedro'
        }
    }],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent:{...action.payload,
                                start: moment(action.payload.start).format("YYYY-MM-DDTHH:mm"),
                                end: moment(action.payload.end).format("YYYY-MM-DDTHH:mm"),
                            }
            }
        case types.eventAddnew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventUnsetActive:
            return{
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
            return{
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }

        case types.eventDeleted:
            return{
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
                activeEvent: null
            }
            
                
        default:
            return state;
    }
};