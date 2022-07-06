import React, { useEffect } from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';

import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminProduct } from '../../actions/productAction';
import { getAllOrders } from '../../actions/orderAction.js';
import { getAllUsers } from '../../actions/userAction.js';
import MetaData from '../layout/MetaData';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  // let outOfStock = 0;

  // products &&
  //   products.forEach((item) => {
  //     if (item.Stock === 0) {
  //       outOfStock += 1;
  //     }
  //   });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ['Initial Amount', 'Amount Earned'],
    datasets: [
      {
        label: 'TOTAL AMOUNT',
        backgroundColor: ['tomato'],
        hoverBackgroundColor: ['rgb(197, 72, 49)'],
        data: [0, totalAmount],
      },
    ],
  };

 

  return (
    <div className='dashboard'>
      <MetaData title='Dashboard - Admin Panel' />
      <Sidebar className='mt-5' />

      <div className='dashboardContainer'>
        <div className='dashboardSummary'>
          <div class='container5'>
            <div class='card5'>
              <div class='box5'>
                <div class='content5'>
                  <h2>{products && products.length}</h2>
                  <h1 style={{ color: 'white', opacity: '0.8' }}>Products</h1>
                </div>
              </div>
            </div>

            <div class='card5'>
              <div class='box5'>
                <div class='content5'>
                  <h2>{orders && orders.length}</h2>
                  <h1 style={{ color: 'white', opacity: '0.8' }}>Order</h1>
                </div>
              </div>
            </div>

            <div class='card5'>
              <div class='box5'>
                <div class='content5'>
                  <h2>{users && users.length}</h2>
                  <h1 style={{ color: 'white', opacity: '0.8' }}>Users</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='lineChart'>
          <Line data={lineState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
