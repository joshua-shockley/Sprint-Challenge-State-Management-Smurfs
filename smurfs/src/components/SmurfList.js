import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getSmurf } from '../action/index';


const SmurfList = (props) => {
console.log(props);
var theData = props.smurfs;
useEffect(() => {
props.getSmurf();
},[]);

// const handleClick = e => {
//     e.preventDefault();
//     props.delete(deleteSmurf);
// }


    return(
        <div>
            <h1>The Smurfs</h1>
             {theData.map(theSmurfy => (
                 <section>
                    <div>{theSmurfy.name}</div>
                    <div>Age: {theSmurfy.age}</div>
                    <div>Height: {theSmurfy.height}</div>
                    <button>smurf died</button>
                </section>
             ))}
        </div>
    );
}
const mapStateToProps = state => ({
 smurfs: state.smurfs,
 fetchingSmurfs: state.fetchingSmurfs,
    });
export default connect(mapStateToProps, {getSmurf})(SmurfList);