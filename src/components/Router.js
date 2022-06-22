import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../routes/Main";
import Login from "../routes/Login";
import Comment from "../components/Comment";


const AppRouter = () => {
    return(
        <>
        <Routes>
            <Route path="/*" element={<Login/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/test" element={<Comment/>}/>
        </Routes>
        </>
    )
}

export default AppRouter;