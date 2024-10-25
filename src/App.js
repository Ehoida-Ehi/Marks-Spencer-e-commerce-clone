import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Details from './pages/Details';
import CartPage from './pages/CartPage';
import SignIn from './pages/SignIn';
import RegForm from './pages/RegForm';
import Layout from './dashboard/Layout';
import AddProduct from './dashboard/AddProduct';
import Allproducts from './dashboard/Allproducts';
import { MyContext } from './context/mycontext';
import MerchSign from './dashboard/MerchSign';
import MerchReg from './dashboard/MerchReg';
import Allusers from './dashboard/Allusers';
import Allcategories from './dashboard/Allcategories';
import CreateCategory from './dashboard/CreateCategory';
import Dashboard from './dashboard/Dashboard';

// Create a new component for content
const Content = () => {
  const { currentpage, setCurrentpage } = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    // Update currentpage whenever the location changes
    setCurrentpage(location.pathname);
  }, [location, setCurrentpage]);

  // Define an array of paths where Navbar and Footer should not be displayed
  const hiddenPaths = ['/SignIn', '/RegForm', '/MerchSign', '/MerchReg'];

  // Check if current page starts with dashboard to hide Navbar/Footer in dashboard pages
  const shouldHideNavFooter = hiddenPaths.includes(currentpage) || currentpage.startsWith('/dashboard');

  return (
    <>
      {!shouldHideNavFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RegForm" element={<RegForm />} />
        <Route path="/MerchSign" element={<MerchSign />} />
        <Route path="/MerchReg" element={<MerchReg />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="all-products" element={<Allproducts />} />
          <Route path="all-users" element={<Allusers />} />
          <Route path="all-categories" element={<Allcategories />} />
        </Route>
      </Routes>

      {!shouldHideNavFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;







