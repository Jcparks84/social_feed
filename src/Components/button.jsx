import React, { useState } from 'react';

const Buttons = (props) =>{
    const [likeButton, setLikeButton] = useState('inactive');
    const [dislikeButton, setDislikeButton] = useState('inactive');

    function handleClick(event){
        event.preventdefault();
        if(likeButton === 'inactive'){
            setLikeButton('active');
            setDislikeButton('inactive');
        }
        else{
            setLikeButton('inactive')
        }
    }
    function handleClickDislike(event){
                event.preventDefault();
                if(dislikeButton === 'inactive'){
                    setLikeButton('inactive');
                    setDislikeButton('active');
                }
                else{
                    setDislikeButton('inactve');
                }
            }
    return(
         <div>
             <button className={likeButton} onClick={handleClick}>like</button>
             <button className={dislikeButton} onClick={handleClickDislike}>dislike</button>
        </div>
            )
        }
        export default Buttons;











