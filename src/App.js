import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost";

function App(){
    const[post, setPost] = useState([{name: 'Darth Vader', post: 'Luke I am your father',}])

    return(
        <div>
            <DisplayPost parentPost={post}/>
        </div>
        
       
    );
}
export default App;