import React from "react";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";

//컴포넌트를 만들고 확인하기 위한 임시 뷰
//나중에 수정
const Page = () => {
    return(
       <>
       <Comment/>
       <CommentInput/>
       </>
    );
};

export default Page;
