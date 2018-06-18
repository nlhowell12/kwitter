import { createStore } from 'redux';
import '../actions';

const initialState = '';

const kwitterReducer = (state = initialState, action) => {
    switch(action.type) {
        
        default:
        return state;
    }
}

const store = createStore(kwitterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store