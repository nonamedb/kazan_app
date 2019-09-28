import { SET_VK_INFO } from '../actionTypes';

const initialState = {
    vkInfo: {},
};

export default function(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case SET_VK_INFO: {
            newState.vkInfo = action.payload;
            return newState;
        }
        default: return state;
    }
}
  