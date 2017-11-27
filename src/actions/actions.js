import createStore from 'redux-zero';

const initialState = {
    successLogin : false,
    user: {
        id: null,
        email: null,
        name: null,
        shoppinCart : []
    } 
}