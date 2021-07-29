import moment from "moment";
import { types } from "../types/types";


const initialState ={
    events:[{
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
                activeEvent:action.payload
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
    
        default:
            return state;
    }
};