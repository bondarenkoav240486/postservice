import React, {useEffect, useState,useRef} from 'react';
import MyButton from './UI/button/MyButton.js';
import MyInput from './UI/input/MyInput.js';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title:'',body:''});

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
            ...post, id: Date.now(),  postOfUser: true
        }
        create(newPost)
  }

    return (
    <div className="PostForm">
            <form>

          <MyInput
            value={post.title}
            onChange={e=>setPost({ ...post, title: e.target.value, postOfUser: true})}
           type='text' 
           placeholder='header' 
           />

          <MyInput type='text' 
            value={post.body}
            onChange={e=>setPost({ ...post, body: e.target.value, postOfUser: true})}

            placeholder='content' 
          />
          
          <MyButton onClick={addNewPost}
          >
           CREATE
          </MyButton>

        </form>
    </div>


    );
};

export default PostForm;