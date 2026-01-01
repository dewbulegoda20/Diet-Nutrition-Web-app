const FeaturesSection = () => {
  return (
    <section className="w-full max-w-7xl px-4 md:px-10 py-16 md:py-24">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Why Choose NutriTrack?</h2>
          <p className="text-lg text-text-muted dark:text-gray-400">Everything you need to understand your habits and make better choices, all in one place.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="group relative overflow-hidden flex flex-col justify-end p-8 h-[400px] rounded-2xl border border-[#dbe6e0] dark:border-[#1e2f25] bg-white dark:bg-[#1a2e24] hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
            <img 
              alt="Fresh vegetables and ingredients for meal prep" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL04Ynh1Td2awBzDifubQO3anrxk7Qogt4M80R7fzio7AtCusuNZuSenyNhfg5isRkUu2H5ZsWQ4WS9ZSEm5MlXalQJezaOvaOTt3ODBceZGD25M8Zim0o2Jq-pLhD5H8GgUetBQYQtlyS8Bgx8IqwxomKCtvIGchBredWmMyjprN6Ron_q8ndduwrorP_v3L7P4i4oNt2Toi7aWding2PwptKbAbNrF3KnA3GL6r1YF28mKYWKqm2LzHorvAvYy_-af1nx402GRY6"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 text-white">
              <div className="size-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4">
                <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Track Your Meals</h3>
              <p className="text-gray-200 text-sm leading-relaxed">Log breakfast, lunch, and dinner in seconds using our intuitive search or barcode scanner.</p>
            </div>
          </div>
          
          <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-[#dbe6e0] dark:border-[#1e2f25] bg-white dark:bg-[#1a2e24] hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
            <div className="size-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Achieve Your Goals</h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">Set personalized daily targets for calories, macros, and hydration. Visualize your progress with beautiful, easy-to-read charts.</p>
            </div>
            <div className="mt-auto pt-6 flex items-end gap-1 h-24 w-full opacity-50">
              <div className="w-1/5 bg-blue-200 h-[40%] rounded-t-sm"></div>
              <div className="w-1/5 bg-blue-300 h-[60%] rounded-t-sm"></div>
              <div className="w-1/5 bg-blue-400 h-[80%] rounded-t-sm"></div>
              <div className="w-1/5 bg-blue-500 h-[50%] rounded-t-sm"></div>
              <div className="w-1/5 bg-primary h-[90%] rounded-t-sm"></div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden flex flex-col justify-end p-8 h-[400px] rounded-2xl border border-[#dbe6e0] dark:border-[#1e2f25] bg-white dark:bg-[#1a2e24] hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
            <img 
              alt="Colorful healthy salad bowl" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAimssCf82oZk1VKFveK3xaOt5r25N8CVbI_jERDEYzY4FUzmU4XG6o8pl6FAWPwFjZd9Cbdd5ADmZAHlNl3bqEVIrGl4z9ydBJ0cEQY9Yw3o7WXVey8myxcJTolp_DIqNY8i7m1qVUBhNdFpeY7TUYNMIcf9Mg7QUVYJjnlFNrr2CLz4xbNRMtGYrEi4WMI0KCOC_8bKR4IBPqOryV4kCboLyu7VKw4ZUE8Lt0Zf-ziNNCclGF3k8HAAuY0f7wbdrfOlWHX0mbEQq6"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 text-white">
              <div className="size-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4">
                <span className="material-symbols-outlined text-2xl">skillet</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover Recipes</h3>
              <p className="text-gray-200 text-sm leading-relaxed">Explore thousands of dietitian-approved healthy recipes tailored to your dietary preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
