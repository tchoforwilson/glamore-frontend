import React from 'react';
import { NavBar } from '../../layouts';
import { SearchURLContext } from '../../contexts';
import { ProductCard, CategoryCard } from '../../components/cards';

const product = { name: 'Cotton beige T-shirt', price: 700, currency: 'XAF' };
const category = { name: 'Shirts', img: 't-shirt.jpg' };

function CategoryOptionScreen() {
	return (
		<React.Fragment>
			<SearchURLContext.Provider value={{ searchUrl: '' }}>
				<NavBar />
			</SearchURLContext.Provider>
			<main>
				<section className="section-sellers">
					<h2>Explore Our Best Sellers</h2>
					<div className="seller">
						{Array.from({ length: 3 }).map((_, index) => (
							<div className="seller-item">
								<img
									className="seller-item__image"
									src={require('./../../assets/images/t-shirt.jpg')}
									alt="seller"
								/>
								<span className="seller-item__name">Lotus Brown Jackets</span>
							</div>
						))}
					</div>
				</section>
				<section className="section-categories">
					<h2>Browse Categories</h2>
					<div className="categories">
						{Array.from({ length: 14 }).map((_, index) => (
							<CategoryCard category={category} key={index} />
						))}
					</div>
				</section>
				<section className="section-products">
					<h2>The Essentials</h2>
					<div className="product-item">
						{Array.from({ length: 20 }).map((_, index) => (
							<ProductCard key={index} product={product} />
						))}
					</div>
				</section>
			</main>
		</React.Fragment>
	);
}

export default CategoryOptionScreen;
