import React, {Component} from 'react';

export const ArticleAuthor = ({publisher, className = 'article-item__author'}) => {

    const author = publisher.name;
    const authorImageUrl = publisher.image;
    const imgClassName = className + '-image';

    return (
        <div className={className}>
            { authorImageUrl
                ? <img className={imgClassName} src={authorImageUrl} alt={author}/>
                : ''
            }
            <span>{author}</span>
        </div>
    );

};


