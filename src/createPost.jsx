import React, {useState} from "react";

const AddPost = (props) => {
    const [name, setName] = useState ("");
    const [post, setPost] = useState ("");

    function  handlePost(params) {
        params.preventdefaul();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost);
        props.addNewPost(newPost);
        
    }
}
return (
    <form onsubmit={handlePost}>
        <div className=
        
        </form>
)