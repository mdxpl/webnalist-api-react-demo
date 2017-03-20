import {FETCH_PUBLISHERS, FETCH_PUBLISHER} from '../actions/Publisher'

const INITIAL_STATE = {
    publishers: [],
    publisher: null
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case FETCH_PUBLISHERS :
            return {
                ...state,
                publishers: state.publishers.concat(action.payload.data)
            };

        case FETCH_PUBLISHER :
            return {
                ...state,
                publisher: action.payload.data
            }

    }

    return state;
}
