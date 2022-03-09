import React, { useState } from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const DisLikeButton = (props) => {
  const [DisLikes, setButtonClassDisLike] = useState("inactive");

  function handleClick() {
    if (DisLikes === "inactive") {
      setButtonClassDisLike("active-dislike");
    } else {
      setButtonClassDisLike("inactive");
    }
  }
  return (
    <div>
      <img
        src={ThumbDownIcon}
        className={DisLikes}
        onClick={handleClick}
      />
    </div>
  );
};

export default DisLikeButton;