import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Mouse from './Mouse';

function Landing() {
  const [t] = useTranslation('common');
  const handleClick = () => {
    const element = document.getElementById('experience');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen flex flex-col gap-y-5 p-6 px-44 bg-gray-200 dark:bg-neutral-900 transition-all">
      <div className="rounded-2xl bg-accent-300 bg-landing bg-cover w-full h-full relative overflow-hidden shadow-xl">
        <div className="absolute z-0 w-full h-full bg-gradient-to-br from-black/25 to-sky-500/40 top-0 left-0" />

        <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-4 px-10">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-8">
              <div className="p-2 w-32 h-32 ring-1 ring-offset-4 ring-sky-500 ring-offset-transparent rounded-full bg-sky-200/50">
                <img src="./avatar.png" className="w-full h-full rounded-full" alt="avatar" />
              </div>
              <h1 className="text-3xl text-white">
                Designer and Developer
              </h1>
              <button onClick={handleClick} type="button" className="rounded-md px-4 py-3 hover:bg-sky-400 hover:-translate-y-1 transition-all bg-sky-500 text-lg font-bold text-white">
                Explore Now
              </button>
            </div>
          </div>
          <Mouse />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="bg-white dark:bg-neutral-800 dark:text-white transition-all gap-x-5 w-full h-full flex items-center justify-center p-6 rounded-xl">
          <div className="rounded-full bg-sky-100 w-fit p-4">
            <FontAwesomeIcon icon={faBarsProgress} size="xl" className="text-sky-500" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">{t('information.projects.title')}</p>
            <p className="font-black text-3xl">{t('information.projects.value')}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 dark:text-white transition-all gap-x-5 w-full h-full flex items-center justify-center p-6 rounded-xl">
          <div className="rounded-full bg-sky-100 w-fit p-4">
            <FontAwesomeIcon icon={faBriefcase} size="xl" className="text-sky-500" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">{t('information.worked_jobs.title')}</p>
            <p className="font-black text-3xl">{t('information.worked_jobs.value')}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 dark:text-white transition-all- gap-x-5 w-full h-full flex items-center justify-center p-6 rounded-xl">
          <div className="rounded-full bg-sky-100 w-fit p-4">
            <FontAwesomeIcon icon={faGraduationCap} size="xl" className="text-sky-500" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">{t('information.years.title')}</p>
            <p className="font-black text-3xl">{t('information.years.value')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
