import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

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
            <Link to="/pricing" className="text-primary font-bold text-sm transition-colors">Pricing</Link>
            <Link to="/blog" className="text-gray-900 text-sm font-medium hover:text-primary transition-colors">Blog</Link>
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
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-4 md:px-10 py-16 relative">
          <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden relative shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-16 flex flex-col gap-6 z-10">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Invest in Your <span className="text-primary">Health</span> Today.
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Choose the plan that fits your lifestyle. Unlock personalized insights, advanced tracking, and a healthier you. No hidden fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-gray-900 text-sm font-medium">Cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-gray-900 text-sm font-medium">14-day money-back guarantee</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <img 
                  alt="Healthy lifestyle, woman enjoying a salad" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent lg:w-1/3"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent lg:hidden h-1/3 bottom-0 top-auto w-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full max-w-7xl px-4 md:px-10 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <div className="inline-flex bg-gray-100 p-1 rounded-xl">
              <button 
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                  billingPeriod === 'yearly' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly <span className="text-xs text-primary ml-1 font-bold">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Basic Plan */}
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Basic</h3>
                <p className="text-sm text-gray-600 mt-2">Essential tools to start your journey.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-gray-900">$0</span>
                  <span className="text-gray-500 mb-1">/ month</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 rounded-xl border-2 border-primary text-gray-900 font-bold hover:bg-primary/10 transition-colors mb-8">
                Get Started Free
              </button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Basic calorie tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Access to food database</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>7 days of history</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="material-symbols-outlined text-lg">close</span>
                  <span>Custom macro goals</span>
                </li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-primary shadow-2xl shadow-primary/10 scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-gray-900 text-xs font-black px-3 py-1 rounded-bl-xl rounded-tr-lg">POPULAR</div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                <p className="text-sm text-gray-600 mt-2">Advanced features for serious results.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-gray-900">$9.99</span>
                  <span className="text-gray-500 mb-1">/ month</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 rounded-xl bg-primary text-gray-900 font-bold hover:bg-emerald-600 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mb-8">
                Start 14-Day Free Trial
              </button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span className="font-bold">Everything in Basic</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Unlimited history & data export</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Custom macro & micronutrient goals</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Barcode scanner</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Exclusive healthy recipes</span>
                </li>
              </ul>
            </div>

            {/* Family Plan */}
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Family</h3>
                <p className="text-sm text-gray-600 mt-2">Healthier together for the whole house.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-gray-900">$19.99</span>
                  <span className="text-gray-500 mb-1">/ month</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 rounded-xl border-2 border-primary text-gray-900 font-bold hover:bg-primary/10 transition-colors mb-8">
                Choose Family
              </button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span className="font-bold">Everything in Premium</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Up to 5 family member accounts</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Shared meal planning</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-900">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  <span>Centralized grocery lists</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-white border-y border-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  alt="Detail of the app interface showing nutritional breakdown" 
                  className="rounded-2xl shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=800&fit=crop"
                />
              </div>
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-gray-900">Included in Every Plan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-2">
                      <span className="material-symbols-outlined">database</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Huge Food Database</h4>
                    <p className="text-sm text-gray-600">Over 1 million verified foods from supermarkets and restaurants.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Secure Data</h4>
                    <p className="text-sm text-gray-600">Your health data is encrypted and private. We never sell your info.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                      <span className="material-symbols-outlined">devices</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Cross-Platform</h4>
                    <p className="text-sm text-gray-600">Sync seamlessly between web, iOS, and Android devices.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="size-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                      <span className="material-symbols-outlined">support_agent</span>
                    </div>
                    <h4 className="font-bold text-gray-900">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Our team is always here to help you troubleshoot or reach your goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-4xl mx-auto px-4 md:px-10 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Have questions? We're here to help.</p>
          </div>
          <div className="flex flex-col gap-4">
            <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900">
                Can I switch plans later?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Absolutely! You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the new features will be available immediately.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900">
                Is there a free trial for Premium?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes, we offer a 14-day free trial for our Premium plan. You won't be charged until the trial period ends, and you can cancel anytime before then.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900">
                How does the family plan work?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                The Family Plan allows you to invite up to 4 other members to your account. Each person gets their own private login and data, but you can choose to share meal plans and grocery lists.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900">
                Do I need a credit card for the Basic plan?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                No, the Basic plan is completely free forever and does not require a credit card to sign up.
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 mb-20">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative group">
            <img 
              alt="People cooking healthy food together" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=600&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="relative z-10 p-8 md:p-20 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join 50,000+ happy users transforming their lives.</h2>
              <p className="text-gray-200 text-lg mb-8">
                "NutriTrack made it possible for me to understand my body. The Premium features are worth every penny for the macro insights alone."
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="size-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="size-10 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-white font-bold text-sm">Rated 4.9/5 by our community</span>
              </div>
              <button className="h-12 px-8 rounded-lg bg-primary text-gray-900 text-base font-bold hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg shadow-primary/25">
                Start Your Free Trial
              </button>
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
              <Link to="/pricing" className="text-primary font-bold text-sm">Pricing</Link>
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

export default Pricing;
