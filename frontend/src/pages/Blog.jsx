import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-900 cursor-pointer">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">nutrition</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">NutriTrack</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-900 text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link to="/" className="text-gray-900 text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blog" className="text-primary text-sm font-bold transition-colors">Blog</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:flex h-10 items-center justify-center rounded-lg px-4 text-sm font-bold text-gray-900 hover:bg-gray-100 transition-colors">
              Login
            </Link>
            <Link to="/signup" className="h-10 flex items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-gray-900 hover:bg-emerald-600 transition-colors shadow-sm hover:shadow-md">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center w-full">
        {/* Featured Article */}
        <section className="w-full max-w-7xl px-4 md:px-10 py-8 md:py-12">
          <div className="relative w-full rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              <div className="relative h-64 lg:h-auto overflow-hidden group">
                <img 
                  alt="Healthy balanced meal bowl" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start relative">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary mb-6 tracking-wide uppercase">
                  Featured Article
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                  The Science of Meal Timing: <span className="text-primary">Is When You Eat as Important as What You Eat?</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">
                  Discover how your circadian rhythm influences metabolism and learn practical strategies to optimize your eating schedule for better energy and digestion.
                </p>
                <div className="flex items-center gap-4 w-full border-t border-gray-100 pt-6 mt-auto">
                  <div className="size-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img alt="Author" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">Dr. Sarah Miller</span>
                    <span className="text-xs text-gray-500">Oct 24, 2023 • 8 min read</span>
                  </div>
                  <button className="ml-auto flex items-center justify-center size-12 rounded-full bg-primary text-gray-900 hover:bg-emerald-600 hover:scale-110 transition-all shadow-lg">
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search */}
        <section className="w-full max-w-7xl px-4 md:px-10 py-6 sticky top-[64px] z-40 bg-background-light/95 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <button className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-bold whitespace-nowrap shadow-md">
                All Posts
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 text-sm font-bold whitespace-nowrap transition-all">
                Nutrition
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 text-sm font-bold whitespace-nowrap transition-all">
                Recipes
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 text-sm font-bold whitespace-nowrap transition-all">
                Wellness
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 text-sm font-bold whitespace-nowrap transition-all">
                Fitness
              </button>
            </div>
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-500 text-xl">search</span>
              </div>
              <input 
                className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow text-sm" 
                placeholder="Search articles, recipes, topics..." 
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="w-full max-w-7xl px-4 md:px-10 py-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Healthy salad bowl" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                  Recipes
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  5 Quick & Healthy Lunch Bowls for Busy Weekdays
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  Stop skipping lunch! These nutrient-dense bowls can be prepped in under 15 minutes.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-600">By Chef Mario</span>
                  <span className="text-xs text-gray-500">Oct 22 • 5 min</span>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Woman stretching outdoors" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                  Fitness
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Why Recovery Days Are Essential for Muscle Growth
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  Overtraining can stall your progress. Learn how to implement active recovery into your routine.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-600">By Alex Trainer</span>
                  <span className="text-xs text-gray-500">Oct 20 • 6 min</span>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Various healthy vegetables" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                  Nutrition
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Understanding Micros: Vitamins You Might Be Missing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  We focus a lot on macros, but micronutrients are the unsung heroes of long-term health.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-600">By Dr. Sarah Miller</span>
                  <span className="text-xs text-gray-500">Oct 18 • 10 min</span>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Green smoothie preparation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                  Wellness
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Detox Myths Debunked: How Your Body Actually Cleanses
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  Forget the expensive juices. Here is the science-backed truth about bodily detoxification.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-600">By Medical Team</span>
                  <span className="text-xs text-gray-500">Oct 15 • 7 min</span>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Avocado toast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&h=400&fit=crop" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                  Recipes
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  The Ultimate Avocado Toast Variations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  Elevate your breakfast game with these 10 delicious and nutritious toppings.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-600">By Chef Mario</span>
                  <span className="text-xs text-gray-500">Oct 12 • 4 min</span>
                </div>
              </div>
            </article>

            {/* Article 6 */}
            <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img alt="Woman doing yoga" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                  Wellness
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Morning Routines for a Productive Day
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  How you start your morning sets the tone for the rest of your day. Here's what experts recommend.
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-600">By Editorial Team</span>
                  <span className="text-xs text-gray-500">Oct 10 • 5 min</span>
                </div>
              </div>
            </article>
          </div>

          <div className="w-full flex justify-center mt-12">
            <button className="px-8 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full px-4 mb-20">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative">
            <img alt="Fresh ingredients background" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=600&fit=crop" />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 p-8 md:p-16 text-center">
              <span className="material-symbols-outlined text-6xl text-primary mb-4">mail</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nutrition Tips in Your Inbox</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">Join 50,000+ subscribers getting weekly healthy recipes, workout plans, and wellness advice.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm" 
                  placeholder="Enter your email address" 
                  type="email"
                />
                <button 
                  className="px-6 py-3 rounded-lg bg-primary text-gray-900 font-bold hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg shadow-primary/25 whitespace-nowrap" 
                  type="button"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2 text-gray-900">
              <span className="material-symbols-outlined text-2xl text-primary">nutrition</span>
              <h2 className="text-lg font-bold">NutriTrack</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Making nutrition simple, accessible, and effective for everyone.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-3">
              <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider">Product</h4>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Features</Link>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Pricing</Link>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Database</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider">Company</h4>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">About Us</Link>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Careers</Link>
              <Link to="/blog" className="text-gray-600 text-sm hover:text-primary transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider">Support</h4>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Help Center</Link>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Contact</Link>
              <Link to="/" className="text-gray-600 text-sm hover:text-primary transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2023 NutriTrack Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-primary"><span className="material-symbols-outlined text-xl">share</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
