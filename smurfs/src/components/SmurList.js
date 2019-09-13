import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

function SmurfList (props) {
let theProp = props.state.smurfs;

// console.log(props.state.smurfs);
console.log(theProp);
// const [blah, setBlah]=useState({});
// useEffect(() => {
//     axios.get(`http://localhost:3333/smurfs`)
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err =>{console.log(err.response)
//     })
// },[]);


    return(
        <div>
            <h1>The Smurfs</h1>
             {theProp.map(theSmurfy => (
                 <section>
                    <div>{theSmurfy.name}</div>
                    <div>{theSmurfy.age}</div>
                    <div>{theSmurfy.height}</div>
                    <div>{theSmurfy.id}</div>
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
        // id: state.id
    }
}
export default connect(mapStateToProps, {})(SmurfList);