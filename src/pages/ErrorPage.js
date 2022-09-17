import { Navigate, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    // const timeout = setTimeout(() => {
    //     navigate('/')
    // }, 2000)


    return (<>
        <h2>Error Page : 404</h2>
      
        <Navigate state={'Error not found'} to={'/'}/>


    </>

    );
}

export default ErrorPage;