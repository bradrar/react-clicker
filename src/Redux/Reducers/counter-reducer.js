import { COUNT } from '../Actions/counter-action';

const counterReducer = (state=0, action) => {
    switch (action.type) {
        case COUNT:
            return action.counter
        default:
            return state
    }
}

export default counterReducer;