import React from 'react';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Information from './components/Information';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Properties from './components/Properties';
import Preferences from './components/Preferences';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Lint from './components/Lint';

function App() {
  return (
    <div className="flex flex-col xl:flex-row font-roboto bg-accent-600 relative">
      <Lint />
      <Sidebar />
      <div className="w-full h-full min-h-screen bg-accent-600 p-6 xl:px-10 xl:py-6 relative overflow-hidden">
        <div className="pb-10 flex flex-col gap-y-10 h-full">
          <Banner />
          <Information />
          <WorkExperience />
          <Education />
          <Properties />
          <Preferences />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
