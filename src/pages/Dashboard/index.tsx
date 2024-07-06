import { FaHome, FaSearch, FaPlusSquare, FaEnvelope, FaUser, FaAt, FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function DashboardPage() {


    const navigate = useNavigate();

    const handleProfile = () => {
      navigate("/profile");
    };
  
    const handleSearch = () => {
      navigate("/search");
    };
  
    const handleMarketplace = () => {
      navigate("/marketplace");
    };


    const samplePost = {
        tag: 'Technology',
        profileImage: 'https://via.placeholder.com/150',
        username: 'John Doe',
        timestamp: '2 hours ago',
        content: 'This is a sample post content. It can be a text or any other element.',
    };


    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-primary-100">

            <header className="fixed items-center w-full p-4 justify-between bg-gray-800 text-white shadow-2xl rounded-sm lg:flex">
                {/* Profile button on the left */}
                <button onClick={handleProfile} className="hidden outline-none focus:outline-none lg:flex">
                    <FaAt className="text-2xl" />
                </button>

                {/* Heading in the center */}
                <div className="flex-1 text-center">
                    <h1 className="text-xl font-semibold">
                        <Link to="/">U-Connect</Link>
                    </h1>
                </div>

                {/* Search and Marketplace buttons on the right */}
                <div className="hidden items-center space-x-2 lg:flex">
                    <button onClick={handleSearch} className="outline-none focus:outline-none hidden md:block">
                        <FaSearch className="text-2xl" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block px-2 py-1 rounded-md border border-gray-200 bg-gray-700 text-white focus:outline-none"
                    />
                    <button onClick={handleMarketplace} className="outline-none focus:outline-none">
                        <FaStar className="text-2xl" />
                    </button>
                </div>
            </header>
            {/* Logo Section for Desktop */}
            <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
                <img src="/u-logo-transparent.png" alt="U-Connect Logo" className="w-2/3" />
            </div>

            {/* Post List */}
            <div className="lg:w-2/3 w-full p-4">
                {/** <PostCard {...samplePost} />
        <PostCard {...samplePost} /> */}
            </div>

            {/* Mobile Navigation */}
            <div className="fixed bottom-0 w-full bg-neutral-200 text-neutral-100 flex justify-around py-2 lg:hidden">
                <button className="flex flex-col items-center">
                    <FaHome className="text-xl" />
                    <span className="text-xs">Home</span>
                </button>
                <button className="flex flex-col items-center">
                    <FaSearch className="text-xl" />
                    <span className="text-xs">Search</span>
                </button>
                <button className="flex flex-col items-center">
                    <FaPlusSquare className="text-xl" />
                    <span className="text-xs">Post</span>
                </button>
                <button className="flex flex-col items-center">
                    <FaEnvelope className="text-xl" />
                    <span className="text-xs">Messages</span>
                </button>
                <button className="flex flex-col items-center">
                    <FaUser className="text-xl" />
                    <span className="text-xs">Profile</span>
                </button>
            </div>
        </div>
    )
}