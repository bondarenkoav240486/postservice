import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
     const response = await PostService.getById(id)
     setPost(response.data);
  })

  useEffect(() => {
     fetchPostById(params.id)
  }, [])
  
  return (
     <div className="post__id__page">

     {isLoading
        ? <Loader/>
        :  <div>
        <h3>{post.id}. {post.title} </h3>
        <p>{post.body}</p>
        </div>
        
     }

     </div>
     );
};

export default PostIdPage;