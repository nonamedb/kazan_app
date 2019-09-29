import { SET_VK_INFO, GET_USER_INFO } from '../actionTypes';

const initialState = {
    vkInfo: {},
    userInfo: {},
};

export default function(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case SET_VK_INFO: {
            newState.vkInfo = action.payload;
            return newState;
        }
        case GET_USER_INFO: {
            console.log('pay', action.payload)
            newState.userInfo = action.payload;
            return newState;
        }
        default: return state;
    }
}
  