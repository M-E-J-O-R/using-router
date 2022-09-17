import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'

import ErorPage from './ErrorPage'
import CommentRoute from './CommentRoute';

function App() {
  const location = useLocation()

  return (

    <>
      <Routes location={'/comment'}>
        <Route path='/comment' element={<h3>This is the comment session</h3>} />
      </Routes>

      <nav>
        {/* Replace is a link attribute that allows you to delete the previous history and then go 2 steps backward
        reloadDocument allows you to reload a page when it is clicked
        */}
        <ul>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/comment'}>Comment</Link></li>
        </ul>
      </nav>

      <p>{location.state}</p>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/comment/*' element={<CommentRoute />} />


        <Route path='*' element={<ErorPage />} />

      </Routes>
    </>


  );
}

export default App;
