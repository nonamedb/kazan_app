import { GET_EVENTS, SET_DETAILED_ID, GET_DETAILED } from '../actionTypes';

const initialState = {
    events: [],
    eventDetailedId: '',
    detailed: {},
};

export default function(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_EVENTS: {
            newState.events = action.payload.events;
            return newState;
        };
        case GET_DETAILED: {
            newState.detailed = action.payload;
            return newState;
        };
        case SET_DETAILED_ID: {
            newState.eventDetailedId = action.payload.id;
            return newState;
        };
        default: return state;
    }
}
  