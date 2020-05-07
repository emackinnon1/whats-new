import React from "react";
import PropTypes from 'prop-types';
import "./NewsArticle.css";

const NewsArticle = ({ img, headline, description, url }) => {
	return (
		<article>
				<img src={img} alt="Article image"/>
				<h4>{headline}</h4>
				<p>{description}</p>
				<a href={url}>Link to Article</a>
		</article>
	);
};

NewsArticle.propTypes = {
	articleInfo: PropTypes.object 
};

export default NewsArticle;
