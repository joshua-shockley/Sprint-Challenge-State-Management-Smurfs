import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { getSmurf } from '../action/index';

const SmurfList = ({state, getSmurf}) => {
let theProp = state.smurfs;
console.log(state.smurfs);
console.log(getSmurf);

useEffect(() => {
getSmurf();

},[getSmurf]); 

    return(
        <div>
            <h1>The Smurfs</h1>
             {theProp.map(theSmurfy => (
                 <section>
                    <div>Name: {theSmurfy.name}</div>
                    <div>Age: {theSmurfy.age}</div>
                    <div>Height: {theSmurfy.height}</div>
                </section>
             ))}
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state);
    return {
        state
        // name: state.name,
        // age: state.age,
        // height: state.height,
    }
}
export default connect(mapStateToProps, {getSmurf})(SmurfList);