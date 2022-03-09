import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const LikeButton = (props) => {
  const [Like, setButtonClassLike] = useState("inactive");

  function handleClick() {
    if (Like === "inactive") {
      setButtonClassLike("active-like");
    } else {
      setButtonClassLike("inactive");
    }
  }

  return (
    <div>
      <img
        src={ThumbUpIcon} alt=""
        className={Like}
        onClick={handleClick}
      />
    </div>
  );
};

export default LikeButton;