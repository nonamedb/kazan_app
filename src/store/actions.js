import { GET_EVENTS, GET_DETAILED, SET_DETAILED_ID, SET_VK_INFO } from './actionTypes';
import store from './store';
import ax from 'axios';

export const getEvents = async () => {
    const events = await ax.get('https://jewel-cub.glitch.me/listEvents');

    return store.dispatch({
        type: GET_EVENTS,
        payload: { events: events.data },
    });
};

export const getDetailed = async (id) => {
    const info = await ax.get(`https://jewel-cub.glitch.me/eventDetail/${id}`);

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
