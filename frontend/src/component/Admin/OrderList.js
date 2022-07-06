import React, { Fragment, useEffect } from 'react';

import './productList.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Button } from '@material-ui/core';
import MetaData from '../layout/MetaData';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SideBar from './Sidebar';
import './dashboard.css';
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from '../../actions/orderAction';
import { DELETE_ORDER_RESET } from '../../constants/orderConstants';

const OrderList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders);
  console.log(orders);
  // console.log(orders[0].orderItems[0].name);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success('Order Deleted Successfully');
      history.push('/admin/orders');
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />

      <SideBar />

      <div class='projects mb-4' style={{ marginLeft: '210px', width: '84%' }}>
        <div class='projects-inner'>
          <header class='projects-header'>
            <div class='title'>Order List</div>
            <i class='zmdi zmdi-download'></i>
          </header>
          <table class='projects-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th> KG</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>

            {orders &&
              orders.map((item) => (
                <tr>
                  <td>
                    <p>{item._id}</p>
                  </td>

                  <td>
                    <p
                      class={
                        item.orderStatus === 'Delivered'
                          ? 'badge bg-success text-white'
                          : item.orderStatus === 'Shipped'
                          ? 'badge bg-warning text-white'
                          : item.orderStatus === 'Processing'
                          ? 'badge bg-info text-white'
                          : 'badge bg-danger text-white'
                      }
                    >
                      {item.orderStatus}
                    </p>
                  </td>

                  <td class='member'>
                    <div class='member-info'>
                      <p>{item.orderItems[0].quantity}</p>
                    </div>
                  </td>
                  <td>
                    <p>{item.totalPrice}</p>
                  </td>

                  <td>
                    <Link to={`/admin/order/${item._id}`}>
                      <EditIcon />
                    </Link>

                    <Button onClick={() => deleteOrderHandler(item._id)}>
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
