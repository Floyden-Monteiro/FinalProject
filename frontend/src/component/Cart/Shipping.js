import React, { Fragment, useState } from 'react';
import './Shipping.css';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingInfo } from '../../actions/cartAction';
import MetaData from '../layout/MetaData';
import PinDropIcon from '@material-ui/icons/PinDrop';
import HomeIcon from '@material-ui/icons/Home';

import PhoneIcon from '@material-ui/icons/Phone';

import { useAlert } from 'react-alert';
import CheckoutSteps from '../Cart/CheckoutSteps';

const Shipping = ({ history }) => {
  var todayDate = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowDate = tomorrow.toISOString().slice(0, 10);

  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);

  const [date, setDate] = useState(shippingInfo.date);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error('Phone Number should be 10 digits Long');
      return;
    } else if (date === todayDate || date === tomorrowDate) {
      alert.error('please order 2  days prior to the date you want to order');
      return;
    }
    dispatch(
      saveShippingInfo({
        address,
        pinCode,
        phoneNo,
        date,
      })
    );
    history.push('/order/confirm');
  };

  return (
    <Fragment>
      <MetaData title='Shipping Details' />

      <CheckoutSteps activeStep={0} />

      <div className='shippingContainer'>
        <div className='shippingBox'>
          <h2 className='shippingHeading'>Shipping Details</h2>

          <form
            className='shippingForm'
            encType='multipart/form-data'
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type='text'
                placeholder='Address'
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type='number'
                placeholder='Phone Number'
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size='10'
              />
            </div>
            <div>
              <PinDropIcon />
              <select
                name='pincode'
                id='pin'
                placeholder='pin code'
                onChange={(e) => setPinCode(e.target.value)}
              >
                <option value='574211'>574211</option>
                <option value='574222'>574222</option>
              </select>
            </div>

            <div>
              <input
                type='date'
                placeholder='Phone Number'
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                size='10'
              />
            </div>

            <input type='submit' value='Continue' className='shippingBtn' />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
