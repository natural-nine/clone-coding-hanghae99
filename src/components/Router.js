import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../routes/Main";
import Signup from "../routes/Signup";
import Page from "../routes/Page";


const AppRouter = () => {
    return(
        <>
        <Routes>
            <Route path="/*" element={<Signup/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/test" element={<Page/>}/>
        </Routes>
        </>
    )
}

export default AppRouter;