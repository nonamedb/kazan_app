import { GET_EVENTS, GET_DETAILED, SET_DETAILED_ID, SET_VK_INFO, GET_USER_INFO } from './actionTypes';
import store from './store';
import http from '../http';

export const getEvents = async () => {
    const events = await http.get('/event/list');

    return store.dispatch({
        type: GET_EVENTS,
        payload: { events: events.data },
    });
};

export const getDetailed = async (id) => {
    const info = await http.get(`/event/${id}`);

    return store.dispatch({
        type: GET_DETAILED,
        payload: info.data,
    });
};

export const setDetailedId = async (id) => {
    return store.dispatch({
        type: SET_DETAILED_ID,
        payload: { id },
    });
}

export const setVkInfo = async (info) => {
    return store.dispatch({
        type: SET_VK_INFO,
        payload: info,
    });
}

export const getUserInfo = async (userId) => {
    const data = await http.get(`/volunteer/${userId}`);

    return store.dispatch({
        type: GET_USER_INFO,
        payload: data.data,
    });
}

export const joinEvent = async (userId, eventId) => {
    http.get(`/volunteer/${userId}/join/${eventId}`);
}
