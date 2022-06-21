import React, { Fragment } from 'react';
import CheckoutSteps from '../Cart/CheckoutSteps';
import { useSelector } from 'react-redux';
import MetaData from '../layout/MetaData';
import './ConfirmOrder.css';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax ;

  const address = `${shippingInfo.address}, ${shippingInfo.pinCode}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem('orderInfo', JSON.stringify(data));

    history.push('/process/payment');
  };

  return (
    <Fragment>
      <MetaData title='Confirm Order' />
      <CheckoutSteps activeStep={1} />
      <div className='confirmOrderPage'>
        <div>
          <div className='confirmshippingArea'>
            <Typography>Shipping Info</Typography>
            <div className='confirmshippingAreaBox'>
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className='confirmCartItems'>
            <Typography>Your Cart Items:</Typography>
            <div className='confirmCartItemsContainer'>
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt='Product' />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{' '}
                    <span>
                      {item.quantity} X ₹{item.price} ={' '}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className='orderSummary'>
            <div class='row'>
              <div class='col-md-4'>
                <div class='pricing-table purple'>
                  <div class='pricing-label'>Order Summery</div>

                  <div class='pricing-features'>
                    <div class='feature'>
                      Subtotal :<span>{subtotal}</span>
                    </div>
                    <div class='feature'>
                      GST :<span>{tax}</span>
                    </div>
                    <div class='feature'>
                      Total:<span>₹{totalPrice}</span>
                    </div>
                  </div>

                  <div class='price-tag'>
                    {/* <span class='symbol'>$</span> */}
                    <span class='amount'>₹{totalPrice}</span>
                    {/* <span class='after'>/month</span> */}
                  </div>
                  <button
                    class='price-button'
                    style={{
                      border: 'none',
                      borderRadius: '20px',
                      paddingLeft: '22px',
                      paddingRight: '22px',
                    }}
                    onClick={proceedToPayment}
                  >
                    Proceed To Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
