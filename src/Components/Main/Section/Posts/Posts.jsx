import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
    console.log(props)
    let postElement = props.posts.map(post => <Post message={post.message} likes={post.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <h3>My posts</h3>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}>Post</textarea>
            <button onClick={addPost}>Post</button>
            {postElement};
        </div>
    )
}

export default Posts;