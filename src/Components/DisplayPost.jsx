import React, { useState } from "react";
import LikeButton from "./LikeButton";
import DisLikeButton from "./DislikeButton";
import Buttons from "./button";
import { Button } from "bootstrap";

// const DisplayPost = (props) => {
    
//   return (
//   <form>
//       <table>
//           <tbody className='div'>
//               {props.parentPost.map((post, index) =>{
//                   return (
//                       <tr key = {index}>
//                         <td>{post.name}</td>
//                         <td>{post.post}</td>  
//                         <LikeButton />
//                       </tr>
//                   )
//               })}
//           </tbody>
//       </table>
//   </form>
//   );
// }

// export default DisplayPost;




const DisplayPost = (props) => {

  return (
    <div>
      
        {props.parentPost.map((post, index) => {
          return (
            <div key={index}>
              <h1>{post.name}</h1>
              <h2>{post.post}</h2>
              <Buttons/>
            </div>
             
          );
        })}
      
    </div>
  );
};

export default DisplayPost;

