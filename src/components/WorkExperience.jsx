import React from 'react';
import { Link } from 'react-feather';
import data from '../data.json';
// import Mouse from './Mouse';

function WorkExperience() {
  return (
    <div id="experience" className="flex flex-col gap-y-3">
      <h2 className="dark:text-white font-bold text-2xl pb-4">Work Experience</h2>
      <div className="grid xl:grid-cols-3 gap-10">
        {data.projects.map((project) => (
          <div key={project.title} className="w-full h-full transition-all bg-white dark:bg-neutral-800 rounded-lg px-6 py-4 flex flex-col gap-y-4 relative">
            <div className="flex flex-col gap-y-2">
              <h3 className="dark:text-white font-bold pt-4">{project.title}</h3>
              <p className="absolute bg-sky-400 transition-all dark:bg-sky-400/75 w-fit text-white px-2 py-1 rounded-md -top-4 right-4 shadow-lg">{project.role}</p>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
              <a href={project.website} target="_blank" className="bg-sky-500 inline-flex items-center gap-x-1 w-fit text-center text-white px-2 py-1 rounded-md transition-all hover:bg-sky-400" rel="noreferrer">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link size={16} />
                {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
