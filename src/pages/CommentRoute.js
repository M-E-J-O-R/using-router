import { Route, Routes } from "react-router-dom";
import Comment from "./Comment";
import CommentLayout from "./CommentLayout";
import UserComments from "./UserComments";

const CommentRoute = () => {
    return (<>

        <Routes>
            <Route element={<CommentLayout />}>
                {/* <Route element={<CommentLayout />} > */}
                <Route index element={<Comment />} />
                <Route path=':id' element={<UserComments />} />
            </Route>
        </Routes>
    </>);
}

export default CommentRoute;