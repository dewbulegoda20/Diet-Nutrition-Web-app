const CommunityTab = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Banner */}
      <div className="mb-8 relative rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-teal-700 mix-blend-multiply"></div>
        <img 
          alt="Community Header" 
          className="w-full h-48 object-cover opacity-60" 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Community Hub</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">Connect with friends, join challenges, and share your healthy journey. You're never alone on the path to wellness.</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-6 hidden lg:block">
          {/* Navigation Menu */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4">
            <nav className="space-y-1">
              <a className="bg-primary/10 text-primary font-medium flex items-center px-3 py-2 rounded-lg transition-colors" href="#">
                <span className="material-icons-round mr-3">feed</span>
                Activity Feed
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary font-medium flex items-center px-3 py-2 rounded-lg transition-colors" href="#">
                <span className="material-icons-round mr-3">groups</span>
                My Groups
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary font-medium flex items-center px-3 py-2 rounded-lg transition-colors" href="#">
                <span className="material-icons-round mr-3">emoji_events</span>
                Challenges
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary font-medium flex items-center px-3 py-2 rounded-lg transition-colors" href="#">
                <span className="material-icons-round mr-3">bookmark</span>
                Saved Posts
              </a>
            </nav>
          </div>

          {/* Your Groups */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white">Your Groups</h3>
              <a className="text-xs text-primary font-semibold hover:underline" href="#">See All</a>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group cursor-pointer">
                <img alt="Keto Group" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=80&h=80&fit=crop" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">Keto Beginners</p>
                  <p className="text-xs text-gray-500">12 new posts</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <img alt="Yoga Group" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=80&h=80&fit=crop" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">Daily Yoga</p>
                  <p className="text-xs text-gray-500">5 new posts</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <img alt="Meal Prep Group" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=80&h=80&fit=crop" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">Meal Preppers</p>
                  <p className="text-xs text-gray-500">28 new posts</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Feed */}
        <div className="lg:col-span-6 space-y-6">
          {/* Create Post Card */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4">
            <div className="flex gap-4 mb-3">
              <img alt="Current User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" />
              <input 
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-primary dark:text-white" 
                placeholder="Share your progress, a recipe, or ask a question..." 
                type="text"
              />
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors">
                  <span className="material-icons-round text-lg text-blue-500">image</span>
                  Photo
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors">
                  <span className="material-icons-round text-lg text-green-500">restaurant_menu</span>
                  Food Log
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors">
                  <span className="material-icons-round text-lg text-orange-500">fitness_center</span>
                  Workout
                </button>
              </div>
              <button className="bg-primary hover:bg-emerald-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-sm transition-transform active:scale-95">Post</button>
            </div>
          </div>

          {/* Post 1 - Salad Recipe */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 pb-2 flex justify-between items-start">
              <div className="flex gap-3">
                <img alt="Sarah J" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Sarah Jenkins</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago • Healthy Eating Group</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <span className="material-icons-round">more_horiz</span>
              </button>
            </div>
            <div className="px-4 pb-3">
              <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">Found this amazing Quinoa Salad recipe! Only 350kcals and packed with protein. Perfect for lunch prep! 🥗🥑</p>
              <div className="rounded-lg overflow-hidden relative group cursor-pointer">
                <img alt="Salad" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop" />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="material-icons-round text-sm text-primary">local_fire_department</span>
                  350 kcal
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors text-sm">
                  <span className="material-icons-round text-lg">favorite_border</span> 24
                </button>
                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  <span className="material-icons-round text-lg">chat_bubble_outline</span> 5
                </button>
              </div>
              <button className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                <span className="material-icons-round text-lg">share</span>
              </button>
            </div>
          </div>

          {/* Post 2 - Running Achievement */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 pb-2 flex justify-between items-start">
              <div className="flex gap-3">
                <img alt="Marcus T" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Marcus Thompson</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 hours ago • Runner's High</p>
                </div>
              </div>
            </div>
            <div className="px-4 pb-3">
              <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">Just crushed my 10k personal best! Feeling unstoppable today. 🏃‍♂️💨 Check out that pace!</p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full text-orange-600 dark:text-orange-400">
                  <span className="material-icons-round text-3xl">emoji_events</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 dark:text-white">New Personal Record!</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">10k Run • 48:20 min</p>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-bold text-primary">10.0</span>
                  <span className="text-xs text-gray-500">km</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-pink-500 hover:text-pink-600 transition-colors text-sm font-medium">
                  <span className="material-icons-round text-lg">favorite</span> 156
                </button>
                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  <span className="material-icons-round text-lg">chat_bubble_outline</span> 32
                </button>
              </div>
            </div>
          </div>

          {/* Post 3 - Question Post */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-4">
            <div className="flex gap-3 mb-2">
              <img alt="David L" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">David Lin</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">8 hours ago • Muscle Gain 101</p>
              </div>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">Does anyone have recommendations for a good plant-based protein powder that doesn't taste like chalk? 🤔 Tried a few brands but haven't found 'the one' yet.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-1 rounded-full font-medium">#supplements</span>
              <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs px-2.5 py-1 rounded-full font-medium">#plantbased</span>
            </div>
            <div className="flex -space-x-2 overflow-hidden mb-3">
              <img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-card-dark" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop" />
              <img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-card-dark" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop" />
              <img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-card-dark" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=40&h=40&fit=crop" />
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white dark:ring-card-dark bg-gray-100 dark:bg-gray-700 text-[10px] font-medium text-gray-500 dark:text-gray-300 leading-none">+12</span>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-700 pt-2">
              <button className="text-primary text-sm font-medium hover:underline">View 15 replies</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons-round text-gray-400 text-lg">search</span>
              </span>
              <input 
                className="block w-full pl-10 pr-3 py-2 border-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 sm:text-sm bg-transparent" 
                placeholder="Search community..." 
                type="text"
              />
            </div>
          </div>

          {/* Trending Now */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-5">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Trending Now</h3>
            <div className="space-y-4">
              <a className="flex justify-between items-center group" href="#">
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary">#NoSugarChallenge</p>
                  <p className="text-xs text-gray-500">2.4k posts</p>
                </div>
                <span className="material-icons-round text-gray-400 text-sm">trending_up</span>
              </a>
              <a className="flex justify-between items-center group" href="#">
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary">#MarathonPrep</p>
                  <p className="text-xs text-gray-500">1.1k posts</p>
                </div>
                <span className="material-icons-round text-gray-400 text-sm">trending_up</span>
              </a>
              <a className="flex justify-between items-center group" href="#">
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary">#HealthySmoothies</p>
                  <p className="text-xs text-gray-500">856 posts</p>
                </div>
                <span className="material-icons-round text-gray-400 text-sm">trending_up</span>
              </a>
            </div>
          </div>

          {/* Challenge Card */}
          <div className="bg-gradient-to-br from-primary to-teal-600 rounded-xl shadow-md p-5 text-white relative overflow-hidden">
            <div className="absolute -top-4 -right-4 bg-white/10 w-24 h-24 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">New</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Summer Body Blast</h3>
              <p className="text-emerald-50 text-xs mb-4">Join 5,000+ members in this 30-day HIIT program.</p>
              <button className="w-full bg-white text-teal-700 font-bold py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors shadow-sm">Join Challenge</button>
            </div>
          </div>

          {/* Who to Follow */}
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-5">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Who to Follow</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img alt="User" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Emily R.</p>
                    <p className="text-[10px] text-gray-500">Yoga Instructor</p>
                  </div>
                </div>
                <button className="text-primary hover:bg-emerald-50 dark:hover:bg-emerald-900/20 p-1 rounded-full transition-colors">
                  <span className="material-icons-round text-lg">person_add</span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img alt="User" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">James K.</p>
                    <p className="text-[10px] text-gray-500">Nutritionist</p>
                  </div>
                </div>
                <button className="text-primary hover:bg-emerald-50 dark:hover:bg-emerald-900/20 p-1 rounded-full transition-colors">
                  <span className="material-icons-round text-lg">person_add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityTab;
