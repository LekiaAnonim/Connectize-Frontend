//import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom";
// import FeedPage from "./pages/feedPages/feedPage";
import Signup from "./pages/authentication/signup";
import Login from "./pages/authentication/login";
import NoPage from "./components/NoPage";
import Profile from "./components/profile/profile";
import Home from "./components/profile/home";
import Contact from "./components/profile/contact";
import Address from "./components/profile/address";
import Bio from "./components/profile/bio";
import SuccessPage from "./pages/authentication/successpage";
import Overview from "./components/profile/overview";
import CompanyBioOne from "./components/profile/companyBioOne";
import CompanyBioTwo from "./components/profile/companyBioTwo";
import CompanyBioThree from "./components/profile/companyBioThree";
import CompanyBioFour from "./components/profile/companyBioFour";
import Services from "./pages/service/service";
import ServiceOverView from "./pages/service/serviceOverview";
import ServiceAdmin from "./pages/service/serviceAdmin";
import Market from "./pages/market/market";
import Product from "./pages/market/product";
import Analysis from "./pages/market/analysis";
import Listing from "./pages/market/listing";
import UserProfile from "./pages/feedPages/userProfile";
import AdminProfile from "./pages/feedPages/adminProfile";
import NewsFeed from "./pages/feedPages/newsFeed";
import Testing from "./pages/feedPages/testing";
import Navbar from "./pages/feedPages/antway";
import AuthLayout from "./pages/authentication/AuthLayout";
import ResetPasswordPage from "./pages/authentication/reset-password";
import ProfileLayout from "./components/profile/layout";
import ConfirmResetPassword from "./pages/authentication/confirmPasswordReset";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/" element={<AuthLayout />}>
            {/* authentication routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/confirm-reset-password"
              element={<ConfirmResetPassword />}
            />
          </Route>
          <Route path="/success" element={<SuccessPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<ProfileLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="address" element={<Address />} />
            <Route path="bio" element={<Bio />} />
            <Route path="overview" element={<Overview />} />
          </Route>
          <Route path="bio-one" element={<CompanyBioOne />} />
          <Route path="bio-two" element={<CompanyBioTwo />} />
          <Route path="bio-three" element={<CompanyBioThree />} />
          <Route path="bio-four" element={<CompanyBioFour />} />
          <Route path="service" element={<Services />} />
          <Route path="serviceoverview" element={<ServiceOverView />} />
          <Route path="serviceadmin" element={<ServiceAdmin />} />
          <Route path="market" element={<Market />} />
          <Route path="product" element={<Product />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="listing" element={<Listing />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="adminprofile" element={<AdminProfile />} />
          {/* <Route path="feedpage" element={<FeedPage />} /> */}
          <Route path="testing" element={<Testing />} />
          <Route path="antway" element={<Navbar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
