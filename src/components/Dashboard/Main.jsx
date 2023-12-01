import React from 'react';
import { FiHome, FiShoppingCart, FiSettings, FiBox, FiLogOut } from 'react-icons/fi';

function MenuL() {
    return (
        <div className="flex justify-center items-center h-screen">
            <aside className="bg-[#2B2B2B] p-6 rounded-2xl shadow-xl" style={{ height: '75%' }} aria-label="Content">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h1 className='text-3xl font-bold text-orange-400 p-5'>POS System</h1>
                        <nav className="flex flex-col gap-4">
                            <a href="#" className="flex items-center space-x-3 p-4 text-xl font-medium text-gray-300 rounded-2xl hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 hover:text-white">
                                <FiHome className="text-2xl" />
                                <span>Dashboard</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 p-4 text-xl font-medium text-gray-300 rounded-2xl hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 hover:text-white">
                                <FiShoppingCart className="text-2xl" />
                                <span>Order Product</span>zz
                            </a>
                            <a href="#" className="flex items-center space-x-3 p-4 text-xl font-medium text-gray-300 rounded-2xl hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 hover:text-white">
                                <FiSettings className="text-2xl" />
                                <span>Manage Store</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 p-4 text-xl font-medium text-gray-300 rounded-2xl hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 hover:text-white">
                                <FiBox className="text-2xl" />
                                <span>Manage Product</span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <a href="#" className="flex items-center space-x-3 p-4 text-xl font-medium text-gray-300 rounded-2xl hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition ease-in-out duration-300 hover:text-white">
                            <FiLogOut className="text-2xl" />
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default MenuL;
