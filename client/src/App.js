import './App.css';
import AppNavbar from './components/AppNavBar'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { getAuthUser } from './js/actions/authActions';
import Home from './components/pages/Home';
import Addblog from './components/pages/CreateBlog';
import PrivateRoute from './components/routes/PrivateRoute';
import Blog from './components/blogs/blog';
function App() {

const dispatch=useDispatch();
const getUser=()=>dispatch(getAuthUser());
useEffect(() => {
  getUser();
}, []);
  return (
    <div className="App">
       <BrowserRouter>
        <AppNavbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blog/:title' component={Blog}></Route>
        <PrivateRoute exact path='/AddBlog' component={Addblog}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
