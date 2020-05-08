import React from "react";
import PropTypes from "prop-types";
import NewsArticle from "../NewsArticle/NewsArticle";
import "./NewsContainer.css";

const NewsContainer = ({ articles }) => {
	const articlesToDisplay = articles.map((article) => {
		return <NewsArticle key={article.id.toString()} {...article} />;
	});
	return <section className="news-container">{articlesToDisplay}</section>;
};

NewsContainer.propTypes = {
	article: PropTypes.array,
};

export default NewsContainer;
