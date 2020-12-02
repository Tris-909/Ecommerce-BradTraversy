// THIS PROJECT USING BETTER-COMMENT Expansions with VSCODE to see highlight comments (Tris)
//! PRODUCT
//TODO : GET ALL PRODUCTS 
export const GET_ALL_PRODUCTS_PENDING = 'GET_ALL_PRODUCTS_PENDING';
export const GET_ALL_PRODUCTS_FAIL = 'GET_ALL_PRODUCTS_FAIL';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';

//TODO : GET A PRODUCT BY ID
export const GET_SINGLE_PRODUCT_PENDING  = 'GET_SINGLE_PRODUCT_PENDING';
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
export const GET_SINGLE_PRODUCT_FAIL = 'GET_SINGLE_PRODUCT_FAIL';

//! CART
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART';
export const SAVE_SHIPPING_ADDRESS_CART = 'SAVE_SHIPPING_ADDRESS_CART';
export const SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD';
export const REMOVE_PRODUCTS_FROM_CART_AFTERBUY = 'REMOVE_PRODUCTS_FROM_CART_AFTERBUY';

//! USER
//TODO : LOGIN
export const LOGIN_USER_PENDING = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

//TODO : LOG-OUT
export const LOGOUT_USER = 'LOG_OUT';

//TODO : REGISTER
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
export const CLEAR_ERROR_SUBMIT =  'CLEAR_ERROR_SUBMIT';

//TODO : GET PERSONAL INFORMATION
export const GET_USER_DETAILS_PENDING = 'GET_USER_DETAILS_PENDING';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_FAIL = 'GET_USER_DETAILS_FAIL';
export const GET_USER_DETAILS_RESET = 'GET_USER_DETAILS_RESET';

//TODO : CHANGE PERSONAL INFORMATION
export const UPDATE_USER_DETAIL_PENDING = 'UPDATE_USER_DETAIL_PENDING';
export const UPDATE_USER_DETAIL_SUCCESS = 'UPDATE_USER_DETAIL_SUCCESS';
export const UPDATE_USER_DETAIL_FAIL = 'UPDATE_USER_DETAIL_FAIL';
export const UPDATE_USER_DETAIL_RESET = 'UPDATE_USER_DETAIL_RESET';

//! ORDER
//TODO : CREATE AN ORDER 
export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_REQUEST_SUCCESS = 'ORDER_CREATE_REQUEST_SUCCESS';
export const ORDER_CREATE_REQUEST_FAIL = 'ORDER_CREATE_REQUEST_FAIL';

//TODO: GET AN ORDER BASED ON ID
export const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID';
export const GET_ORDER_BY_ID_SUCCESS = 'GET_ORDER_BY_ID_SUCCESS';
export const GET_ORDER_BY_ID_FAIL = 'GET_ORDER_BY_ID_FAIL';

//TODO: UPDATE ORDER IS_PAID STATUS BASED ON ID
export const PUT_ISPAID_STATUS_ORDER_REQUEST = 'PUT_ISPAID_STATUS_ORDER_REQUEST';
export const PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS = 'PUT_ISPAID_STATUS_ORDER_REQUEST_SUCCESS';
export const PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL = 'PUT_ISPAID_STATUS_ORDER_REQUEST_FAIL';
export const PUT_ISPAID_STATUS_ORDER_RESET = 'PUT_ISPAID_STATUS_ORDER_RESET';

//TODO: GET ALL ORDERS OF ONE USER BASED ON THE USER ID
export const GET_ORDERS_OF_USERS = 'GET_ORDERS_OF_USERS';
export const GET_ORDERS_OF_USERS_SUCCESS = 'GET_ORDERS_OF_USERS_SUCCESS';
export const GET_ORDERS_OF_USERS_FAIL = 'GET_ORDERS_OF_USERS_FAIL';

//? return a null "state" when user logout, clear all the state of the current app 
export const GET_ORDER_OF_USER_RESET = 'GET_ORDER_OF_USER_RESET';

//! ADMIN
//TODO: GET ALL USERS FROM DATABASES 
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL';
export const GET_ALL_USERS_RESET = 'GET_ALL_USERS_RESET';

//TODO: DELETE AN USER BASED ON THERE ID AS AN ADMIN
export const DELETE_USER_AS_ADMIN_REQUEST = 'DELETE_USER_AS_ADMIN_REQUEST';
export const DELETE_USER_AS_ADMIN_SUCCESS = 'DELETE_USER_AS_ADMIN_SUCCESS';
export const DELETE_USER_AS_ADMIN_FAIL = 'DELETE_USER_AS_ADMIN_FAIL';

//TODO: GET A USER BASED ON HIS ID
export const GET_USER_AS_ADMIN_REQUEST = 'GET_USER_AS_ADMIN_REQUEST';
export const GET_USER_AS_ADMIN_SUCCESS = 'GET_USER_AS_ADMIN_SUCCESS';
export const GET_USER_AS_ADMIN_FAIL = 'GET_USER_AS_ADMIN_FAIL';

//TODO: UPDATE USER PROFILE AS AN ADMIN
export const UPDATE_USER_AS_ADMIN_REQUEST = 'UPDATE_USER_AS_ADMIN_REQUEST';
export const UPDATE_USER_AS_ADMIN_SUCCESS = 'UPDATE_USER_AS_ADMIN_SUCCESS';
export const UPDATE_USER_AS_ADMIN_FAIL = 'UPDATE_USER_AS_ADMIN_FAIL';

//TODO: DELETE A PRODUCT BASED ON IT ID AS AN ADMIN
export const DELETE_PRODUCT_AS_ADMIN_REQUEST = 'DELETE_PRODUCT_AS_ADMIN_REQUEST';
export const DELETE_PRODUCT_AS_ADMIN_SUCCESS = 'DELETE_PRODUCT_AS_ADMIN_SUCCESS';
export const DELETE_PRODUCT_AS_ADMIN_FAIL = 'DELETE_PRODUCT_AS_ADMIN_FAIL';
export const DELETE_PRODUCT_AS_ADMIN_RESET = 'DELETE_PRODUCT_AS_ADMIN_RESET';

//TODO: CREATE A SAMPLE PRODUCT AS AN ADMIN
export const CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST = 'CREATE_SAMPLE_PRODUCT_AS_ADMIN_REQUEST';
export const CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS = 'CREATE_SAMPLE_PRODUCT_AS_ADMIN_SUCCESS';
export const CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL = 'CREATE_SAMPLE_PRODUCT_AS_ADMIN_FAIL'; 
export const CREATE_SAMPLE_PRODUCT_RESET = 'CREATE_SAMPLE_PRODUCT_RESET';