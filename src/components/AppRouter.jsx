import React, {useContext} from 'react';
import Loader from "./UI/Loader/Loader";
import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import About from '../pages/About';
import About2 from '../pages/About2';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';


const AppRouter = () => {

    return (
        <Routes>
    <Route path="about" element={<About />} />
    <Route path="posts" element={<Posts />} />
    <Route path="posts/:id" element={<PostIdPage />} />
    <Route
        path="*"
        element={<About2 to="/" replace />}
    />
    <Route
        path=""
        element={<About to="/" replace />}
    />
    </Routes>
    );
};

export default AppRouter;

