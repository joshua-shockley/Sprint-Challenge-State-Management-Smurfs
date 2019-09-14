import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import { getSmurf } from '../action/index';
import axios from 'axios';


const SmurfList = (props) => {
// let theProp = props.state.smurfs;
// console.log(props);
// console.log(getSmurf);

// useEffect(() => {
// props.getSmurf();

// },[props.getSmurf]); 
const [theData, setTheData]= useState({})
useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res.data)
            const theProp = res.data;
            setTheData(theProp)
        })
        .catch(err => {
            return err
        });


},[]);

    return(
        <div>
            <h1>The Smurfs</h1>
             {theData.map(theSmurfy => (
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
    return { state
        // name: state.name,
        // age: state.age,
        // height: state.height,
    }
}
export default connect(mapStateToProps, {getSmurf})(SmurfList);