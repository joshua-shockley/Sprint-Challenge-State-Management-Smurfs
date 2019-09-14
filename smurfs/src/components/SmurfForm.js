import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {addSmurf} from '../action/index.js';



 const SmurfForm = (props) => {
console.log(props);
const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

const handleChange = event=> {
    setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
}

 const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf('');
    }


    return(
        <form>
            <h3>Add Smurf/Smurfete Below</h3>
            <fieldset>
                <input
                type="text"
                name="name"
                placeholder="Smurf Name"
                onChange={handleChange}
                value={newSmurf.name}
                />
                <input
                type="text"
                name="age"
                placeholder="Smurf Age"
                onChange={handleChange}
                value={newSmurf.age}
                />
                <input
                type="text"
                name="height"
                placeholder="Smurf height"
                onChange={handleChange}
                value={newSmurf.height}
                />

              <button className="add-smurf-button" 
              type="submit"
              onClick={handleSubmit}>
                  Add Smurf
              </button>
            </fieldset>
        </form>
    ); 
}
const mapStateToProps = state =>{
    console.log(state);
    return(
        state
    );
};
export default connect(mapStateToProps, {addSmurf})(SmurfForm);