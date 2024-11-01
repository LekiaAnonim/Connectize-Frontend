//import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
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
import CompanyBioThree from './components/profile/companyBioThree';
import CompanyBioFour from './components/profile/companyBioFour';
import Services from './pages/service/service';
import ServiceOverView from './pages/service/serviceOverview';
import ServiceAdmin from './pages/service/serviceAdmin';
import Market from './pages/market/market';
import Product from './pages/market/product';
import Analysis from './pages/market/analysis';
import Listing from './pages/market/listing';
import UserProfile from "./pages/feedPages/userProfile";
import AdminProfile from "./pages/feedPages/adminProfile";
import NewsFeed from "./pages/feedPages/newsFeed";


function App() {
  return (
    <>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    </head>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<NewsFeed/>} />
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
          <Route path='biothree' element={<CompanyBioThree />}/>
          <Route path='biofour' element={<CompanyBioFour />}/>
          <Route path='service' element={<Services/>}/>
          <Route path='serviceoverview' element={<ServiceOverView/>}/>
          <Route path='serviceadmin' element={<ServiceAdmin/>}/>
          <Route path='market' element={<Market/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='analysis' element={<Analysis/>}/>
          <Route path='listing' element={<Listing/>}/>
          <Route path='userprofile' element={<UserProfile/>}/>
          <Route path='adminprofile' element={<AdminProfile/>}/>
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
