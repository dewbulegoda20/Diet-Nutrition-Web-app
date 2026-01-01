const TestimonialsSection = () => {
  return (
    <section className="w-full max-w-7xl px-4 md:px-10 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-main dark:text-white">Success Stories</h2>
        <p className="text-text-muted dark:text-gray-400 mt-2">Join a community of people changing their lives.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-[#1a2e24] border border-[#f0f4f2] dark:border-[#2a3f35] items-center text-center hover:scale-[1.02] transition-transform">
          <div 
            className="size-20 rounded-full bg-cover bg-center mb-2 border-4 border-primary/20" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFWkznehDJ1Ou3JdO0zGezKQW44ErAzKUmtowaPLp1ot_-U6STNfAkln30UVyzOx2FdKK56vxaQbpWybx8cr7zcplwKfVuaOCGwwAEE0Ua-nocTuRhLXRsJKw88p9U6dsUyYXPqehapZk4VNgd4M1P4lrzcf_s-uyFedkyrFkzIhuAzYUYihw0e1TFUqGBbxvik9g-QKcnAVmZ_jWJSfD6MHZrHXLz8g5Ts57v7nia7sreWi9IftV0Yg_DjegCfNffMg22ci_uNz3h")'}}
          ></div>
          <div>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-text-main dark:text-gray-200 text-lg font-medium leading-normal mb-2">"I lost 10lbs in my first month! The tracking is so easy and fun."</p>
            <p className="text-text-muted dark:text-gray-500 text-sm font-bold uppercase tracking-wide">Sarah J.</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-[#1a2e24] border border-[#f0f4f2] dark:border-[#2a3f35] items-center text-center hover:scale-[1.02] transition-transform md:-mt-4">
          <div 
            className="size-20 rounded-full bg-cover bg-center mb-2 border-4 border-primary/20" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChjN2DcVfVq93a7JrOOJYVYtH3uS62AYagx-d54ad8bG7fXkpEOSnlVJnCmDYXg8GXlHnIX00O2yslXoWU0Im643v3a6IMkNgju46hEzH7isIuUhc7F635Aib0JOUcs_aePUH8lKtqQBFha3EahKv_hOOA_TdWHETJFa-G5OqJMNHzyJz-LkpExlR7bBcRCzwcFQc_0bngmqL6RdUaanLjySVr-8z6rN69LqHF273Bc9oMQrYwZFTJ6mD-SGdF8lnrhSLLo8zUikkU")'}}
          ></div>
          <div>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-text-main dark:text-gray-200 text-lg font-medium leading-normal mb-2">"Finally, an app that helps me hit my macro goals without the fuss."</p>
            <p className="text-text-muted dark:text-gray-500 text-sm font-bold uppercase tracking-wide">Mike T.</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-[#1a2e24] border border-[#f0f4f2] dark:border-[#2a3f35] items-center text-center hover:scale-[1.02] transition-transform">
          <div 
            className="size-20 rounded-full bg-cover bg-center mb-2 border-4 border-primary/20" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYF7Bmo-37ate4BxUsnowlODQXzgJo1oe4pDzypU3brA-UnFNEzwDGfX8lfniIos_tWm-srNnCXh0Go40tzFxE-2P-GuJH1J3F2q2f0c1Kae0DQ32n5EN44L0Cv-8XbCNsEeu7jK6eSwQaQ4T4JQJO8pyicNwsPdGA3ZOjw2Ghxv7Cmll-O-ngPAL7MMWur3TXL5EEvtZOK5xSDBtDGMmAN5_7QAtSNrRmvkyAvUTsS4LTSiGgWwLNjNVhQCs1Bckpw8cv6EcPrzmi")'}}
          ></div>
          <div>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
              <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-text-main dark:text-gray-200 text-lg font-medium leading-normal mb-2">"The healthy recipes are a game changer for my family dinners."</p>
            <p className="text-text-muted dark:text-gray-500 text-sm font-bold uppercase tracking-wide">Emily R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
