import React from 'react';
import { Flag, Smile, Users } from 'react-feather';

const properties = [
  {
    name: 'Motivated',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    icon: <Smile />,
  },
  {
    name: 'Teamplayer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    icon: <Users />,
  },
  {
    name: 'Independent',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    icon: <Flag />,
  },
];

function Properties() {
  return (
    <div className="flex flex-col gap-y-3 pt-12">
      <h2 className="text-white font-bold text-2xl pb-4">Properties</h2>
      <div className="grid xl:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.name} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative">
            <h3 className="text-white font-bold pt-4">{property.name}</h3>
            <p className="absolute bg-sky-400/75 w-fit text-white p-2 rounded-full -top-4 right-4 shadow-lg">{property.icon}</p>
            <p className="text-neutral-400">{property.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
