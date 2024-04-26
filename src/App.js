// import logo from './logo.svg';
// import './App.css';
// import {Leftsidebar} from './Leftsidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FeedPage from './FeedPage';
import Signup from './components/auth-forms/signup';
import Login from './components/auth-forms/login';
import NoPage from './components/NoPage';
import Profile from './components/profile/profile';
import Home from './components/profile/home';
import Contact from './components/profile/contact';
import Address from './components/profile/address';
import Bio from './components/profile/bio';
import SuccessPage from './components/auth-forms/successpage';
import Overview from './components/profile/overview';
import CompanyBioOne from './components/profile/companyBioOne';
import CompanyBioTwo from './components/profile/companyBioTwo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<FeedPage/>} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='successpage' element={<SuccessPage />} />
          <Route path='profile' element={<Profile />}/>
          <Route path='home' element={<Home />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='address' element={<Address />}/>
          <Route path='bio' element={<Bio/>}/>
          <Route path='overview' element={<Overview />}/>
          <Route path='bioone' element={<CompanyBioOne />}/>
          <Route path='biotwo' element={<CompanyBioTwo />}/>
          {/* <Route path='bioone' element={<CompanyBioOne />}/> */}
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
