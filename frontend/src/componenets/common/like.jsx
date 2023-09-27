import React, { useState } from "react";


const LikeButtonCompoent = () => {
  const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
          }
      `}</style>
    </>
  );
};

export default LikeButtonCompoent;

