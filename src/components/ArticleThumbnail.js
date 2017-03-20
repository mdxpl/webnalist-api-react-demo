import React, {Component} from 'react';

export const ArticleThumbnail = ({article, className = 'article-item__image'}) => {

    const imageUrl = article.thumbnailImage.url;
    const title = article.title;

    return (
        <div className={className}>
            <img src={imageUrl} alt={title} />
        </div>
    );

};


