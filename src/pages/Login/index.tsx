import { FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaMicrosoft, FaLinkedin } from 'react-icons/fa';
import logo from '/u-logo-transparent.png';

export default function LoginPage() {

    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here
      //console.log('Username:', username);
      //console.log('Password:', password);
      // Redirect to the dashboard page
      navigate('/dashboard');
    };

    return (
      <div className="min-h-screen flex flex-col lg:flex-row lg:gap-16 items-center justify-center bg-primary-100 p-4">
      <div className="lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <img src={logo} alt="U-Connect Logo" className="w-58 h-48 lg:w-full lg:h-full" />
      </div>
      <div className="lg:w-1/3 w-full max-w-sm bg-neutral-100 p-8 rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="block text-secondary-100 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border rounded w-full py-2 px-3 text-secondary-100 leading-tight focus:outline-none focus:shadow-outline">
              <FaUser className="mr-2 text-secondary-200" />
              <input
                className="appearance-none w-full bg-transparent focus:outline-none"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <hr className="my-4 border-secondary-200" />
          <div className="mb-6 relative">
            <label className="block text-secondary-100 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded w-full py-2 px-3 text-secondary-100 leading-tight focus:outline-none focus:shadow-outline">
              <FaLock className="mr-2 text-secondary-200" />
              <input
                className="appearance-none w-full bg-transparent focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-accent-200 hover:bg-accent-100 text-neutral-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mt-4 text-center">
            <a className="inline-block align-baseline font-bold text-sm text-accent-200 hover:text-accent-100" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="mt-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-neutral-200">or sign in with</span>
          </div>
          <div className="flex justify-center space-x-2">
            <button className="flex items-center space-x-2 py-2 px-4 bg-red-600 text-white rounded-md focus:outline-none hover:bg-red-700">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 py-2 px-4 bg-blue-600 text-white rounded-md focus:outline-none hover:bg-blue-700">
              <FaMicrosoft />
              <span>Microsoft</span>
            </button>
            <button className="flex items-center space-x-2 py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">
              <FaLinkedin />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-neutral-200">
            New user? <a href="/signup" className="text-accent-200 font-bold">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    );
}