import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const POSTED_SMURFS_START = 'POSTED_SMURF_START';
export const POSTED_SMURFS_SUCCESS = 'POSTED_SMURFS_SUCCESS';
export const POSTED_SMURFS_FAILURE = 'POSTED_SMURFS_SUCCESS';

export const getSmurf = (smurfs) => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res })
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response });
        });
};


export const addSmurf = ({name,age,height}) => dispatch => {
    dispatch({ type: POSTED_SMURFS_START });
     axios.post(`http://localhost:3333/smurfs`, {name, age, height})
        .then(resData => {
            // console.log('posted dude');
            dispatch({ type: POSTED_SMURFS_SUCCESS, payload: resData })
        })
        .catch(err => {
            dispatch({ type: POSTED_SMURFS_FAILURE, payload: err });
        });

};
