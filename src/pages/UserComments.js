import { useParams } from "react-router-dom";
const UserComments = () => {
    const {id }= useParams()
    return (
        <>
            <p>This is user comments {id} </p>


        </>);
}

export default UserComments;