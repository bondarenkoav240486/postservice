// IMPORTS................................................................................
// 
import React, {useEffect, useRef, useState} from 'react';
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts.js";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages"; 
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";
import axios from 'axios'

// COMPONENT FUNCTION....................................................................
// 
function Posts() {

  // STATE posts 
  const [posts, setPosts] = useState( [] );
  
  // STATE filter
  const [filter, setFilter] = useState({sort:'', query:''});

  // STATE modal-window
  const [modal, setModal] = useState(false);

  // STATE posts from server
  const [totalPages, setTotalPages] = useState(0);

  // STATE limit posts from server
  const [limit, setLimit] = useState(10);

  // STATE number page  with posts!
  const [page, setPage] = useState(1);


  //  USER CUSTOM HOOK for sorted And Searched Posts
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);


  console.log(posts);

  //   USER CUSTOM HOOK 
  const [fetchPosts,isPostLoading,postError] = useFetching(async (limit,page) => {
    const response =  await new PostService().getAll2(limit,page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  });

// HOOK useEffect download posts from server
useEffect( () => {
  fetchPosts(limit,page)
  console.log('USE EFFECT')
},[]
)

// FUNCTION CREATE user post
const createPost = (newPost) => {
  setPosts([...posts, newPost]);
  setModal(false);
}

//FUNCTION REMOVE post 
const removePost = (post) => {
  setPosts(posts.filter(p=>p.id!==post.id))
}

// FUNCTION change number page
const changePage = (page) => {
 // change number page
  setPage(page)
  // fetch posts for new number
  fetchPosts(limit,page)
}


// RETURN......................................
return (
 <div className='posts'>

{/*BUTTON MODAL WINDOW*/}
<MyButton 
onClick={()=>setModal(true)}
style={{marginTop:'30px'}}
>
CREATE POST
</MyButton>

{/* MODAL WINDOW*/}
<MyModal 
visible={modal}
setVisible={setModal}
>
<PostForm  create={createPost} />
</MyModal >

<hr style={{margin: '15px'}}/>

<div>
<PostFilter 
filter={filter}
setFilter={setFilter}
/>

{
    postError && <h1>ERROR!</h1>
}
</div>


{isPostLoading
  ?
  <div style={{display:"flex", justifyContent:"center", marginTop:"50px" }}><Loader/></div>
  :
  <PostList
  posts={sortedAndSearchedPosts}
  title={'POSTS'}
  remove={removePost}
  />
}

<Pagination
page={page}
changePage={changePage}
totalPages={totalPages}
/>

</div>
);
}

export default Posts;
