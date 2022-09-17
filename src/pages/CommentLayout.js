import { Link, Outlet, useSearchParams } from "react-router-dom";
const CommentLayout = () => {
    const [searchParams,setSearchParams] = useSearchParams({n:3})
    let number = searchParams.get('n')

    return (<>
     <nav>
            <li><Link to={'/comment/1'}>Comment 1 </Link></li>
            <li><Link to={'/comment/2'}>Comment 2</Link></li>
            
            <li><Link to={`/comment/2${number}`}>Comment {number}</Link></li>
            
            
           
        </nav>
        <input type="number" value={number} onChange={(e)=>setSearchParams({n:e.target.value})}/>
        <Outlet context={{message: 'I will get better in React. It\'s just time'}}/>
    </>);
}
 
export default CommentLayout;