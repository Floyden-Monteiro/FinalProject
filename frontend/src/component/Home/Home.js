import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import imag from '../../images/imag.jpg';
import Card from './card';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section>
            <Container>
              <Row>
                <Col lg='6' md='6'>
                  <div className='hero__content'>
                    <h5 className='mb-3'>Easy way to make an order</h5>
                    <h1 className='mb-4 hero__title'>
                      <span>Looking for Cakes</span> Just wait <br /> at
                      <span> your door</span>
                    </h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Qui magni delectus tenetur autem, sint veritatis!
                    </p>
                  </div>
                </Col>

                <Col lg='6' md='6'>
                  <div className='hero__img'>
                    <img src={imag} alt='hero-img' className='w-100' style={{borderRadius:"60%"}} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <h2 className='homeHeading'>Featured Cake</h2>

          <div className='container' id='container'>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <section>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                  <h5 className='feature__subtitle mb-4'>What we serve</h5>
                  <h2 className='feature__title'>Just sit back at home</h2>
                  <h2 className='feature__title'>
                    we will <span>take care</span>
                  </h2>
                  <p className='mb-1 mt-4 feature__text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, officiis?
                  </p>
                  <p className='feature__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, eius.{' '}
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <div className='card1'>
            <Card />
            <Card />
            <Card />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
