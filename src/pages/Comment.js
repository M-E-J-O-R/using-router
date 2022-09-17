// import { useNavigate } from "react-router-dom";
// import { UserContext } from "./Home";
// import { useContext } from "react";

import { useOutletContext } from "react-router-dom";




const Comment = () => {
    //const {userData,data} = useContext(UserContext)
    //const navigate = useNavigate()
    const message = useOutletContext()
    return (<>
        <p>This is comment {message.message}</p>

        {/* <div>
            
                {data && userData.map((user, key) => {
                    return (
                        <div key={key}> <p>{user.first_name}</p>

                            <button onClick={() => navigate(`/comment/${key}`)}>Back to home</button>
                        </div>
                    )
                })}



            </div> */}





    </>);
}

export default Comment