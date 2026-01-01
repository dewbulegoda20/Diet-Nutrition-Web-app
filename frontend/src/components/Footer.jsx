const Footer = () => {
  return (
    <footer className="w-full border-t border-[#f0f4f2] dark:border-[#1e2f25] bg-white dark:bg-background-dark py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-text-main dark:text-white">
            <span className="material-symbols-outlined text-2xl text-primary">nutrition</span>
            <h2 className="text-lg font-bold">NutriTrack</h2>
          </div>
          <p className="text-text-muted dark:text-gray-500 text-sm">
            Making nutrition simple, accessible, and effective for everyone.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <h4 className="text-text-main dark:text-white font-bold text-sm uppercase tracking-wider">Product</h4>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Features</a>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Pricing</a>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Database</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-text-main dark:text-white font-bold text-sm uppercase tracking-wider">Company</h4>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">About Us</a>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Careers</a>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Blog</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-text-main dark:text-white font-bold text-sm uppercase tracking-wider">Support</h4>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Help Center</a>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Contact</a>
            <a className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Privacy</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12 pt-8 border-t border-[#f0f4f2] dark:border-[#1e2f25] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted dark:text-gray-600 text-sm">© 2023 NutriTrack Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="text-text-muted dark:text-gray-500 hover:text-primary" href="#">
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
