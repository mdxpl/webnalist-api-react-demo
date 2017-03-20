import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {fetchArticle} from '../actions/Article'

class ArticleShow extends Component {

    componentWillMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    render() {

        if(!this.props.article){
            return <div>loading...</div>;
        }

        const article = this.props.article;

        return (
            <div className="article-show">
                <h1>{article.title}</h1>
                <em>
                    <Moment format="D MMMM YYYY" locale="pl">{article.publishedAt}</Moment>
                    / {article.publisher.name}
                    / {article.category.name}
                    </em>
                <p>{article.subtitle}</p>
                <p>
                    <img src={article.headerImage.url} alt="" />
                </p>
                <div dangerouslySetInnerHTML={{__html: article.lead}} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {article: state.articles.article};
}

export default connect(mapStateToProps, {fetchArticle})(ArticleShow);