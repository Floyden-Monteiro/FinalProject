import React, { Fragment, useEffect, useState } from 'react';
import './newProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, createProduct } from '../../actions/productAction';
import { useAlert } from 'react-alert';
import { Button } from '@material-ui/core';
import MetaData from '../layout/MetaData';

import SideBar from './Sidebar';
import { NEW_PRODUCT_RESET } from '../../constants/productConstants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faBoxOpen,
  faList,
  faIndianRupeeSign,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons';

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    'Butter Cake',
    'Sponge Cake',
    'Baked Flourless Cake',
    ''
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success('Product Created Successfully');
      history.push('/admin/dashboard');
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('price', price);
    myForm.set('description', description);
    myForm.set('category', category);
    myForm.set('Stock', Stock);

    images.forEach((image) => {
      myForm.append('images', image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title='Create Product' />
      <div className='dashboard'>
        <SideBar />
        <div className='newProductContainer'>
          <form
            className='createProductForm'
            encType='multipart/form-data'
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <FontAwesomeIcon
                icon={faFileSignature}
                className='fa-solid fa-lg'
              />
              <input
                type='text'
                placeholder='Product Name'
                required
                value={name}
                style={{ margin: '8px' }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className='fa-reagular fa-lg'
              />
              <input
                type='number'
                placeholder='Price'
                required
                style={{ margin: '8px' }}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <FontAwesomeIcon icon={faPen} className='fa-reagular fa-lg' />

              <textarea
                placeholder='Product Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols='30'
                style={{ margin: '8px' }}
                rows='1'
              ></textarea>
            </div>

            <div>
              <FontAwesomeIcon icon={faList} className='fa-reagular fa-lg' />
              <select
                onChange={(e) => setCategory(e.target.value)}
                style={{ margin: '8px' }}
              >
                <option value=''>Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <FontAwesomeIcon icon={faBoxOpen} className='fa-reagular fa-lg' />

              <input
                type='number'
                placeholder='Stock'
                required
                onChange={(e) => setStock(e.target.value)}
                style={{ margin: '8px' }}
              />
            </div>

            <div id='createProductFormFile'>
              <input
                type='file'
                name='avatar'
                accept='image/*'
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id='createProductFormImage'>
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt='Product Preview' />
              ))}
            </div>

            <Button
              id='createProductBtn'
              type='submit'
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
