import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import { CartProvider } from "./components/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductListingInquiry from "./ProductListinquiry/ProductListinquiry.js";
import LendingPage from "./pages/LendingPage";
import CountDown from "./pages/CountDown.jsx";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import SubscriptionSuccess from "./pages/SubscriptionSuccess.jsx";
// import Inquiry from "./pages/Inquiry/Inquiry.js";

// Lazy Loading Pages for Performance Optimization
const Login = lazy(() => import("./pages/Auth/Login"));
const SignupForm = lazy(() => import("./pages/Auth/SignUp"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const OTPVerification = lazy(() => import("./pages/Auth/Otp"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Landing = lazy(() => import("./pages/Landing"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const AllCategory = lazy(() => import("./pages/AllCategory"));
const YourData = lazy(() => import("./pages/YourData"));
const AddToCart = lazy(() => import("./pages/AddToCart"));
const LeadComponent = lazy(() => import("./pages/LeadComponet"));
const BillingForm = lazy(() => import("./pages/Payment/PaymentBilling"));
const NetBanking = lazy(() => import("./pages/Payment/NetBanking"));
const EmailSender = lazy(() => import("./pages/EmailSender/EmailSender"));
const Advertise = lazy(() => import("./pages/Advertise/Advertise"));
const UploadData = lazy(() => import("./pages/UploadData/UploadData"));
const Analytics = lazy(() => import("./pages/Analytics/Analytics"));
const Inquiry = lazy(() => import("./pages/Inquiry/Inquiry"));

const ProductListing = lazy(() =>
  import("./pages/ProductListing/ProductListing.js")
);

const ProductMainList = lazy(() => import("./pages/AddPost/AddPostPage.js"));

// Paths that require Sidebar
const sidebarRoutes = [
  "/dashboard",
  "/all-category",
  "/your-data",
  "/cart",
  "/lead",
  "/email-sender",
  "/advertise",
  "/upload-data",
  "/product-listing",
  "/product-inquiry",
  "/add-product-main-page",
  "/analytics",
  "/inquiry",
];

// Protected Route Wrapper (Add Authentication Logic Here)
function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("token"); // Modify authentication logic as needed
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Private Layout Component
function PrivateRouter() {
  const { pathname } = useLocation();

  const isSidebarRoute = useMemo(
    () => sidebarRoutes.includes(pathname),
    [pathname]
  );

  const [showSidebar, setShowSidebar] = useState(() => {
    return window.innerWidth > 768 && isSidebarRoute;
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowSidebar(isSidebarRoute);
        setIsMobile(false);
      } else {
        setShowSidebar(false);
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarRoute]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <CartProvider>
      <CustomHeader />
      <div className={showSidebar ? "app-dashboard" : "app"}>
        {/* Menu button for mobile */}
        {isMobile && (
          <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            {showSidebar ? <CircleChevronLeft /> : <CircleChevronRight />}
          </button>
        )}

        {showSidebar && <Sidebar />}

        <div
          className={showSidebar ? "main-content-dashboard" : "main-content"}
        >
          <div className="content-container p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

// Application Routes
function AppRoutes() {
  const today = new Date();
  const isMay13 = today.getDate() === 13 && today.getMonth() === 4; // Month is 0-indexed: 4 = May

  if (!isMay13) {
    return (
      <Routes>
        <Route path="*" element={<CountDown />} />
        <Route path="/" element={<CountDown />} />
        <Route
          element={
            <ProtectedRoute>
              <PrivateRouter />
            </ProtectedRoute>
          }
        >
          {/* <Route path="/dashboard" element={<SubscriptionSuccess />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product-main-page" element={<ProductMainList />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/email-sender" element={<EmailSender />} />
          <Route path="/product-inquiry" element={<ProductListingInquiry />} />
        </Route>
        <Route path="/landing" element={<LendingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />{" "}
        {/* add routing for Product Listing Inquiry ...*/}
        {/* <Route path="/product-listing" element={<ProductListing />} /> */}
        {/* add routing for Product Listing Inquiry ...*/}
        {/* <Route path="/product-listing" element={<ProductListing />} /> add routing for Product Listing Inquiry ... */}
      </Routes>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <PrivateRouter />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/lead" element={<LeadComponent />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/your-data" element={<YourData />} />
          <Route path="/email-sender" element={<EmailSender />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/upload-data" element={<UploadData />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/product-inquiry" element={<ProductListingInquiry />} />
          <Route path="/add-product-main-page" element={<ProductMainList />} />
          {/* <Route path="/add-product-main-page" element={<ProductMainList />} /> */}
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp/:email" element={<OTPVerification />} />
        <Route path="/reset-password/:email" element={<ResetPassword />} />
        <Route path="/" element={<LendingPage />} />
        <Route path="/" element={<LendingPage />} />
        <Route path="/landing" element={<LendingPage />} />
        <Route path="/billing-form" element={<BillingForm />} />
        <Route path="/payment" element={<NetBanking />} />

        {/* Catch All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

// Main App Component
function App() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowSidebar(true); // Desktop view - sidebar should be open
      } else {
        setShowSidebar(false); // Mobile view - sidebar should be hidden
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check (in case component loads after resizing)
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
