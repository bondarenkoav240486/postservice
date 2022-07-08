

import React, {useMemo, useEffect, useState,useRef} from 'react';


import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton.js';
import MyInput from './components/UI/input/MyInput.js';
import MySelect from './components/UI/select/MySelect.js';
import MyModal from './components/UI/MyModal/MyModal.js';


import './styles/App.css';
import './styles/responsive.css';


import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter.js';


import Loader from './components//UI/Loader/Loader.js';
import PostService from './API/PostService';


import {usePosts} from './hooks/usePosts.js';
import {useFetching} from './hooks/useFetching.js';
import {getPageCount,getPagesArray} from './utils/pages.js';
import Pagination from "./components/UI/pagination/Pagination.js";


import {BrowserRouter, Route,Routes,Link} from "react-router-dom";

import About from './pages/About';
import About2 from './pages/About2';
import Posts from './pages/Posts';

import Navbar from './components/UI/Navbar/Navbar.jsx';
import AppRouter from './components/AppRouter.jsx';


import axios from 'axios'

function App() {

   return (

     <BrowserRouter>
        <Navbar />
         <AppRouter />
     </BrowserRouter>

     )
  }

  export default App;
