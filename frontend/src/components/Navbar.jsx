import { Link } from 'react-router-dom';

const Navbar = ({ activeTab, setActiveTab, user, handleLogout }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-lg">nutrition</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">NutriTrack</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('food-diary')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'food-diary'
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Food Diary
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'reports'
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'community'
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Community
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-primary focus:outline-none relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.fullName || 'User'}</p>
                <p className="text-xs text-gray-500">{user?.membershipType || 'Pro'} Member</p>
              </div>
              <button 
                onClick={handleLogout}
                className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src={user?.profileImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuAtTfzfjOCJ0xrLq9GH_NyH74YgMva0md4iWJ9pwBZPYfraR-qe0t3a-iWWHzKqoE0br3upycqVkvIsPeOx93l0VucokwRVDY1BPGlV7dAxP0fcXauC9TlPBst-ODZyPM0loqRNiriD1yQyTGX-q4hpEvUdz8k2V4zdhI552uhNIJsmJt7M--G0Ywf5ecQbsarKR40TegMxXjqZefu1RLQgrDFpMD6ev_xgSaTEq9Yt-PGy6D45szw2iN2heZrWgwvYGi_w_miVduat"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
