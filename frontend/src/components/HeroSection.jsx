import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl px-4 md:px-10 py-12 md:py-20 relative">
      <div className="@container">
        <div className="flex flex-col-reverse gap-10 md:gap-16 lg:flex-row items-center">
          <div className="flex flex-col gap-6 flex-1 text-center lg:text-left items-center lg:items-start z-10">
            <h1 className="text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Eat Smart. <br className="hidden lg:block"/>
              <span className="relative inline-block text-primary">
                Live Better.
              </span>
            </h1>
            
            <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-medium max-w-xl">
              Discover the joy of healthy eating with effortless meal tracking and personalized nutrition insights.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full mt-2">
              <Link to="/signup" className="h-12 px-8 rounded-lg bg-primary text-[#111814] text-base font-bold hover:bg-[#0fd673] hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 flex items-center justify-center">
                Get Started Free
              </Link>
              <button className="h-12 px-8 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
                View Demo
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-500 mt-2">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              <span>Free 14-day trial</span>
            </div>
          </div>
          
          <div className="w-full flex-1 lg:max-w-[50%]">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                alt="Overhead view of a delicious healthy meal with salmon, avocado, and vegetables" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtFR4KWfwfAPaIgNDha8Rgbm4R9YIaGZ5mYB1FLWDu2-06drJyVq94YAgXGAL39JvpUvnB9p8egp9ONJb3zBJSuS0dWLHQfhnDi4cv_fufATfy8u1IVTqJo7hBFhYztAeinq7HaHONgXo9d2Mh9-GwUwae8LBctAXPBnZf3UHyqBNksYyVdbvXApb5ZRtAkkOwJg_T2G-0obQyx4WD8WoDDLFb76WvhTc_Gg6JkXFVN-4rG9FqlkFwavLPkpmQxdo7o6Oyqi0Bo7sv"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-[#1a2e24]/95 backdrop-blur rounded-xl shadow-lg border border-gray-100 dark:border-white/5 flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">restaurant</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">Lunch</p>
                    <p className="text-lg font-bold text-text-main dark:text-white">Salmon Bowl</p>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-gray-200 dark:bg-white/10"></div>
                
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined">local_fire_department</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">Calories</p>
                    <p className="text-lg font-bold text-text-main dark:text-white">450 kcal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
