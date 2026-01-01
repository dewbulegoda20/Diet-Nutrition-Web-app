import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f0f4f2] dark:border-[#1e2f25]">
      <div className="layout-container flex justify-center w-full">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between w-full max-w-7xl">
          <Link to="/" className="flex items-center gap-2 text-text-main dark:text-white cursor-pointer">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">nutrition</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">NutriTrack</h2>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
            <a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
            <a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Blog</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:flex h-10 items-center justify-center rounded-lg px-4 text-sm font-bold text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              Login
            </Link>
            <Link to="/signup" className="h-10 flex items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-[#111814] hover:bg-[#0fd673] transition-colors shadow-sm hover:shadow-md">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
