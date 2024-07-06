import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaShare, FaHome, FaSearch, FaPlus, FaEnvelope, FaUserCircle } from 'react-icons/fa';

import logo from '/u-logo-inverted.png';

interface PostCardProps {
  tag: string;
  profileImage: string;
  username: string;
  timestamp: string;
  content: string;
}

const PostCard: FC<PostCardProps> = ({ tag, profileImage, username, timestamp, content }) => {
    return (
      <div className="bg-neutral-200 text-neutral-100 rounded-md shadow-xl p-4 mb-4 w-full">
        <div className="bg-accent-200 text-neutral-100 text-sm font-bold py-1 px-2 rounded mb-2">{tag}</div>
        <div className="flex items-center mb-4">
          <img src={profileImage} alt={username} className="rounded-full w-10 h-10 mr-4" />
          <div>
            <div className="text-secondary-200 text-sm">Posted by {username} • {timestamp}</div>
          </div>
        </div>
        <div className="mb-4">{content}</div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="border border-accent-200 text-accent-200 rounded-full p-2"><FaHeart /></button>
            <button className="border border-secondary-200 text-secondary-200 rounded-full p-2"><FaRegHeart /></button>
          </div>
          <div className="flex space-x-2">
            <button className="border border-neutral-100 text-neutral-100 rounded-full p-2"><FaComment /></button>
            <button className="border border-neutral-100 text-neutral-100 rounded-full p-2"><FaShare /></button>
          </div>
        </div>
      </div>
    );
  };
  
  const PostList: FC = () => {
    const samplePost = {
      tag: 'Technology',
      profileImage: 'https://via.placeholder.com/150',
      username: 'John Doe',
      timestamp: '2 hours ago',
      content: 'This is a sample post content. It can be a text or any other element.',
    };
  
    const posts = Array(5).fill(samplePost);
  
    return (
      <div className="p-4 mx-auto max-w-lg lg:mt-24">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    );
  };
  
  export default function Dashboard() {
    const navigate = useNavigate();
  
    const handleNav = (path: string) => {
      navigate(path);
    };
  
    return (
      <div className="min-h-screen bg-primary-100 text-secondary-100 flex">
        {/* Sidebar for desktop */}
        <div className="hidden fixed h-screen py-auto content-center justify-center bg-opacity-80 backdrop-blur md:grid md:gap-12 md:w-fit md:py-4 md:px-2 md:space-y-4">
          <button onClick={() => handleNav('/')} className="text-secondary-100 text-center flex gap-2 items-center mx-2 text-lg font-semibold"><FaHome /> Home</button>
          <button onClick={() => handleNav('/search')} className="text-secondary-100 text-center flex gap-2 items-center mx-2 text-lg font-semibold"><FaSearch /> Discover</button>
          <button onClick={() => handleNav('/post')} className="text-secondary-100 text-center flex gap-2 items-center mx-2 text-lg font-semibold"><FaPlus /> New Post</button>
          <button onClick={() => handleNav('/')} className="text-secondary-100 text-center flex gap-2 items-center mx-2 text-lg font-semibold"><FaUserCircle /> Account </button>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="flex fixed items-center text-center justify-between bg-secondary-100 py-2 px-8 rounded-sm shadow-2xl w-full left-0">
            <h1 className="text-neutral-100 text-md">Welcome, User</h1>
            <img src={logo} alt="U-Connect Logo" className="w-16 h-12 lg:w-28 lg:h-20" />
            <button onClick={() => handleNav('/messages')} className="text-neutral-100 lg:hidden"><FaEnvelope /></button>   
          </div>
          <PostList />
        </div>

        {/* Bottom navigation for mobile */}
        <div className="fixed bottom-0 w-full bg-neutral-100 border-t border-secondary-200 px-2 py-4 flex justify-around z-50 md:hidden">
          <button onClick={() => handleNav('/')} className="text-secondary-100"><FaHome /></button>
          <button onClick={() => handleNav('/search')} className="text-secondary-100"><FaSearch /></button>
          <button onClick={() => handleNav('/post')} className="text-secondary-100"><FaPlus /></button>
          <button onClick={() => handleNav('/messages')} className="text-secondary-100"><FaEnvelope /></button>
          <button onClick={() => handleNav('/')} className="text-secondary-100"><FaUserCircle /></button>
        </div>
      </div>
    );
  };
