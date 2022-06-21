import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../routes/Main";
import Login from "../routes/Login";
import Page from "../routes/Page";


const AppRouter = () => {
    return(
        <>
        <Routes>
            <Route path="/*" element={<Login/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/test" element={<Page/>}/>
        </Routes>
        </>
    )
}

export default AppRouter;