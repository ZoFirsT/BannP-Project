import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="p-10 bg-[#2B2B2B] shadow-lg rounded-3xl">
                <div className="flex justify-between items-end">
                    <h1 className="text-5xl text-[#FFB07F] font-bold">เข้าสู่ระบบ</h1>
                    <p className="text-sm text-[#FFB07F]">Login System</p>
                </div>
                <div className="my-5">
                    <label className="text-lg text-white">Email</label>
                    <input type="email" placeholder="name@domain.com" className="rounded-lg text-md w-full h-10 p-4 m-1 bg-gray-700 border-none"/>
                </div>
                <div>
                    <label className="text-lg text-white">Password</label>
                    <div className="flex items-center">
                        <input type={showPassword ? "text" : "password"} placeholder="password" className="rounded-lg text-md w-full h-10 p-4 m-1 bg-gray-700 border-none"/>
                        <button onClick={() => setShowPassword(!showPassword)} className="ml-2 bg-gray-700 text-white p-2 rounded">
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>
                <div className="flex my-3 mx-2 justify-start">
                    <input type="checkbox" />
                    <p className="text-md text-white m-1">Stay log-in</p>  
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-[#FFB07F] hover:bg-[#FF8133] py-3 px-14 text-md rounded-lg transition-all duration-300">Login</button>
                </div>
            </div>  
        </div>
    );
}

export default Login;
