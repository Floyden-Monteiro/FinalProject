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
import { getAllUsers, clearErrors, deleteUser } from '../../actions/userAction';
import { DELETE_USER_RESET } from '../../constants/userConstants';

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      alert.success(message);
      history.push('/admin/users');
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />
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
                <th>Email</th>
                <th> Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            {users &&
              users.map((item) => (
                <tr>
                  <td>
                    <p>{item._id}</p>
                  </td>

                  <td>
                    <p className='text'>{item.email}</p>
                  </td>

                  <td class='member'>
                    <div class='member-info'>
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td>
                    <p
                      class={
                        item.role === 'admin'
                          ? 'badge bg-danger text-white'
                          : 'badge bg-info text-white'
                      }
                    >
                      {item.role}
                    </p>
                  </td>

                  <td>
                    <Link to={`/admin/user/${item._id}`}>
                      <EditIcon />
                    </Link>

                    <Button onClick={() => deleteUserHandler(item._id)}>
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

export default UsersList;
