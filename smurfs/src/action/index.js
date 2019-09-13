import axios from 'axios';
import { postSmurf } from './index';

export const GET_SMURF = 'GET_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
// export const addSmurf = (theSmurfed) => {
//     dispatch({ type: 'ADD_SMURF', payload: theSmurfed })
// };

export const getSmurf = () => dispatch => {
    dispatch({ type: GET_SMURF });
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response });
        })

};

export const postSmurf

// export const postSmurf = () => dispatch => {
//     dispatch({ type: SAVING_SMURF });
//     axios.post(`http://localhost:3333/smurfs`)
//         .then(res => {

//          })
//          .catch(err => {

//          });
// };