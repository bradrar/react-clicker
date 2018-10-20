

import { combineReducers, createStore } from 'redux';
import  counterReducer  from '../Reducers/counter-reducer'


const allReducer = combineReducers ({
    counter: counterReducer
})

export const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    
