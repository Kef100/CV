import React from 'react';
import { useTranslation } from 'react-i18next';
import data from '../data.json';

function WorkExperience() {
  const { t } = useTranslation('common');

  return (
    <div id="experience" className="flex flex-col gap-y-3">
      <h2 className="dark:text-white font-bold text-2xl pb-4">{t('work_experience.title')}</h2>
      <div className="grid xl:grid-cols-3 gap-10">
        {data.projects.map((project) => (
          <div
            key={project.title}
            className="w-full h-96 transition-all bg-white dark:bg-neutral-800 rounded-xl group flex items-center justify-center relative overflow-hidden bg-cover"
          >
            <div className={`absolute inset-0 transition-all z-10 bg-gradient-to-br opacity-50 ${project.image_style}`} />
            <div className="absolute inset-0 transition-all duration-300 z-10 bg-neutral-800 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
              <h3 className="font-bold text-2xl text-white z-20">{project.title}</h3>
              <p className="text-gray-200">{project.role}</p>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-full transition-all group-hover:scale-110" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white transition-all group-hover:z-0 z-20">
              <img src={project.logo} alt={project.title} className={project.logo_style} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
