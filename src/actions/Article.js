import axios from 'axios';
import {Config} from '../config';
import {FETCH_ARTICLES, FETCH_ARTICLE} from './';

/**
 * Fetch paginated articles list
 *
 * @param page
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function fetchArticles(page = 1) {
    const ARTICLES_URL = `${Config.apiUrl}/article`;
    const request = axios.get(ARTICLES_URL, {
        params: {
            page: page,
            limit: Config.articles.perPage.desktop //@todo add support for mobile and tablet
        }
    });

    return {
        type: FETCH_ARTICLES,
        payload: request
    };
}

/**
 * Fetch article by id
 *
 * @param id
 * @returns {{type: string, payload: AxiosPromise}}
 */
export function fetchArticle(id) {

    const ARTICLE_URL = `${Config.apiUrl}/article/${id}`;
    const request = axios.get(ARTICLE_URL);

    return {
        type: FETCH_ARTICLE,
        payload: request
    };

}