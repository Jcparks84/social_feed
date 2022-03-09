import React, { useState } from "react";
import Buttons from "./Buttons";
import './DisplayPost.css'

const DisplayPost = (props) => {

  return (
    <div>
      
        {props.parentPost.map((post, index) => {
          return (
            <div key={index}>
              <h4>{post.name}</h4>
              <h4>{post.post}</h4>
              <Buttons/>
            </div>
             
          );
        })}
      
    </div>
  );
};

export default DisplayPost;

