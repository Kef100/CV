import React from 'react';
import { Command, Grid, PenTool } from 'react-feather';
import data from '../data.json';

function Preferences() {
  const chooseIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pentool':
        return <PenTool />;
      case 'command':
        return <Command />;
      case 'grid':
        return <Grid />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-white font-bold text-2xl pb-4">Preferences</h2>
      <div className="grid xl:grid-cols-3 gap-16">
        {data.preferences.map((preference) => (
          <div key={preference.name} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative">
            <h3 className="text-white font-bold pt-4">{preference.name}</h3>
            <p className="absolute bg-sky-400/75 w-fit text-white p-2 rounded-full -top-4 right-4 shadow-lg">{chooseIcon(preference.icon)}</p>
            <p className="text-neutral-400">{preference.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preferences;
