import React from 'react';
import { BackButton } from '../../components/buttons';
import { FiShare } from 'react-icons/fi';

function StoreProfile() {
	return (
		<div className="store">
			<section className="store-profile">
				<div className="profile">
					<img
						className="profile__background"
						src={require('./../../assets/images/hat-boy.png')}
						alt="hat boy"
					/>
					<div className="profile__logo">
						<img src={require('./../../assets/moreimg/img2.jpg')} alt="logo" />
					</div>
					<span className="btn-previous">
						<BackButton />
					</span>
					<div className="profile__details">
						<h3>Francisca'a Fashion Store</h3>
						<span>83 products</span>
						<div className="action">
							<button className="action__follow">Follow this Store</button>
							<button className="action__share">
								share <FiShare />
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="store-products">
				<h4>Featured Products</h4>
				<div className="products">
					{
						//Generate array of length 20
						Array.from({ length: 20 }, (_, index) => index + 1).map(
							(num, index) => {
								return (
									<div className="products-card" key={index}>
										<img
											src={require('./../../assets/images/shirts.png')}
											alt="product name"
										/>
										<div className="products__detail">
											<span className="products__name">
												Cotton beige T-shirt
											</span>
											<span className="products__price">xaf 700</span>
										</div>
									</div>
								);
							}
						)
					}
				</div>
			</section>
		</div>
	);
}

export default StoreProfile;
