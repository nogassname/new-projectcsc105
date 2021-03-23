import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Post from "../components/Post";
import "../App.css";
import "./Todo.css";

let id = 0;
const Todo = () => {
	const [posts, setPosts] = useState([]);

	function addPost(title) {
		const newPost = { id, title };
		setPosts([newPost, ...posts]);
		id += 1;
	}

	function deletePost(id) {
		const updatedPosts = posts.filter((post) => post.id != id);
		setPosts(updatedPosts);
	}
	return (
		<div className="App">
			<Input addPost={addPost} />
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					title={post.title}
					deletePost={deletePost}
				/>
			))}
		</div>
	);
};
export default Todo;
