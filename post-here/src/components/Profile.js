import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchProfile } from "../actions/fetchProfile";

// const [posts, setPosts] = useState([
//   {
//     post: "title1",
//     text: "text1"
//   },
//   {
//     post: "Hello",
//     text: "goodbye"
//   },
//   {
//     post: "Friday",
//     text: "end of buildweek"
//   }
// ]);

const Profile = props => {
  useEffect(() => {
    props.fetchProfile();
  }, []);
  return (
    <>
      {props.predictions.map(savedPost => (
        <>
          <p>{savedPost.article}</p>
          <p>{savedPost.subreddit}</p>
        </>
      ))}
      {/* {props.predictions.subreddit} */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    predictions: state.getPredictionsReducer.predictions
  };
};

export default connect(mapStateToProps, { fetchProfile })(Profile);
