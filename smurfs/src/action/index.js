import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const POSTED_SMURFS_START = 'POSTED_SMURF_START';
export const POSTED_SMURFS_SUCCESS = 'POSTED_SMURFS_SUCCESS';
export const POSTED_SMURFS_FAILURE = 'POSTED_SMURFS_SUCCESS';

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response });
        });
};


export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: POSTED_SMURFS_START });
    axios.post(`http://localhost:3333/smurfs`, smurf)
        .then(res => {
            // console.log('posted dude');
            dispatch({ type: POSTED_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POSTED_SMURFS_FAILURE, payload: err });
        });

};