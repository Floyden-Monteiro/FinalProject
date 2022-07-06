import React, { Fragment, useEffect } from 'react';

import './productList.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from '../../actions/productAction';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Button } from '@material-ui/core';
import MetaData from '../layout/MetaData';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SideBar from './Sidebar';
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
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
      alert.success('Product Deleted Successfully');
      history.push('/admin/dashboard');
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <SideBar />

      

      <div class='projects mb-4' style={{ marginLeft: '210px', width: '84%' }}>
        <div class='projects-inner'>
          <header class='projects-header'>
            <div class='title'>All Products</div>
            <i class='zmdi zmdi-download'></i>
          </header>
          <table class='projects-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Id</th>
                <th> Stock</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            {products &&
              products.map((item) => (
                <tr>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item._id}</p>
                  </td>

                  <td>
                    <p className='text'>{item.Stock}</p>
                  </td>

                  <td>
                    <p>{item.price}</p>
                  </td>

                  <td>
                    <Link to={`/admin/product/${item._id}`}>
                      <EditIcon />
                    </Link>

                    <Button onClick={() => deleteProductHandler(item._id)}>
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

export default ProductList;
