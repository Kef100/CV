import React from 'react';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Information from './components/Information';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  return (
    <div className="flex flex-col xl:flex-row font-roboto">
      <Sidebar />
      <div className="w-full h-full min-h-screen bg-accent-600 p-6 xl:px-10 xl:py-6 relative">
        <Banner />
        <Information />
        <WorkExperience />
        <Education />
        <div className="flex flex-col gap-y-3 pt-12">
          <h2 className="text-white font-bold text-2xl pb-4">Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
