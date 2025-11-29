import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SavingsComparison from './components/SavingsComparison';
import LiveMarketplace from './components/LiveMarketplace';
import TrustGuarantee from './components/TrustGuarantee';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PublishPreview from './components/PublishPreview';
import SafetySection from './components/SafetySection';
import Categories from './components/Categories';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onSearch={setSearchTerm} />
      <main>
        <Hero />
        <SavingsComparison />
        <LiveMarketplace searchTerm={searchTerm} />
        <TrustGuarantee />
        <SocialProof />
        <Features />
        <HowItWorks />
        <PublishPreview />
        <SafetySection />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default App;