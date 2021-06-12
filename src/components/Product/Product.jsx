import React from 'react';
import cx from 'clsx';
import './Product.scss';

export function Product({className, id, title, address, type, price, ...props}) {
   return (
     <div className={cx(className, 'product')} {...props}>
        <div className="product__img-wrapper">
         <img className='product__image' src="https://via.placeholder.com/377x227/45852D/FFFFFF?text=image" alt={title} width="377" height="227"/>
         {type && (
            <div 
               className={cx(
                  'product__label', 
                  type === 'IndependentLiving' && 'product__label--living', 
                  type === 'SupportAvailable' && 'product__label--support',
               )}
            >
               {
                 type === 'IndependentLiving' 
                   ? 'Independent living' 
                   : type === 'SupportAvailable'
                     ? 'Restaurant & Support available'
                     : ''
               }
            </div>
         )}
        </div>
        <div className='product__info'>
           <h2 className='product__title'>{title}</h2>
           <p className="product__adress">{address}</p>
           <p className="product__price">New Properties for Sale from <span>£{price}</span></p>
           <p className="product__shared-ownership-availability">Shared Ownership Available</p>
        </div>
        <a className="product__link" href={`/details/${id}`}><span className="visually-hidden">{title}</span></a>
     </div>
   )
}
