import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
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
            className="w-full h-96 transition-all bg-white dark:bg-neutral-800 rounded-xl
            group flex items-center justify-center relative overflow-hidden bg-cover"
          >
            <div className={`absolute inset-0 transition-all z-10 bg-gradient-to-br opacity-50 ${project.image_style}`} />
            <div className="absolute inset-0 transition-all duration-300 gap-5 z-10 bg-white dark:bg-neutral-800
            opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center"
            >
              <a
                className="p-2 ring-2 ring-sky-500 bg-sky-500/25 rounded-full hover:scale-105 transition-all"
                aria-label={project.title}
                href={project.website}
              >
                <FontAwesomeIcon icon={faGlobe} size="xl" className="dark:text-white text-sky-500" />
              </a>
              <h3 className="font-bold text-2xl dark:text-white z-20">{project.title}</h3>
              <p className="text-neutral-600 dark:text-gray-200">{project.role}</p>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-full transition-all group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center transition-all group-hover:z-0 z-20">
              <img src={project.logo} alt={project.title} className={project.logo_style} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
