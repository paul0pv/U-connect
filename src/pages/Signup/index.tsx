//import { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import logo from '/u-logo-transparent.png';

export default function SignupPage() {

    //const [formValues, setFormValues] = useState({
    //    name: '',
    //    lastname: '',
    //    email: '',
    //    phone: '',
    //    university: '',
    //    password: '',
    //    confirmPassword: '',
    //});

    //const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //    const {name, value } = e.target;
    //    setFormValues({ ...formValues, [name]: value});
    //}

    //const handleSubmit = (e: FormEvent) => {
    //    e.preventDefault();
    //    console.log('Form Values:', formValues);
    //  };

      return (
        <div className="min-h-screen flex items-center justify-center bg-primary-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="U-Connect Logo" className="w-1/2" />
          </div>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block font-medium text-neutral-200 mb-1">First Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input type="text" placeholder="First Name" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
                </div>
              </div>
              <div className="flex-1">
                <label className="block font-medium text-neutral-200 mb-1">Last Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input type="text" placeholder="Last Name" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
                </div>
              </div>
            </div>
            <div>
              <label className="block font-medium text-neutral-200 mb-1">Username</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input type="text" placeholder="Username" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
              </div>
            </div>
            <div>
              <label className="block font-medium text-neutral-200 mb-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input type="email" placeholder="Email" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
              </div>
            </div>
            <div>
              <label className="block font-medium text-neutral-200 mb-1">Phone</label>
              <div className="relative flex items-center">
                <select className="absolute left-0 top-0 h-full pl-3 pr-8 py-2 border-r rounded-l-md focus:outline-none">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input type="tel" placeholder="Phone" className="w-full pl-24 pr-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
              </div>
            </div>
            <div>
              <label className="block font-medium text-neutral-200 mb-1">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input type="password" placeholder="Password" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
              </div>
            </div>
            <div>
              <label className="block font-medium text-neutral-200 mb-1">Confirm Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input type="password" placeholder="Confirm Password" className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-200" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full py-2 bg-accent-200 text-white font-bold rounded-md hover:bg-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-100">Sign Up</button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-neutral-200">
              Already have an account? <a href="/" className="text-accent-200 font-bold">Log In</a>
            </p>
          </div>
        </div>
      </div>
      );
}