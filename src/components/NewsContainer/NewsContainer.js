import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({articles}) => {
	const articlesToDisplay = articles.map(article => {
		return (
			<NewsArticle key={article.id.toString()} articleInfo={article} />
		);
	})
	return (
		<section className="news-container">
			{articlesToDisplay}
		</section>
	);
}

export default NewsContainer;