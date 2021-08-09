
import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {

        const {uid, name} = getState().auth;

        try {
            const resp = await fetchWithToken('events', event, 'POST');
            const body = await resp.json();
            if(resp.ok){
                event.id = body.eventDB.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch(eventAddNew(event));
            }
            
        } catch (error) {
            console.log(error);
        }

    }
}


const eventAddNew = (event) => ({
    type: types.eventAddnew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventUnsetActive = () => ({
    type: types.eventUnsetActive
});

export const eventStartUpdate = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`events/${event.id}`,event,'PUT');
            const body = await resp.json();
            if (resp.ok) {
                dispatch(eventUpdated(event));
            }else{
                Swal.fire('Error', body.msg, 'error');
            }       
        } catch (error) {
            console.log(error);
        }
    }
}

const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartDelete = () => {
    return async (dispatch, getState) => {

        const {id} = getState().calendar.activeEvent;
        try {
            const resp = await fetchWithToken(`events/${id}`,{},'DELETE');
            const body = await resp.json();
            if (resp.ok) {
                dispatch(eventDeleted());
            }else{
                Swal.fire('Error', body.msg, 'error');
            }       
        } catch (error) {
            console.log(error);
        }
    }
}

const eventDeleted = () => ({
    type: types.eventDeleted
});

export const eventStartLoading = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken('events');
            const body = await resp.json();
            const events = body.events;
            dispatch(eventLoaded(events));
            
        } catch (error) {
            console.error(error);
        }
    }
}

const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
})