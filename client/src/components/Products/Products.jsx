import React, { useState } from 'react'
import '../../css/Products/Products.css'
import ProductModal from './ProductModal';
export default function Products(props) {

    const [product, setproduct] = useState("");

    const openModal = (product) => {
        setproduct(product)
    }

    const closeModal = ()=>{
        setproduct(false)
    }
    return (
        <div className='products-wrapper'>
            {props.products.map(product => (
                <div key={product.id} className="product-item">
                    <a href='#' onClick={() => openModal(product)}>
                        <img src={product.imageUrl} alt={product.title} className='w-100' />
                    </a>
                    <div className='product-desc d-flex justify-content-between mx-2 my-2'>
                        <h5 className=''>{product.title}</h5>
                        <h5 className=''>${product.price}</h5>
                    </div>
                    <button className='btn w-100'>Add To Cart</button>
                </div>
            ))}
            <ProductModal product={product} closeModal={closeModal} />
        </div>
    )
}
