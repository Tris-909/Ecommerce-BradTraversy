import {
    GET_TOP_GAMES_REQUEST,
    GET_TOP_GAMES_SUCCESS,
    GET_TOP_GAMES_FAIL,
} from '../actions/actionTypes';

const topGameInitalState = {
    topGames: [],
    loading: false,
    error: null
}

export const topGameReducer = (state = topGameInitalState, action) => {
    switch(action.type) {
        case GET_TOP_GAMES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOP_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                topGames: [...action.payload]
            }
        case GET_TOP_GAMES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
