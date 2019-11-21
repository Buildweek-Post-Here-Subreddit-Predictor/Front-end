import React from 'react';
import {predict} from '../actions/predict';
import {connect} from 'react-redux';

const PredictionCard = (props)=>{
    <ul>
        {props.predict(values).map(value=>{
        <li>{value}</li>
        })}
    </ul>
}

export default connect(null, {predict})(PredictionCard);