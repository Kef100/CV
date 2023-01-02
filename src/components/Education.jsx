import React from 'react';
import Mouse from './Mouse';

const educations = [
  {
    institution: 'HAN University of Applied Sciences',
    location: 'Arnhem, Netherlands',
    degree: 'Bachelor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris.',
    year: '2021 - 2025',

  },
  {
    institution: 'ROC',
    location: 'Nijmegen, Netherlands',
    degree: 'Associate Degree',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris.',

    year: '2018 - 2021',
  },
  {
    institution: 'Montesorri College',
    location: 'Nijmegen, Netherlands',
    degree: 'High School',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris.',
    year: '2014 - 2018',
  },
];

function Education() {
  return (
    <div className="flex flex-col gap-y-3 pt-8">
      <h2 className="text-white font-bold text-2xl pb-4">Education</h2>
      <div className="grid xl:grid-cols-3 gap-8">
        {educations.map((education) => (
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
      <div className="flex items-center w-full justify-center">
        <Mouse />
      </div>
    </div>
  );
}

export default Education;
