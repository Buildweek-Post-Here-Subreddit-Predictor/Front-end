import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProfile } from "../actions/fetchProfile";

const Profile = props => {
  return (
    <>
      {useEffect(() => {
        props.fetchProfile();
      }, [])}
    </>
  );
};

export default connect(null, { fetchProfile })(Profile);
