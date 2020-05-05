import React from "react";
import "./NewsArticle.css";

const NewsArticle = ({ articleInfo }) => {
	console.log(articleInfo);
	return (
		<article key={articleInfo.id}>
			<img src={articleInfo.img} />
			<h4>{articleInfo.headline}</h4>
			<p>{articleInfo.description}</p>
			<a href={articleInfo.url}>Link to Article</a>
		</article>
	);
};

export default NewsArticle;
