import React, {useEffect} from 'react'
import Product from '../components/Product';
import { Col, Row, Spinner, Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getProductsList, getCarouselProducts} from '../redux/actions/productActions';
import {getTopTiersLaptop} from '../redux/actions/laptopActions';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import CarouselSection from '../components/Carousel';
import Helmet from '../components/Helmet';

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword;   
    const pageNumber = match.params.pageNumber || 1;
    const dispatch = useDispatch()
    const productsList = useSelector(state => state.productsList);
    const { products, page, pages, loading, error } = productsList;
    const { carouselProducts, loading: carouselLoading, error: carouselError } = useSelector(state => state.carouselProducts);
    const { topLaptops, loading: topLaptopLoading, error: topLaptopError } = useSelector(state => state.topLaptops);

    useEffect(() => {
        dispatch(getProductsList(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber])

    useEffect(() => {
        if (carouselProducts.length === 0) {
            dispatch(getCarouselProducts());
        }
    }, [dispatch, carouselProducts]);

    useEffect(() => {
        if (topLaptops.length === 0) {
            dispatch(getTopTiersLaptop());
        }
    }, [dispatch, topLaptops]);

    const checkIfErrorExisted = () => {
        if (error) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Something went wrong :(</Alert.Heading>
                    <p> {error.message} </p>
                </Alert>
            );
        } else {
            return(
                <>
                <Helmet title="Welcome to Proshop" href="" />
                <CarouselSection carouselProducts={carouselProducts} loading={carouselLoading} error={carouselError} />
                <h1>Products : </h1>
                <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                   { !loading ? products.length > 0 ? products.map((product) => {
                        return(
                            <Col sm={12} md={6} lg={6} xl={4} key={product._id}>
                               <Product product={product}/>
                            </Col>
                        );
                    }) : (
                        <Message variant="danger" content="Can't find your product, please try something else"/>
                    ) : <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
                   }
                </Row>
                <h1>Best Laptops : </h1>
                <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                   { !topLaptopLoading ? topLaptops.length > 0 ? topLaptops.map((laptop) => {
                        return(
                            <Col sm={12} md={6} lg={6} xl={4} key={laptop._id}>
                               <Product product={laptop}/>
                            </Col>
                        );
                    }) : (
                        <Message variant="danger" content="Something is wrong, please try to reload"/>
                    ) : <Spinner animation="border" size="lg" style={{ width: '100px', height: '100px' }} /> 
                   }
                </Row>
                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />   
                </>
            )
        }
    }

    return(checkIfErrorExisted());
}

export default HomeScreen;
