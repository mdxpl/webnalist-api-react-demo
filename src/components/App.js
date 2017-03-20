import React, {Component} from 'react';

import Header from '../components/layout/Header';
import {Route} from 'react-router-dom';

import ArticleList from '../containers/ArticleList';
import ArticleShow from '../containers/ArticleShow';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <Route exact path="/" component={ArticleList} />
                <Route path="/article/:id" component={ArticleShow} />

            </div>
        );
    }
}
