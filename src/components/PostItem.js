import React from 'react';
import MyButton from './UI/button/MyButton.js';

import {useNavigate } from 'react-router-dom';


const PostItem = (props) => {

    const router = useNavigate();

    return (
    <div className="post post-item">
            <div className="post__content">
                <strong>{props.post.postOfUser?"": props.post.id +'.'} {props.post.title}</strong>
                <div>

                 {props.post.body}

                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    OPEN
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    DELETE
                </MyButton>
            </div>
    </div>


    );
};

export default PostItem;