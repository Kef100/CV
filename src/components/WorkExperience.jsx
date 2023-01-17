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
          <div key={project.title} className="w-full h-72 transition-all bg-white dark:bg-neutral-800 rounded-lg flex items-center justify-center relative">
            <h3 className="dark:text-white text-2xl uppercase font-bold">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
