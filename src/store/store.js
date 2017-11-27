import createStore from 'redux-zero'

const initialState = {
   successLogin : false,
   user : {
       id : null, 
       email : null,
       name : null,
       shooppingCard : []
   }
};

const store = createStore (initialState);
export default store;   