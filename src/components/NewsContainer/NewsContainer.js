import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({articles}) => {
	// console.log(articles)
	const articlesToDisplay = articles.map(article => {
		return (
			<NewsArticle articleInfo={article} />
		);
	})
	return (
		<section className="news-container">
			{articlesToDisplay}
		</section>
	);
}

export default NewsContainer;