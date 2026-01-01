const ProgressSection = () => {
  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-12 px-4 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl bg-primary/5 dark:bg-primary/5 overflow-hidden relative border border-primary/10">
        <div className="grid lg:grid-cols-2 items-center gap-10 p-8 md:p-16">
          <div className="order-2 lg:order-1 relative z-10">
            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">See your progress in real-time</h2>
            <p className="text-text-muted dark:text-gray-400 mb-8">
              Our dashboard gives you a complete overview of your nutritional intake, water consumption, and activity levels.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-text-main dark:text-gray-200 font-medium">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Weekly macro breakdown reports</span>
              </li>
              <li className="flex items-center gap-3 text-text-main dark:text-gray-200 font-medium">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Sync with Apple Health & Google Fit</span>
              </li>
              <li className="flex items-center gap-3 text-text-main dark:text-gray-200 font-medium">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Smart suggestions for your next meal</span>
              </li>
            </ul>
            
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Explore Features <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square bg-white dark:bg-[#1a2e24] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5 p-4 flex flex-col gap-4 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                  <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                  <div className="h-4 w-32 bg-gray-800 dark:bg-gray-300 rounded"></div>
                </div>
                <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-700"></div>
              </div>
              
              <div className="h-32 w-full bg-primary/10 rounded-xl flex items-end justify-between p-4 pb-0 gap-2">
                <div className="w-full bg-primary/40 rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-primary/60 rounded-t-sm h-[70%]"></div>
                <div className="w-full bg-primary rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-primary/50 rounded-t-sm h-[80%]"></div>
                <div className="w-full bg-primary/30 rounded-t-sm h-[60%]"></div>
              </div>
              
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="size-10 rounded-lg overflow-hidden relative">
                    <img 
                      alt="Breakfast" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQRMAcM3iM17S6B1iSTaEWYmprjfFB0NppRj9M3SHbuPBFKqWseTMlZ-qBgis7psP8ooK20_Eb6gKa9Jx0d2WPZPntrzQY4up36hRZTxqYsdfzRuzSpuCqGOPhv7NM7rRGPrDtlZdEd6C0B-kiSukzXG_SqN-lgUiOFOnK_DabLC9_9hMvBZZyyA9pmRpndtha7m54T7t_ibnRA1y4yOVF4VdPmyGojI60nOEHGOuI79zoHG7Ybcq_1NLU9tjsKpVA5Bi6Haw7jfe1"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <span className="text-xs font-bold text-text-muted">320 kcal</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="size-10 rounded-lg overflow-hidden relative">
                    <img 
                      alt="Lunch" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHvgMgRflTl6yIe_K9ZBlhsTmjPcmFhGHyeHdOAfaJwFgH8TIJkeMaDo6X8jBMwgy9ZuSE-RThX2ScMaVw2EK8gL55V6qvkitWoIAb2vHJJxPlva81ejp3X3cRkCB4h4xcCIxy9GbGCxyeBMSlSrsFAtd1em4JYwgzNGGka6aJMKs6Ng8aR1HQJdCEENB2Q9KN1MYS9KDU5q2QIeYdrhJL0D1qMic799w4k8enptkG7xEwEmpV9fYQHtzHGyvVfTWeH5ox5tm2-8Hn"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <span className="text-xs font-bold text-text-muted">540 kcal</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="size-10 rounded-lg overflow-hidden relative">
                    <img 
                      alt="Dinner" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa0VBo3nODQgW6LluOrN__UuxL38wxAbOiT30GWl6EdON84RfbIFqjG2cKkRSKznNQTI-BYtun2Fg7awPGs4Qz9MPcREMtGZ-TOaj7lhkdsYz81GNf4hMtgVs1z0RQ9n3tgYcZr9r7cPyDSeV-wh-6YspCRHiH30IRj7NsTUDbXyUbrFBhvjNYTnsfHS3h4ZegbqTUgiSKJ6iQc4EsO5_wTmATk4Jr9b64qmSVn9Dzjrqt2potmFItqncdqdJA6kDYiz-p_Rgh0_kM"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <span className="text-xs font-bold text-text-muted">410 kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
