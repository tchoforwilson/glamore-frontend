import React from 'react'
import { BackButton } from '../../components/buttons'
import {FiShare} from 'react-icons/fi'
import storeStyles from './store-profile.module.css'

function StoreProfile() {
  return (
    <div className={storeStyles.store}>
      <section className={storeStyles.storeProfile}>
        <div className={storeStyles.profile}>
          <img className={storeStyles.profileBackground} src={require('./../../assets/images/hat-boy.png')} alt='hat boy' />
          <div className={storeStyles.profileLogo}>
            <img src={require('./../../assets/moreimg/img2.jpg')} alt="logo" />
          </div>
          <span className={storeStyles.btnPrevious}>
            <BackButton />
          </span>
          <div className={storeStyles.profileDetails}>
            <h3>Francisca'a Fashion Store</h3>
            <span>83 products</span>
            <div className={storeStyles.action}>
              <button className={storeStyles.actionFollow}>Follow this Store</button>
              <button className={storeStyles.actionShare}>share <FiShare /></button>
            </div>
          </div>
        </div>
      </section>
      <section className={storeStyles.storeProducts}>
        <h4>Featured Products</h4>
        <div className={storeStyles.products}>
          { //Generate array of length 20
            Array.from({length: 20}, (_, index ) => index + 1).map((num, index) => {
              return (
                <div className={storeStyles.productCard} key={index}>
                  <img src={require('./../../assets/images/shirts.png')} alt="product name" />
                  <div className={storeStyles.productDetail}>
                    <span className={storeStyles.productName}>
                      Cotton beige T-shirt
                    </span>
                    <span className={storeStyles.productPrice}>
                      xaf 700
                    </span>
                  </div>
              </div>
              )
            })
          }

        </div>
      </section>
    </div>
  )
}

export default StoreProfile
