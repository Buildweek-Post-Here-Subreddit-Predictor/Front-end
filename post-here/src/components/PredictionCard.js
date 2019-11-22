import React from "react";
import { connect } from "react-redux";
import { savePost } from "../actions/savePost";

const PredictionCard = props => {
  console.log("props", props);
  return (
    <>
      {props.prediction ? (
        <>
          <p>{props.prediction}</p>
          <button onClick={e => props.savePost(e, props.values)}>Save</button>
          <button>Post</button>
        </>
      ) : null}
    </>
  );
};
const mapStateToProps = state => {
  return {
    prediction: state.predictReducer.prediction,
    isFetching: state.predictReducer.isFetching,
    error: state.predictReducer.error
  };
};
export default connect(mapStateToProps, { savePost })(PredictionCard);
