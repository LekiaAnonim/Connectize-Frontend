import { Routes, Route } from "react-router-dom";
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
import Services from "./pages/service/service";
import ServiceOverView from "./pages/service/serviceOverview";
import ServiceAdmin from "./pages/service/serviceAdmin";
import Market from "./pages/market/market";
import Product from "./pages/market/product";
import Analysis from "./pages/market/analysis";
import Listing from "./pages/market/listing";
import UserProfile from "./pages/feed/userProfile";
import NewsFeed from "./pages/feed/newsFeed";
import AuthLayout from "./pages/authentication/AuthLayout";
import ResetPasswordPage from "./pages/authentication/reset-password";
import ProfileLayout from "./components/profile/layout";
import ConfirmResetPassword from "./pages/authentication/confirmPasswordReset";
import MarketPlaceLayout from "./pages/MarketPlaceLayout";
import CompanyLayout from "./pages/company/layout";
import CreateCompany from "./pages/company";
import CompanyDocuments from "./pages/company/CompanyDocuments";
import CompanyInformation from "./pages/company/CompanyInformation";
import CompanyAdditionalInformation from "./pages/company/CompanyAdditionInformation";
import SinglePostPage from "./pages/posts/singlePostPage";
import FeedLayout from "./pages/FeedLayout";
import VerifyAccount from "./pages/authentication/verify-account";
import CompanyProfile from "./pages/feed/companyProfile";

function App() {
  return (
    <>
      <Routes>
        <Route>
          {/* Market place */}
          <Route path="/" element={<MarketPlaceLayout />}>
            <Route path="*" element={<NoPage />} />
            {/* Landing page */}
            <Route path="/" element={<FeedLayout />}>
              <Route path="/" element={<NewsFeed />} />
              <Route path="/posts/:id" element={<SinglePostPage />} />
            </Route>
            <Route path="co/:userId" element={<UserProfile />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="market" element={<Market />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="listing" element={<Listing />} />
            {/* Services */}
            <Route path="services" element={<Services />} />

            <Route path="services/:id" element={<ServiceOverView />} />
            <Route path="services/add" element={<ServiceAdmin />} />
          </Route>
          {/* authentication routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-account" element={<VerifyAccount />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/confirm-reset-password"
              element={<ConfirmResetPassword />}
            />
          </Route>

          <Route path="/success" element={<SuccessPage />} />
          <Route path="profile" element={<Profile />} />

          {/* Complete profile */}
          <Route path="/" element={<ProfileLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="address" element={<Address />} />
            <Route path="bio" element={<Bio />} />
            <Route path="overview" element={<Overview />} />
          </Route>

          {/* Company */}
          <Route path=":company" element={<CompanyProfile />} />

          {/* <Route path="admin/:company" element={<AdminProfile />} /> */}

          {/* Company */}
          <Route element={<CompanyLayout />}>
            <Route path="create-company" element={<CreateCompany />} />
            <Route path="company-documents" element={<CompanyDocuments />} />
            <Route
              path="company-information"
              element={<CompanyInformation />}
            />
            <Route
              path="company-additional-information"
              element={<CompanyAdditionalInformation />}
            />
          </Route>

          {/* 404 Page */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
