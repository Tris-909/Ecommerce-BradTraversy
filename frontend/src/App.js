import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import AdminUserInfoScreen from './screens/AdminUserInfoScreen';
import ProductListAdminScreen from './screens/ProductListAdminScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import AdminOrdersScreen from './screens/AdminOrdersScreen';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} exact /> 
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/shipping" component={ShippingScreen} exact />
          <Route path="/payment" component={PaymentScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/orders/:id" component={OrderScreen} />
          <Route path="/admin/usersList" component={AdminScreen} exact />
          <Route path="/admin/users/:id/edit" component={AdminUserInfoScreen} />
          <Route path="/admin/productsList" component={ProductListAdminScreen} />
          <Route path="/admin/products/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/ordersList" component={AdminOrdersScreen} exact />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
