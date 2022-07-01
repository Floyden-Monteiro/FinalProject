import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push('/login');
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          {/* <div classNameName='profileContainer'>
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to='/me/update'>Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to='/orders'>My Orders</Link>
                <Link to='/password/update' class='btn btn-info ' >Change Password</Link>
              </div>
            </div>
          </div> */}

          <div class='row gutters-sm'>
            <div class='col-md-6 mb-3'>
              <div class='card'>
                <div class='card-body'>
                  <div class='d-flex flex-column align-items-center text-center'>
                    <img
                      src={user.avatar.url}
                      alt={user.name}
                      style={{ width: '200px', borderRadius: '10px' }}
                    />
                    <div class='mt-3'>
                      <h4 className="text-dark">{user.name}</h4>

                      <Link class='btn btn-primary' to='/orders'>
                        My Orders
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-md-8'>
              <div class='card mb-3'>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-sm-3'>
                      <h6 class='mb-0 text-dark'>Full Name</h6>
                    </div>
                    <div class='col-sm-9 text-dark'>{user.name}</div>
                  </div>

                  <hr />

                  <div class='row'>
                    <div class='col-sm-3'>
                      <h6 class='mb-0 text-dark'>Email</h6>
                    </div>
                    <div class='col-sm-9 text-dark'>{user.email}</div>
                  </div>

                  <hr />

                  <div class='row'>
                    <div class='col-sm-3'>
                      <h6 class='mb-0 text-dark'>Joined on</h6>
                    </div>
                    <div class='col-sm-9 text-dark'>
                      {String(user.createdAt).substr(0, 10)}
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-sm-12'>
                    <Link
                      class='btn btn-danger m-4'
                      target='__blank'
                      to='/me/update'
                    >
                      Edit
                    </Link>
                    <Link to='/password/update' class='btn btn-primary'>
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
