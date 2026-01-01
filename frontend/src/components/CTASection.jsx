import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="w-full px-4 mb-20">
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative">
        <img 
          alt="Healthy food background" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpBX9dx1QOKST7s_4swBrrazhEE2hGiKOndhOt3A6pzDFs1ctW3TPeeesLpLa5AZHpcht7-dSBSYfp5wLTYIJscuLSB7LFV2AS9E_fuBo36XgKVooLai5x2nnkqRWH8TSdJg5xvZGON1WRIQyufnI6Qjm1XzgOjoWUPXj9y4lTpawKtQvosAA1hYZo09Cv5z5fqHxQ9YC6OoAOPYDboM_u9o1MdnCfLLMhnTfqWXOJe4kpNdCIvKh8JEcbCnhlqbIB9IGRLEHGoTJ"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 p-8 md:p-16 text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4">spa</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start Your Journey Today</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">Join NutriTrack now and take the first step towards a better you. No credit card required.</p>
          <Link to="/signup" className="inline-block h-12 px-8 rounded-lg bg-primary text-[#111814] text-base font-bold hover:bg-[#0fd673] hover:scale-105 transition-all shadow-lg shadow-primary/25 flex items-center justify-center mx-auto w-fit">
            Create Free Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
