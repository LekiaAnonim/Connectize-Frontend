// import logo from './logo.svg';
// import './App.css';
// import {Leftsidebar} from './Leftsidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FeedPage from './FeedPage';
import Signup from './components/auth-forms/signup';
import Login from './components/auth-forms/login';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<FeedPage/>} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Login' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
