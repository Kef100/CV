import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col gap-y-3 pt-8 overflow-hidden">
      <div className="flex flex-col">
        <h2 className="dark:text-white font-bold text-2xl">{t('education.title')}</h2>
        <p className="text-neutral-600 dark:text-gray-300 pb-4">{t('education.subtitle')}</p>
      </div>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {t('education.institutions', { returnObjects: true }).map((education, index) => (
          <div
            key={education.institution}
            className="w-full h-96 z-20 transition-all bg-white dark:bg-neutral-800 rounded-xl
            group flex items-center justify-center relative overflow-hidden bg-cover"
          >
            {index === 0 && (
              <div className="absolute top-5 text-sm shadow-md -left-8 bg-gradient-to-r -rotate-45
              xl:text-base font-bold px-10 py-px from-sky-500 to-sky-400 text-white z-20"
              >
                {t('global.current')}
              </div>
            )}

            <div className="absolute inset-0 transition-all duration-300 gap-3 z-10 bg-white dark:bg-neutral-800
            opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center"
            >
              <span className="p-2 rounded-full bg-sky-100 dark:bg-sky-500/50
              text-sky-500 dark:text-white ring-2 ring-sky-500"
              >
                {education.year}
              </span>
              <h3 className="font-bold text-2xl text-center dark:text-white z-20">{education.institution}</h3>
              <p className="dark:text-gray-300">{education.location}</p>
              <p className="dark:text-gray-300">{education.degree}</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center transition-all group-hover:z-0 z-20">
              <img src={education.logo} alt={education.institution} className={`invert dark:invert-0 ${education.logo_style}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
