import React from 'react'
import '../../css/Products/Products.css'
export default function Products(props) {
    console.log(props.products)
    return (
        <div className='products-wrapper'>{props.products.map(product=>(
            <div key={product.id} className="product-item">
                <img src={product.imageUrl} alt={product.title} className='w-100'/>
                <div className='product-desc d-flex justify-content-between mx-2 my-2'>
                    <h5 className=''>{product.title}</h5>
                    <h5 className=''>{product.price}</h5>
                </div>
                <button className='btn w-100'>Add To Cart</button>
            </div>
        ))}</div>
    )
}
