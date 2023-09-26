import React from 'react';

function CategoryCard({ category, ...otherProps }) {
	return (
		<div className="category-item">
			<img
				className="category-item__image"
				src={require(`./../../assets/images/${category.img}`)}
				alt="category"
			/>
			<span className="category-item__name">{category.name}</span>
		</div>
	);
}

export default CategoryCard;
