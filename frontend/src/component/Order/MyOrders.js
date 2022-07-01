import React, { Fragment, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './myOrders.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, myOrders } from '../../actions/orderAction';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Typography from '@material-ui/core/Typography';
import MetaData from '../layout/MetaData';
import LaunchIcon from '@material-ui/icons/Launch';
import Header from '../layout/Header/Header';

const MyOrders = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      type: 'number',
      // minWidth: 50,
      flex: 0.2,
    },
    { field: 'id', headerName: 'Order ID', minWidth: 30, flex: 0.3 },

    {
      field: 'status',
      headerName: 'Status',
      // minWidth: 10,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, 'status') === 'Delivered'
          ? 'btn-success text-center text-white rounded-2'
          : 'btn-danger text-center text-white rounded-2';
      },
      // cellClassName: 'btn-info text-center text-white rounded-2',
    },

    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      // minWidth: 270,
      flex: 0.3,
    },

    {
      field: 'actions',
      flex: 0.3,
      headerName: 'Details',
      // minWidth: 150,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, 'id')}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      console.log(item.orderItems[0].name);
      rows.push({
        name: item.orderItems[0].name,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <div className='myOrdersPage'>
            <Header style={{ width: '100%' }} />
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className='myOrdersTable'
              autoHeight
            />

            <Typography id='myOrdersHeading'>{user.name}'s Orders</Typography>
          </div> */}

          <div class='projects mb-4'>
            <div class='projects-inner'>
              <header class='projects-header'>
                <div class='title'> My Orders </div>
                <i class='zmdi zmdi-download'></i>
              </header>
              <table class='projects-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th> Status</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                {orders &&
                  orders.map((item) => (
                    <tr>
                      <td>
                        <p>{item.orderItems[0].name}</p>
                      </td>
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

                      <td>
                        <p>{item.totalPrice}</p>
                      </td>

                      <td>
                        <Link to={`/order/${item._id}`}>
                          <LaunchIcon />
                        </Link>

                        {/* <Button onClick={() => deleteOrderHandler(item._id)}>
                      <DeleteIcon />
                    </Button> */}
                      </td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default MyOrders;
