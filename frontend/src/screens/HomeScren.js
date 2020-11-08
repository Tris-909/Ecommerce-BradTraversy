import React from 'react'
import Product from '../components/Product';
import products from '../products';
import { Col, Row} from 'react-bootstrap';

function HomeScren() {
    return (
        <>
         <h1>Latest Product : </h1>
         <Row>
             {products.map((product, index) => {
                 return(
                     <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                     </Col>
                 );
             })}
         </Row>   
        </>
    )
}

export default HomeScren
