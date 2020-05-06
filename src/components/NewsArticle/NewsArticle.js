import React from "react";
import "./NewsArticle.css";

const NewsArticle = ({ articleInfo }) => {
	return (
		<article>
				<img src={articleInfo.img} alt="Article image"/>
				<h4>{articleInfo.headline}</h4>
				<p>{articleInfo.description}</p>
				<a href={articleInfo.url}>Link to Article</a>
		</article>
	);
};

export default NewsArticle;
