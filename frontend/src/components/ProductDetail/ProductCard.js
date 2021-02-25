import React, {useState} from 'react';
import {Col, Row, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const ProductCard = ( props ) => {
    const history = useHistory();
    const [quantity, setQuantity] = useState(1);
    const {price, countInStock, id} = props;

    const { user } = useSelector(state => state.user);


    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${quantity}`);
    }

    return (
        <Col md={4}>
            {
                user ? user.isAdmin === true ? (
                    <Link className="btn btn-dark my-3" to={`/admin/products/${id}/edit`}>Admin Edit</Link> 
                ) : null : null
            }
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>${price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                <strong>{countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty:</Col>
                                <Col>
                                    <Form.Control 
                                        style={{ padding: "0.5rem 0.75rem" }}
                                        as="select" 
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}>
                                            {
                                            [...Array(countInStock).keys()].map(x => 
                                                (<option key={x+1} value={x+1}> {x+1} </option>))
                                            }        
                                    </Form.Control> 
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button 
                            onClick={addToCartHandler}
                            className="btn-block" 
                            type="button"
                            disabled={countInStock === 0}>
                                ADD TO CART
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    )
}

export default ProductCard;
