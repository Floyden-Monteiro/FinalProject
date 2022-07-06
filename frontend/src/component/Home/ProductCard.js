import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link to={`/product/${product._id}`}>
      

      <div class='container'>
        <div class='card'>
          <div class='imgBx'>
            <img className='img' src={product.images[0].url} alt={product.name} />
          </div>
          <div class='contentBx'>
            <h2>{product.name}</h2>
            <div className='size'></div>
            <div >
              <span>
              </span>
                <Rating {...options} />
            </div>

            <a href='/'>{`₹${product.price}`}</a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
