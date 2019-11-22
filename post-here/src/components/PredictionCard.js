import React from 'react';
import {connect} from 'react-redux'
import {Form} from 'formik'

const PredictionCard = (props)=>{
    
    return(
        <Form>
            <p>{props.prediction}</p>
            <button>Save</button>
            <button>Post</button>
        </Form>
    )
    
}
const mapStateToProps = state => {
    return {
      prediction: state.predictReducer.prediction,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  export default connect(mapStateToProps,{})(PredictionCard)
