import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Money} from './Money';
import {ArticleAuthor} from './ArticleAuthor';
import {ArticleThumbnail} from './ArticleThumbnail';
import {Config} from '../config';

class ArticleListItem extends Component {

    render() {

        const article = this.props.article;
        const title = article.title;
        const subtitle = article.subtitle;
        const price = article.price.amount;

        return (
            <div className="article-item">
                <Link to={`/article/${article.id}`}>
                    <div className="article-item__head">

                        <ArticleAuthor publisher={article.publisher}/>

                        <div className="article-item__price">
                            <Money value={price} locale={Config.locale.fallback} />
                        </div>
                    </div>

                    <ArticleThumbnail article={article}/>

                    <div className="article-item__body">
                        <div className="article-item__title">{title}</div>
                        <div className="article-item__subtitle">{subtitle}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ArticleListItem;