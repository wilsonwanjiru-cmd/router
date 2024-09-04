import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';
import PostItem from './components/postitem'
import Users from './components/users'
import Admins from './components/admins'
import Guests from './components/guests'

const App = () => {
  return(
    <BrowserRouter>
    <div className='container'>
    <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
      <Link to ="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
      <span className='fs-4'>WilsonWanjiru App</span>
      </Link>

      <ul className='nav nav-pills'>
        <li className='nav-item'>
        <Link to ="/" className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
        <Link to ="post" className='nav-link'>Post</Link>
        </li>
        <li className='nav-item'>
        <Link to ="profile" className='nav-link'>Profile</Link>
        </li>
        <li className='nav-item'>
        <Link to ="users" className='nav-link'>Users</Link>
        </li>
       
      </ul>
      
      
    </header>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="post" element= {<Post/>}/>
        <Route path="profile" element= {<Profile/>}/>
        {/* make params more dynamic */}
        <Route path="post/:id" element= {<PostItem/>}/> 
        {/* Nested Routes */}
        <Route path ="users" element={<Users/>}>
        <Route path="admins" element= {<Admins/>}/>
        <Route path="guests" element= {<Guests/>}/>

        </Route>
        {/* No Route Found */}
        <Route path="*" element ={
          <>
            <h1>Sorry nothing found!</h1>
          </>
        }/>

      </Routes>
      
    </div>

    </BrowserRouter>
  )
}

export default App