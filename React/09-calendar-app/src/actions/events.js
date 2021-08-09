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

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({
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