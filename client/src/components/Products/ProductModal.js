import React from 'react'
import Modal from 'react-modal'

export default function ProductModal(props) {
    const {product, closeModal} = props;
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
                <span className='close-modal' onClick={closeModal}>&times;</span>
                <div className='product-info'>
                    <img src={product.imageUrl} alt={product.title}/>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            </Modal>
  )
}
