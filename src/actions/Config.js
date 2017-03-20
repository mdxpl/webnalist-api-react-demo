import Config from '../config';
import {FETCH_CONFIG} from './';

export function fetchConfig()
{
    return {
        type: FETCH_CONFIG,
        payload: Config
    };
}
