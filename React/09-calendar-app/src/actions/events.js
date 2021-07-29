import { types } from "../types/types";


export const eventAddNew = (event) => ({
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