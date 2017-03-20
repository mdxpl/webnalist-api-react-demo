import {FETCH_ARTICLES, FETCH_ARTICLE} from '../actions'

const INITIAL_STATE = {
    articles: [],
    article: null,
    completedList: false
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case FETCH_ARTICLES :
            return {
                ...state,
                articles: state.articles.concat(action.payload.data),
                completedList: !action.payload.data.length
            };

        case FETCH_ARTICLE :
            return {
                ...state,
                article: action.payload.data
            }

    }

    return state;
}
