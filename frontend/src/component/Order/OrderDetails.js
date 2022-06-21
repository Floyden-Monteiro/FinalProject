import React, { Fragment, useEffect } from 'react';
import './orderDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import MetaData from '../layout/MetaData';
import { Link } from 'react-router-dom';
import { p } from '@material-ui/core';
import { getOrderDetails, clearErrors } from '../../actions/orderAction';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='Order Details' />
          <div
            className='orderDetailsPage'
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <div className='orderDetailsContainer'>
              <p>Shipping Info</p>
              <div className='orderDetailsContainerBox'>
                <div>
                  <p className='fw-bolder'>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p  className='fw-bolder'>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p  className='fw-bolder'>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.pinCode}`}
                  </span>
                </div>
              </div>
              <p>Payment</p>
              <div className='orderDetailsContainerBox'>
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === 'succeeded'
                        ? 'btn-success text-center text-white rounded-2 p-3'
                        : 'btn-danger text-center text-white rounded-2 p-2'
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === 'succeeded'
                      ? 'PAYMENT SUCCESSFULL'
                      : 'PAYMENT NOT SUCCESSFULL'}
                  </p>
                </div>

                <div>
                  <p style={{ fontWeight: '500' }} className='fw-bolder fs-6'>
                    Amount:
                  </p>
                  <span className='fw-bolder fs-6'>
                  ₹ {order.totalPrice && order.totalPrice}
                  </span>
                </div>
              </div>
            </div>
            <div className='or'>
              <p style={{ fontSize: '25px' }}>Order Status</p>
              <div className='orderDetailsContainerBox'>
                <p
                  style={{ width: '140px' }}
                  className={
                    order.orderStatus && order.orderStatus === 'Delivered'
                      ? 'btn-success text-center text-white rounded-2 p-2 border-1'
                      : 'btn-danger text-center text-white rounded-2 p-2'
                  }
                >
                  {order.orderStatus && order.orderStatus}
                </p>
              </div>
              <p component='h6'>Order #{order && order._id}</p>

              <div className='orderDetailsCartItems'>
                <p style={{ marginLeft: '-65px' }}>Order Items</p>
                <div className='orderDetailsCartItemsContainer'>
                  {order.orderItems &&
                    order.orderItems.map((item) => (
                      <div key={item.product}>
                        <img src={item.image} alt='Product' />
                        <Link to={`/product/${item.product}`}  className='fw-bolder'>
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
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
