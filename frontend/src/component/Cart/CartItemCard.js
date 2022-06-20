import React from 'react';
import './CartItemCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className='CartItemCard'>
      <img src={item.image} alt='ssa' style={{ wdith: '1000px' }} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Link
          style={{
            fontSize: '20px',
            fontWeight: 'bolder',
            fontFamily: 'arial',
            width: '65px',
          }}
          to={`/product/${item.product}`}
        >
          {item.name}
          {`   ₹${item.price}`}
        </Link>

        {/* <span style={{paddingLeft:"0px"}}>{`Price: ₹${item.price}`}</span> */}
        <p
          style={{ paddingLeft: '150px' }}
          onClick={() => deleteCartItems(item.product)}
        >
          {' '}
          <FontAwesomeIcon
            style={{ color: 'black' }}
            icon={faTrash}
            className='fa-light  fa-3x'
          />
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
