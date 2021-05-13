import React from "react";
import PropTypes from "prop-types";

function Post({ id, title, deletePost }) {
  return (
    <div className="Post">
      <button className="Post_delete" onClick={() => deletePost(id)}>
        X
      </button>

      <div className="Post_title">hello1234</div>
    </div>
  );
}
Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
