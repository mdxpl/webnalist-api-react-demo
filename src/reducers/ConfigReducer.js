import {FETCH_CONFIG} from '../actions/Config'
import {Config} from '../config'

const INITIAL_STATE = {
    config: Config,
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case FETCH_CONFIG :
            return {
                ...state,
                config: action.payload
            };
    }

    return state;
}
