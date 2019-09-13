import axios from 'axios';

export const GET_SMURF = 'GET_SMURF';
export const POSTED_SMURF_START = 'POSTED_SMURF_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const POSTED_SMURFS_SUCCESS = 'POSTED_SMURFS_SUCCESS';
export const POSTED_SMURFS_FAILURE = 'POSTED_SMURFS_SUCCESS';

export const getSmurf = () => dispatch => {
    dispatch({ type: GET_SMURF });
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response });
        });
};


export const addSmurf = () => dispatch => {
    dispatch({ type: POSTED_SMURF_START });
    axios.post("http://localhost:3333/smurfs")
        .then(resData => {
            // console.log('posted dude');
            dispatch({ type: POSTED_SMURFS_SUCCESS, payload: resData })
        })
        .catch(err => {
            dispatch({ type: POSTED_SMURFS_FAILURE, payload: err.response });
        });

};

// export const postSmurf

// export const postSmurf = () => dispatch => {
//     dispatch({ type: SAVING_SMURF });
//     axios.post(`http://localhost:3333/smurfs`)
//         .then(res => {

//          })
//          .catch(err => {

//          });
// };