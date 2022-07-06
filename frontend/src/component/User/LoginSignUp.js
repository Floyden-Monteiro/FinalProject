import React, { Fragment, useRef, useState, useEffect } from 'react';
import './LoginSignUp.css';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';


import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login, register } from '../../actions/userAction';
import { useAlert, positions } from 'react-alert';

import './css/main.css';
import './css/util.css';

const LoginSignUp = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );


  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState('/Profile.png');
  const [avatarPreview, setAvatarPreview] = useState('/Profile.png');

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('avatar', avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (error) {
     
      alert.show(error, {
        position: positions.TOP_CENTER,
        transition: 'scale',
      });

      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  const switchTabs = (e, tab) => {
    if (tab === 'login') {
      switcherTab.current.classList.add('shiftToNeutral');
      switcherTab.current.classList.remove('shiftToRight');

      registerTab.current.classList.remove('shiftToNeutralForm');
      loginTab.current.classList.remove('shiftToLeft');
    }
    if (tab === 'register') {
      switcherTab.current.classList.add('shiftToRight');
      switcherTab.current.classList.remove('shiftToNeutral');

      registerTab.current.classList.add('shiftToNeutralForm');
      loginTab.current.classList.add('shiftToLeft');
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='LoginSignUpContainer'>
            <div className='LoginSignUpBox'>
             
              <div>
                <div className='login_signUp_toggle'>
                  <p onClick={(e) => switchTabs(e, 'login')}> USER LOGIN</p>
                  <p onClick={(e) => switchTabs(e, 'register')}>SIGNIN</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              

              <form
                className=' loginForm validate-form'
                ref={loginTab}
                onSubmit={loginSubmit}
                style={{
                  bordeRadius: '105px',
                }}
              >
                <div
                  className='wrap-input100 validate-input'
                  data-validate='Valid email is required: ex@abc.xyz'
                >
                  <input
                    className='input100'
                    type='email'
                    name='email'
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder='  Email'
                  ></input>
                  <span className='focus-input100'></span>
                  <span className='symbol-input100'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                </div>

                <div
                  className='wrap-input100 validate-input'
                  data-validate='Password is required'
                >
                  <input
                    className='input100'
                    type='password'
                    name='password'
                    placeholder='  password'
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  ></input>
                  <span className='focus-input100'></span>
                  <span className='symbol-input100'>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </span>
                </div>

                <input
                  type='submit'
                  value='Login'
                  className='btn btn-primary w-1'
                  style={{
                    padding: '10px',
                  }}
                />

                <div className='text-center p-t-136'>
                  <Link
                    className='container-login100-form-btn text-info'
                    style={{ textDecoration: 'none', Color: 'black' }}
                    to='/password/forgot'
                  >
                    Forget Password ?
                  </Link>
                </div>
              </form>

              

              <form
                className='signUpForm validate-form'
                ref={registerTab}
                encType='multipart/form-data'
                onSubmit={registerSubmit}
              >
                <div
                  className='wrap-input100 validate-input'
                  data-validate='Valid email is required: ex@abc.xyz'
                >
                  <input
                    className='input100'
                    type='text'
                    name='name'
                    required
                    pattern="[A-Za-z]+"
                    placeholder='  Name'
                    value={name}
                    onChange={registerDataChange}
                  ></input>
                  <span className='focus-input100'></span>
                  <span className='symbol-input100'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </span>
                </div>
                <div
                  className='wrap-input100 validate-input'
                  data-validate='Valid email is required: ex@abc.xyz'
                >
                  <input
                    className='input100'
                    type='email'
                    placeholder='  Email'
                    required
                    name='email'
                    value={email}
                    onChange={registerDataChange}
                  ></input>
                  <span className='focus-input100'></span>
                  <span className='symbol-input100'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                </div>

                <div
                  className='wrap-input100 validate-input'
                  data-validate='Password is required'
                >
                  <input
                    className='input100'
                    type='password'
                    placeholder='  Password'
                    required
                    name='password'
                    value={password}
                    onChange={registerDataChange}
                  ></input>
                  <span className='focus-input100'></span>
                  <span className='symbol-input100'>
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  </span>
                </div>

                <div id='registerImage'>
                  <img src={avatarPreview} alt='Avatar Preview' />
                  <input
                    type='file'
                    name='avatar'
                    accept='image/*'
                    onChange={registerDataChange}
                  />
                </div>
                <div className='container-login100-form-btn'>
                  <input type='submit' value='Register' className='signUpBtn' />
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
