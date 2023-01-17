import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { GitHub, Linkedin, Mail } from 'react-feather';
import Mouse from './Mouse';

function Landing() {
  const [t] = useTranslation('common');
  const handleClick = () => {
    const element = document.getElementById('experience');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col gap-y-5 py-6 px-12 lg:px-32 bg-gray-200 dark:bg-neutral-900 transition-all">
      <div className="rounded-2xl flex-1 py-10 lg:p-0 bg-accent-300 bg-landing bg-cover w-full h-full relative overflow-hidden shadow-xl">
        <div className="absolute z-0 w-full h-full bg-black/30 top-0 left-0" />

        <div className="absolute z-30 px-8 py-2 bg-gray-200
        dark:text-white dark:bg-neutral-900 flex gap-x-4 rounded-b-xl top-0 left-1/2 -translate-x-1/2"
        >
          <a
            href="https://www.linkedin.com/in/kevin-vink2/"
            target="_blank"
            aria-label="linkedin"
            className="hover:text-sky-400 transition-all"
            rel="noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Kef100"
            target="_blank"
            aria-label="github"
            className="hover:text-sky-400 transition-all"
            rel="noreferrer"
          >
            <GitHub size={20} />
          </a>
          <a
            href="mailto:kevinvink2002@gmail.com"
            target="_blank"
            aria-label="mail"
            className="hover:text-sky-400 transition-all"
            rel="noreferrer"
          >
            <Mail size={20} />
          </a>
        </div>

        <img src="./plane.png" alt="plane" className="hidden xl:block absolute w-32 top-2 xl:top-20 -right-32 animate-fly" />
        <img src="./plane.png" alt="plane" className="hidden xl:block absolute w-32 top-16 xl:top-40 image-flip -left-32 animate-fly-reverse" />

        <div className="relative lg:absolute z-20 w-full h-full flex flex-col items-center justify-between py-4 px-10">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-8">
              <div className="p-2 w-32 h-32 border-2 border-sky-500 rounded-full bg-sky-500/10 backdrop-blur-md animate-float">
                <img src="./avatar.png" className="w-full h-full rounded-full" alt="avatar" />
              </div>
              <h1 className="text-3xl text-center [word-spacing:20rem] md:[word-spacing:unset] lg:text-left text-white">
                {t('landing.title')}
              </h1>
              <p className="text-gray-200 text-lg lg:w-2/3">
                {t('landing.description')}
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={handleClick}
                  type="button"
                  className="rounded-md outline-white px-4 py-3 hover:bg-sky-400
                hover:-translate-y-1 transition-all bg-sky-500 text-lg font-bold text-white"
                >
                  {t('landing.cta')}
                </button>
                <a
                  href="https://www.linkedin.com/in/kevin-vink2/"
                  className="rounded-md outline-white px-4 py-3 dark:text-white
                hover:-translate-y-1 transition-all bg-white text-center dark:bg-neutral-900 text-lg text-black"
                >
                  {t('landing.contact')}
                </a>
              </div>
            </div>
          </div>
          <Mouse />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-10">
        <div className="bg-white dark:bg-neutral-800 dark:text-white transition-all gap-3 lg:gap-5
        w-full h-full min-h-[15rem] lg:min-h-0 flex flex-col lg:flex-row items-center justify-center p-8 rounded-lg"
        >
          <div className="rounded-full dark:bg-sky-500/20 bg-sky-100 w-fit p-4">
            <FontAwesomeIcon icon={faBarsProgress} size="xl" className="text-sky-500" />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-2xl">{t('information.projects.title')}</p>
            <p className="font-black text-3xl">{t('information.projects.value')}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 dark:text-white transition-all gap-3 lg:gap-5
        w-full h-full min-h-[15rem] lg:min-h-0 flex flex-col lg:flex-row items-center justify-center p-8 rounded-lg"
        >
          <div className="rounded-full dark:bg-sky-500/20 bg-sky-100 w-fit p-4">
            <FontAwesomeIcon icon={faBriefcase} size="xl" className="text-sky-500" />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-2xl">{t('information.worked_jobs.title')}</p>
            <p className="font-black text-3xl">{t('information.worked_jobs.value')}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-800 dark:text-white transition-all gap-3 lg:gap-5
        w-full h-full min-h-[15rem] lg:min-h-0 flex flex-col lg:flex-row items-center justify-center p-8 rounded-lg"
        >
          <div className="rounded-full dark:bg-sky-500/20 bg-sky-100 w-fit p-4">
            <FontAwesomeIcon icon={faGraduationCap} size="xl" className="text-sky-500" />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-2xl">{t('information.years.title')}</p>
            <p className="font-black text-3xl">{t('information.years.value')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
