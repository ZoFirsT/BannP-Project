import React from 'react';
import { FiHome, FiTrendingUp, FiCheckCircle, FiUser } from 'react-icons/fi';
import { TbReload } from "react-icons/tb";


function Dashboard() {
  return (
    // Use flex container to align the child component vertically and horizontally in the center
    <div className="min-h-screen flex items-center justify-center">
      {/* Set the height to 75vh and center the content */}
      <aside className="rounded-2xl bg-[#1F1F1F] p-3 shadow-xl w-full max-w-4xl" style={{ height: '75vh' }}>
        <header className='flex justify-between items-center p-3 rounded-3xl bg-[#2B2B2B]'>
          <div className='flex items-center'>
            <FiHome className="text-white text-2xl" />
            <span className='ml-3 text-white text-lg'>หน้าแรก</span>
          </div>
          <div className='flex items-center'>
            <button className='text-white p-2 rounded-full bg-green-500 mr-4'>
              <TbReload className="text-2xl" />
            </button>
            <img
              src="/path-to-your-image.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Cards for data */}
        <div className='grid grid-cols-3 gap-4 p-3'>
          {/* Data card */}
          <div className='bg-gray-700 rounded-xl p-4 flex items-center'>
            <FiCheckCircle className="text-red-500 text-2xl" />
            <div className='ml-3'>
              <p className='text-white text-sm'>จำนวนยอดขาย</p>
              <p className='text-white text-lg'>50 รายการ</p>
            </div>
          </div>

          <div className='bg-gray-700 rounded-xl p-4 flex items-center'>
            <FiCheckCircle className="text-red-500 text-2xl" />
            <div className='ml-3'>
              <p className='text-white text-sm'>จำนวนยอดขาย</p>
              <p className='text-white text-lg'>50 รายการ</p>
            </div>
          </div>

          <div className='bg-gray-700 rounded-xl p-4 flex items-center'>
            <FiCheckCircle className="text-red-500 text-2xl" />
            <div className='ml-3'>
              <p className='text-white text-sm'>จำนวนยอดขาย</p>
              <p className='text-white text-lg'>50 รายการ</p>
            </div>
          </div>

          {/* Additional data cards would go here... */}
        </div>

        {/* Chart */}
        <div className='bg-gray-700 rounded-xl p-4 mt-5'>
          {/* Placeholder for chart */}
          <p className='text-white'>กราฟพัฒนาการของยอดขาย</p>
          {/* You would use a chart library like Chart.js to render your chart here */}
          <div className='bg-gray-700 rounded-xl p-4 mt-5'>
            
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Dashboard;
