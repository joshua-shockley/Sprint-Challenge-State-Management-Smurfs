import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, POSTED_SMURFS_START, POSTED_SMURFS_SUCCESS, POSTED_SMURFS_FAILURE } from '../action/index.js';

export const initialState = {
    smurfs: [],
    error: '',
    addingSmurfs: false,
    fetchingSmurfs: false,
    deletingSmurfs: false
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_SMURFS_START':
            return {
                ...state,
                error: '',
                fetchingSmurfs: true
            };
        case 'FETCHING_SMURFS_SUCCESS':
            return {
                ...state,
                error: '',
                fetchingSmurfs: false,
                smurfs: action.payload
            };
        case 'FETCHING_SMURFS_FAILURE':
            return {
                ...state,
                error: 'fetching failed'
            };
        case 'ADD_SMURFS_START':
            return {
                ...state,
                addingSmurf: true,
                error: ''
            }
        case 'ADD_SMURFS_SUCCESS':
            return {
                ...state,
                addingSmurf: false,
                error: '',
                smurfs: action.payload
            }
        case 'ADD_SMURFS_FAILURE':
            return {
                ...state,
                error: 'adding failed'
            }

        case 'POSTED_SMURFS_START':
            return {
                ...state,
                addingSmurf: true,
                error: ''
            };
        case 'POSTED_SMURFS_SUCCESS':
            return {
                ...state,
                addingSmurf: false,
                error: '',
                smurfs: action.payload
            };
        case 'POSTED_SMURFS_FAILURE':
            return {
                ...state,
                error: 'failed adding/posting smurf'
            };
        default:
            return state;
    };
};