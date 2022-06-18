import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../routes/Main";
import Signup from "../routes/Signup";


const AppRouter = () => {
    return(
        <>
        <Routes>
            <Route path="/*" element={<Signup/>} />
            <Route path="/main" element={<Main/>} />
        </Routes>
        </>
    )
}

export default AppRouter;