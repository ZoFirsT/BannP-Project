import React, { useState } from 'react';
import { FiHome, FiShoppingCart, FiSettings, FiBox, FiLogOut, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import MyLineChart from './LineChart';
import Selector from './selector';

const Managestore = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-800">
            {isSidebarOpen && (
                <div
                    className="bg-black bg-opacity-50 fixed inset-0 z-10 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <button
                className="text-white p-4 lg:hidden z-20 fixed top-4 left-4"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <aside
                className={`transform top-0 left-0 w-64 bg-[#2B2B2B] p-6 fixed h-full overflow-auto transition-all duration-300 z-30 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}
            >
                <div className="flex flex-col justify-between h-full text-white">
                    <div>
                        <h1 className='text-3xl font-bold text-orange-400 mb-5'>POS System</h1>
                        <nav className="flex flex-col gap-4">
                            <MenuItem icon={<FiHome />} title="Dashboard" />
                            <MenuItem icon={<FiShoppingCart />} title="Order Product" />
                            <MenuItemSelcet icon={<FiSettings />} title="Manage Store" />
                            <MenuItem icon={<FiBox />} title="Manage Product" />
                        </nav>
                    </div>
                    <MenuItem icon={<FiLogOut />} title="Log Out" />
                </div>
            </aside>

            <main className="flex-grow p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl px-10 py-1 font-semibold text-gray-200">Manage Store</h2>
                </div>
                <div className="bg-gray-600 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <FiUser className="text-2xl text-gray-200 mr-2" />
                            <span className="text-gray-200 text-lg">Users</span>
                        </div>
                        <BsThreeDots className="text-2xl text-gray-600" />
                    </div>
                    <div className='text-gray-200 mb-4'>
                        <span className='text-xl'>Category</span>
                        <div className='p-2'>
                            <Selector />
                        </div>
                    </div>
                    <MyLineChart />
                </div>
            </main>
        </div>
    );
};

const MenuItem = ({ icon, title }) => (
    <a href="#" className="flex items-center p-4 text-xl rounded-2xl hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300">
        {icon}
        <span className="ml-3">{title}</span>
    </a>
);

const MenuItemSelcet = ({ icon, title }) => (
    <a href="#" className="flex items-center p-4 text-xl rounded-2xl bg-orange-400 scale-105 shadow-lg transition ease-in-out duration-300">
        {icon}
        <span className="ml-3">{title}</span>
    </a>
);

const InfoCard = ({ icon, title, value }) => (
    <div className="bg-orange-300 p-4 rounded-xl shadow-md flex items-center">
        <div className="p-4 bg-gray-600 rounded-xl text-white">
            {icon}
        </div>
        <div className="ml-4 text-orange-600">
            <p className="text-md font-medium">{title}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    </div>
);

export default Managestore;
