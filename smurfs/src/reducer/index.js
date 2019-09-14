import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, POSTED_SMURFS_START, POSTED_SMURFS_SUCCESS, POSTED_SMURFS_FAILURE } from '../action/index.js';

export const initialState = {
    smurfs: [{
            name: '',
            age: null,
            height: '',
        },

    ]
}

// export const initialState = store.getstate();

export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING_SMURFS_START':
            return {
                ...state,
                smurfs: [...state.res, action.payload]
            };
        case 'FETCHING_SMURFS_SUCCESS':

        case 'FETCHING_SMURFS_SUCCESS':
            return {
                ...state,
                smurfs: [...state.smurfs, {
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height
                }]
            };
        case 'FETCHING_SMURFS_FAILURE':
            return {
                ...state,
                error: action.payload.error
            };

        case 'POSTED_SMURFS_START':
            return {
                ...state,
                smurfs: [...state.smurfs,
                    {
                        name: '',
                        age: null,
                        height: '',

                    },
                ]
            };
        case 'POSTED_SMURFS_SUCCESS':
            return {
                ...state,
                smurfs: [...state.smurfs, {
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height,

                }]
            };
        case 'POSTED_SMURFS_FAILURE':
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    };
};