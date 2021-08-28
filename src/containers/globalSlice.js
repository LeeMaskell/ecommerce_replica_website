import { createSlice } from 'react-redux';


let initialState = [];
// reducer for original guitars (use for all guitars?)
export const globalReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'add':
            return [...state, action.payload]; // spread operator separetes out state array components and adds action.payload to the array
        case 'remove':
            return [...state].filter(x => x != action.payload);
        default:
            return [...state];
    }
}

// action creator
export const add = (arg) => { // arg is a placeholder for the model card info that will be passed in for the payload to be added
    console.log(arg);
    return {
        type: 'add',
        payload: arg
    }
}

export const remove = (arg) => {
    console.log(arg);
    return {
        type: 'remove',
        payload: arg
    }
}

// selector function 
export const selectData = state => state; // this function replaces the requiremnt for props in App.js and defines which state a component will need to access

export default { globalReducer, add, remove, selectData }; // this export allows the above to be imported into components