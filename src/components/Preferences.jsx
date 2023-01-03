import React from 'react';
import { Command, Grid, PenTool } from 'react-feather';

const preferences = [
  {
    name: 'Designing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    icon: <PenTool />,
  },
  {
    name: 'Frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    icon: <Command />,
  },
  {
    name: 'Components',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    icon: <Grid />,
  },
];

function Preferences() {
  return (
    <div className="flex flex-col gap-y-3 pt-12">
      <h2 className="text-white font-bold text-2xl pb-4">Properties</h2>
      <div className="grid xl:grid-cols-3 gap-16">
        {preferences.map((preference) => (
          <div key={preference.name} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative">
            <h3 className="text-white font-bold pt-4">{preference.name}</h3>
            <p className="absolute bg-sky-400/75 w-fit text-white p-2 rounded-full -top-4 right-4 shadow-lg">{preference.icon}</p>
            <p className="text-neutral-400">{preference.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preferences;
