import React from "react";
import { connect } from "react-redux";
import { savePost } from "../actions/savePost";

const PredictionCard = props => {
  console.log("props", props);
  return (
    <>
      {/* {props.prediction.map(post => (
        <>
          <p>{post.article}</p>
          <p>{post.prediction}</p>
        </>
      ))} */}
      {/* {props.prediction[0].prediction.article} */}
      <button onClick={e => props.savePost(e, props.prediction)}>Save</button>
      <button>Post</button>
    </>
  );
};
const mapStateToProps = state => {
  return {
    prediction: [
      {
        article: state.predictReducer.article,
        prediction: state.predictReducer.prediction
      }
    ],
    isFetching: state.predictReducer.isFetching,
    error: state.predictReducer.error
  };
};
export default connect(mapStateToProps, { savePost })(PredictionCard);
