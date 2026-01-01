const TrustedBySection = () => {
  return (
    <section className="w-full border-y border-[#f0f4f2] dark:border-[#1e2f25] bg-white dark:bg-background-dark/50 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-text-muted dark:text-gray-500 mb-6">TRUSTED BY HEALTH ENTHUSIASTS WORLDWIDE</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold font-display text-text-main dark:text-white">
            <span className="material-symbols-outlined">fitness_center</span> FitLife
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-display text-text-main dark:text-white">
            <span className="material-symbols-outlined">health_and_safety</span> HealthHub
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-display text-text-main dark:text-white">
            <span className="material-symbols-outlined">eco</span> PureFood
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-display text-text-main dark:text-white">
            <span className="material-symbols-outlined">monitor_heart</span> CardioPlus
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
