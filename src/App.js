import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost";
import CreatePost from "./Components/CreatePost";
import LikeButton from "./Components/LikeButton";
import DisLikeButton from "./Components/DislikeButton";
import NavBar from "./Components/Navbar";

function App(){
    const[post, setPost] = useState([{name: 'Darth Vader', post: 'Luke I am your father',}])

    function AddNewPost(postss){
        let tempPost = [...post, postss];
        setPost(tempPost)
    }

    return(
        <div className="container-fluid">
          <h1 style={{ margin: "1em" }}>
            Social <small className="text-muted">Feed</small>
      </h1>
      <div className="row">
        <CreatePost postProperty={AddNewPost}/>
      </div>
        <div className="row">
        <DisplayPost parentPost={post}/> 
      </div>
    </div>
  );
}

export default App;





//             <NavBar/>
//             <CreatePost postProperty={AddNewPost}/>
//             <DisplayPost parentPost={post}/>
//         </div>
//   );
// }
        
       
// export default App;

