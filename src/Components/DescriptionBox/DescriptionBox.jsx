import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptonbox-description">
        <p>An e-commerce website, short for 
            "electronic commerce website," is an online platform
             that allows businesses and individuals to buy and
              sell products and services over the internet.
              These websites serve as digital marketplaces where
               customers can browse through various products, add 
               them to a virtual shopping cart, and complete the purchase
                by making online payments.</p>
        <p>E-commerce websites can range from small,
             independent online stores to large, 
             multinational marketplaces like Amazon
              and eBay. They have become increasingly 
              popular for buying and selling goods and
               services due to their convenience, accessibility,
                and the wide variety of products available online.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
