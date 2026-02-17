import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Imports
import PublicLayout from "./pages/public/Layout";
import PrivateLayout from "./pages/private/Layout";

// Page Imports
import HomeBeforeLogin from "./pages/public/HomeBeforeLogin";
import HomeAfterLogin from "./pages/private/HomeAfterLogin";
import Shop from "./pages/public/shop";
import SearchArtists from "./pages/public/SearchArtists";
import ConnectPage from "./pages/private/ConnectPage"; // Moved to private based on UI context
import OurStory from "./pages/public/OurStory";
import FAQ from "./pages/public/FAQ";
import ContactUs from "./pages/public/ContactUs";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import BiddingPage from "./pages/private/BiddingPage";
import PurchasePage from "./pages/private/PurchasePage";
import MyBids from "./pages/private/MyBids";
function App() {
  return (
    <Router>
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/artists" element={<SearchArtists />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Route>

        {/* --- PRIVATE ROUTES --- */}
        <Route element={<PrivateLayout />}>
          <Route path="/HomeAfterLogin" element={<HomeAfterLogin />} />
          <Route path="/bidding" element={<BiddingPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/connectpage" element={<ConnectPage />} />
          <Route path="/my-bids" element={<MyBids />} />
        </Route>

        {/* --- AUTH ROUTES --- */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
