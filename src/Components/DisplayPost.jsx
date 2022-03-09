import React, { useState } from "react";
import DisLikeButton from "./DislikeButton";
import LikeButton from '@mui/icons-material/ThumbUp';

const DisplayPost = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentPosts.map((post, index) => {
          return (
            <div key={index}>
              <div>{post.name}</div>
              <div>{post.post}</div>
              <LikeButton className="like" />
              <DisLikeButton message="DisLike" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPost;





// import React, { useState } from 'react';



// const DisplayPost = (props) => {
//     return (
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Post</th>
//             </tr>
//         </thead>
//             <tbody>
//                 {props.parentPost.map((postss, index)=> {
//                     return(
//                         <tr key={index}>
//                             <td>{postss.name}</td>
//                             <td>{postss.post}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//     </table>

//       );
// }

 
// export default DisplayPost;