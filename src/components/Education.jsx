import React from 'react';
import data from '../data.json';

function Education() {
  return (
    <div className="flex flex-col gap-y-3 pt-8 overflow-hidden">
      <h2 className="text-white font-bold text-2xl pb-4">Education</h2>
      <div className="grid xl:grid-cols-3 gap-16">
        {data.educations.map((education) => (
          <div key={education.institution} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative">
            <h3 className="text-white font-bold pt-4">{education.institution}</h3>
            <p className="absolute bg-sky-400/75 w-fit text-white px-2 py-1 rounded-md -top-4 right-4 shadow-lg">{education.location}</p>
            <p className="text-neutral-400">{education.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-600 w-fit text-center text-white px-2 py-1 rounded-md">
                {education.year}
              </span>
              <span className="bg-accent-600 w-fit text-center text-white px-2 py-1 rounded-md">
                {education.degree}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
