import axios from 'axios';

/**
 * Fetch all publishers list
 *
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function fetchPublishers()
{
    const PUBLISHERS_URL = `${API_URL}/publisher`;
    const request = axios.get(PUBLISHERS_URL);

    return {
        type: FETCH_PUBLISHERS,
        payload: request
    };
}

/**
 * Fetch publisher by id
 *
 * @param id
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function fetchPublisher(id) {

    const PUBLISHER_URL = `${API_URL}/publisher/${id}`;
    const request = axios.get(PUBLISHER_URL);

    return {
        type: FETCH_PUBLISHER,
        payload: request
    };

}
