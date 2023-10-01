import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from '../../layouts';
import { SearchURLContext } from '../../contexts';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';

import { ProductCard } from '../../components/cards';

const product = { name: 'Cotton beige T-shirt', price: 700, currency: 'XAF' };

function PreviewItemScreen() {
	return (
		<React.Fragment>
			<SearchURLContext.Provider value={{ searchUrl: 'preview' }}>
				<NavBar />
			</SearchURLContext.Provider>
			<section className="section-preview">
				<div className="preview">
					<div className="preview-card">
						<div className="preview-image">
							<img src={require('./../../assets/images/sitting.jpg')} alt="" />
							<div className="preview-image__track">
								<span className={`track`}></span>
								<span className={`track`}></span>
								<span className={`track track-active`}></span>
							</div>
							<ArrowBackIosIcon className="arrow arrow-back" />
							<ArrowForwardIosIcon className="arrow arrow-front" />
						</div>
						<div className="preview-details">
							<div className="preview-details__profile">
								<div className="shop-profile">
									<img
										src={require('./../../assets/images/image8.jpg')}
										className="image-profile"
										alt="Profile"
									/>
									<div className="shop-name">
										<h3>Francisca</h3>
										<span>83 products</span>
									</div>
								</div>
								<Link to={'#'} className="btn btn--black">
									<span>Follow this store</span>
								</Link>
							</div>
							<div className="preview-detail">
								<h3>Toffe T-shit classic</h3>
								<span className="preview-detail__price">
									XAF
									<span className="current">700</span>
									<span className="cancel">XAF 1000</span>
								</span>
								<p className="preview-detail__desc">
									Manfinity Homeme Men Letter Patched Detail Tee & Drawstring
									Waist Track Shorts, Random Paisley Scarf Print Shirt & Shorts
									Without Tee
								</p>
								<div className="preview-detail__actions">
									<div className="action-btns">
										<div>
											<Link to={'#'} className="btn btn--black round">
												<span className="text">Size - XXL</span>
												<KeyboardArrowDownIcon />
											</Link>
											<Link to={'#'} className="btn btn--black round">
												<span className="text">Add to bag</span>
												<ShoppingBasketIcon />
											</Link>
										</div>

										<div>
											<Link to={'#'} className="btn btn--white round">
												<span className="text">Favorite</span>
												<FavoriteBorderIcon />
											</Link>
											<Link to={'#'} className="btn btn--white round">
												<span className="text">Share</span>
												<IosShareIcon />
											</Link>
										</div>
									</div>
									<div className="review">
										<div className="review-details">
											<div className="review__person">
												<h4>Reviews (15)</h4>
												<span>@dr. Dretheboss</span>
												<span className="stars">
													<StarIcon />
													<StarIcon />
													<StarIcon />
													<StarIcon />
													<StarIcon />
												</span>
											</div>
											<div className="review__numbers">
												<span className="stars">
													<StarIcon />
													<StarIcon />
													<StarIcon />
													<StarIcon />
													<StarIcon />
												</span>
												<span className="description">
													Much better than any t-shirt I have ever bought before
												</span>
												<button className="btn btn--white">
													<span>see all</span>
													<KeyboardArrowDownIcon />
												</button>
											</div>
										</div>
										<div className="rate">
											<button className="btn btn--white round">
												Rate this product
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ArrowBackIcon className="back" />
				</div>
			</section>
			<section className="section-more">
				<h2>More Items From This Store</h2>
				<div className="products-item">
					{Array.from({ length: 6 }).map((_, index) => {
						return <ProductCard key={index} product={product} />;
					})}
					<button className="btn btn--white round">See More</button>
				</div>
			</section>
			<section className="section-addition">
				<h2>You may also like this</h2>
				<div className="products-item">
					{Array.from({ length: 10 }).map((_, index) => {
						return <ProductCard key={index} product={product} />;
					})}
				</div>
			</section>
		</React.Fragment>
	);
}

export default PreviewItemScreen;
