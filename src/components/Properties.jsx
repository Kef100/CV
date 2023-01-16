import React from 'react';
import { Box, Smile, Users } from 'react-feather';
import data from '../data.json';

function Properties() {
  const chooseIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'smile':
        return <Smile />;
      case 'users':
        return <Users />;
      case 'box':
        return <Box />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-y-3 overflow-hidden">
      <h2 className="text-white font-bold text-2xl pb-4">Properties</h2>
      <div className="grid xl:grid-cols-3 gap-16">
        {data.properties.map((property) => (
          <div key={property.name} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative min-h-[20rem] lg:min-h-unset">
            <h3 className="text-white font-bold pt-4">{property.name}</h3>
            <p className="absolute bg-sky-400/75 w-fit text-white p-2 rounded-full -top-4 right-4 shadow-lg">{chooseIcon(property.icon)}</p>
            <p className="text-neutral-400">{property.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
