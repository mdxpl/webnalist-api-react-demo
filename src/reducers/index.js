import {combineReducers} from 'redux';
import ArticlesReducer from './ArticlesReducer'
import ConfigReducer from './ConfigReducer'
import PublishersReducer from './PublishersReducer'

const rootReducer = combineReducers({
    articles: ArticlesReducer,
    publishers: PublishersReducer,
    config: ConfigReducer
});

export default rootReducer;
