import React from 'react';
import PropTypes from 'prop-types';

function Post ({id,title,deletePost}){
    return(
        <div className="Post">
            <button className="Post_delete" onClick={() => deletePost(id)}>X</button>
            <div className="Post_title">{title}</div>
            <img className="Post_image" src={'https://source.unsplash.com/random?slg=${id}'} />
        </div>
    )
}
 Post.propTypes={
     id: PropTypes.number.isRequired,
     title:PropTypes.string.isRequired,
     deletePost: PropTypes.func.isRequired
 };
export default Post;