import React from "react";
import "./Menu.css";

const Menu = (props) => {
	const topicArray = Object.keys(props.topics);
	const topicList = topicArray.map((topic) => {
		return (
			<li key={topic} onClick={props.selectTopic}>
				{topic.charAt(0).toUpperCase() + topic.slice(1)}
			</li>
		);
	});

	return (
		<section className="menu">
			<h1 className="title">
				FAKE <span>NEWS</span>
			</h1>
			<ul className="categories">{topicList}</ul>
		</section>
	);
};

export default Menu;
