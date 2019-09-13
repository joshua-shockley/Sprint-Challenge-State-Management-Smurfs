import { FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADD_SMURF, GET_SMURF } from '../action/index.js';

export const initialState = {
    smurfs: [{
            name: '',
            age: null,
            height: '',
        },

    ]
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_SMURF':
            return {
                ...state,
                smurfs: [...state.smurfs,
                    {
                        name: action.payload,
                        age: action.payload,
                        height: action.payload,

                    },
                ]
            };
        case 'GET_SMURF':
            return {
                ...state,
                smurfs: [state]
            };
        default:
            return state;
    };
};