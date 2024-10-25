import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MyContext } from '../context/mycontext';
import { BsCoin } from 'react-icons/bs';
import { FaBox } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { Pie, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import axios from 'axios';

// Registering necessary ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

function Dashboard() {

    // Data for Pie Chart
    const pieData = {
      labels: ['Sales', 'Orders', 'Ratings', 'Likes', 'Abandoned cart'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(197, 28, 83, 1)',
            'rgba(47, 128, 255, 1)',
            'rgba(243, 255, 119, 1)',
            'rgba(63, 255, 124, 1)',
            'rgba(107, 44, 245, 1)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
  
    // Data for Line Chart
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales Record',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: 'rgba(0, 20, 255, 1)',
          tension: 0.1,
        },
      ],
    }
  const location = useLocation();
  const { setCurrentpage } = useContext(MyContext);

  // Modal and Merchant Info
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Fetching merchant data from local storage
  const merchant = JSON.parse(localStorage.getItem('merchant_details'));

  // States for fetching categories
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [merchantId, setMerchantId] = useState("");

  // Set the current page when component mounts
  useEffect(() => {
    setCurrentpage(location.pathname);
  }, [location.pathname, setCurrentpage]);

  // Set merchantId from local storage when component mounts
  useEffect(() => {
    if (merchant) {
      setMerchantId(merchant.id);
    }
  }, [merchant]);

  // Fetch categories based on merchantId
  useEffect(() => {
    const fetchCategories = async () => {
      if (!merchantId) return;

      try {
        const response = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`);
        setCategories(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, [merchantId]);

  return (
    <div className="flex-1 p-4 h-[800px] bg-gray-50">
      {/* Top Section */}
      <div className="flex justify-between mb-10">
        <div className="flex gap-5">

          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        </div>

        {/* Merchant Info */}
        <div className="flex gap-3">
          <div className="flex flex-col">
            <h1 className="text-lg text-red-600 font-bold">Welcome!</h1>
            <h1 className="font-bold">{merchant.first_name}</h1>
          </div>
          <img
            src="https://images.pexels.com/photos/2331539/pexels-photo-2331539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-20 h-20 rounded-full object-cover"
            alt="Merchant"
          />
          <button onClick={openModal} className="rounded px-1 bg-gradient-to-t from-orange-600 via-orange-400 to-pink-600 text-black font-semibold">
            Update Admin
          </button>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5 w-96">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">Merchant Information:</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={closeModal}
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>

                <div className="self-center">
                  <img
                    src="https://corporate.marksandspencer.com/sites/marksandspencer/files/styles/retina/public/marksandspencer/logos/Intl-Logo.png?itok=yO_fmtf_"
                    alt="Logo"
                    className="w-28 h-28"
                  />
                </div>

                <div>
                  <b>First Name:</b> <span>{merchant.first_name}</span>
                </div>
                <div>
                  <b>Last Name:</b> <span>{merchant.last_name}</span>
                </div>
                <div>
                  <b>Email:</b> <span>{merchant.email}</span>
                </div>
                <div>
                  <b>Store Name:</b> <span>{merchant.store_name}</span>
                </div>
                <div>
                  <b>Description:</b> <span>{merchant.descp}</span>
                </div>

                <div className="flex justify-between mt-10">
                  <Link to="/UpdateMerchant-register">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Edit Info
                    </button>
                  </Link>

                  <Link to="../pass.html">
                    <button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Change Password
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-[80px]">
        <div className="bg-gradient-to-t from-purple-700 via-purple-300 to-purple-500 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Sales
            <div>
              <BsCoin size={20} color="currentColor" />
            </div>
          </h3>
          <h3 className="text-xl"> ₦250,000</h3>
        </div>
        <div className="bg-gradient-to-t from-green-700 via-green-300 to-green-500 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Products
            <div>
              <FaBox size={16} color="currentColor" />
            </div>
          </h3>
          <h3 className="text-xl"> 120</h3>
        </div>
        <div className="bg-gradient-to-t from-yellow-700 via-yellow-300 to-yellow-500 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Customers
            <div>
              <FaUsers size={16} color="currentColor" />
            </div>
          </h3>
          <h3 className="text-xl"> 100</h3>
        </div>
        <div className="bg-gradient-to-t from-pink-700 via-pink-300 to-pink-500 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Carts
            <div>
              <FaShoppingCart size={16} color="currentColor" />
            </div>
          </h3>
          <h3 className="text-xl"> 80</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      {/* Pie Chart Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Dashboard Pie Chart</h2>
        <Pie data={pieData} />
      </div>

      {/* Line Chart Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Dashboard Graph</h2>
        <Line data={lineData} />
      </div>
    </div>


    </div>
  );
}

export default Dashboard;

