import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import ArticleListItem from '../components/ArticleListItem';
import {fetchArticles} from '../actions/Article'

/**
 * !!!window!!! Has window.{document, addEventListener} dependency.
 */
class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            completed: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.loadNextPage();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const doc = event.srcElement;
        const scrollTop = doc.body.scrollTop;
        const step = window.innerHeight;
        const threshold = (step * this.state.page) - 1000; //todo calc.
        if (scrollTop > threshold) {
            this.loadNextPage();
        }
    }

    loadNextPage() {

        if (this.props.articles.completedList) {
            return;
        }

        this.props.fetchArticles(this.state.page);

        this.setState({
            page: this.state.page + 1
        });

    }

    renderArticleListItems() {
        return this.props.articles.articles.map((article) =>
            <ArticleListItem
                article={article}
                key={article.id}
            />
        );
    }

    render() {
        return (
            <div className="article-list__wrapper">
                <section className="article-list">
                    {this.renderArticleListItems()}
                </section>
            </div>
        );
    }


}

function mapStateToProps({articles}) {
    return {articles}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchArticles}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);