import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function Knowledge() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col my-14">
      <div className="flex flex-col gap-y-3 bg-sky-500 pt-20 pb-52 flex justify-center items-center px-12 lg:px-32">
        <div className="flex flex-col gap-1 z-10">
          <h2 className="text-white font-bold text-2xl lg:text-3xl text-center">{t('knowledge.title')}</h2>
          <p className="text-white text-base lg:text-lg pb-4 text-center">{t('knowledge.subtitle')}</p>
        </div>
      </div>
      <div className="px-12 lg:px-32 flex items-center justify-center">
        <div className="bg-gray-50 dark:bg-neutral-800 dark:text-white w-full xl:w-2/3 2xl:w-1/2 h-full -mt-44
        rounded-xl grid lg:grid-cols-2 divide-gray-300 dark:divide-neutral-700 divide-y lg:divide-x"
        >
          <div className="p-16 flex flex-col gap-8">
            <div className="flex flex-col gap-5 items-center">
              <div className="rounded-full bg-sky-500 w-16 h-16 flex items-center justify-center p-4">
                <FontAwesomeIcon icon={faTerminal} size="xl" className="text-white" />
              </div>
              <h3 className="dark:text-white text-xl font-bold">{t('knowledge.developer.title')}</h3>
              <p className="text-neutral-800 dark:text-white text-center">{t('knowledge.developer.subtitle')}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sky-500 text-center dark:text-sky-400">{`${t('knowledge.developer.languages.title')}:`}</p>
              <p className="text-neutral-800 text-center dark:text-gray-100">{t('knowledge.developer.languages.list')}</p>
            </div>

            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row justify-between 2xl:justify-evenly">
              <div>
                <p className="text-sky-500 text-center dark:text-sky-400">{`${t('knowledge.developer.tools.title')}:`}</p>
                {t('knowledge.developer.tools.list', { returnObjects: true }).map((tool) => (
                  <p className="text-neutral-800 text-center dark:text-gray-100" key={tool}>{tool}</p>
                ))}
              </div>
              <div>
                <p className="text-sky-500 text-center dark:text-sky-400">{`${t('knowledge.developer.frameworks.title')}:`}</p>
                {t('knowledge.developer.frameworks.list', { returnObjects: true }).map((framework) => (
                  <p className="text-neutral-800 text-center dark:text-gray-100" key={framework}>{framework}</p>
                ))}
              </div>
            </div>

          </div>
          <div className="p-16 flex flex-col gap-8">
            <div className="flex flex-col gap-5 items-center">
              <div className="rounded-full bg-sky-500 w-16 h-16 flex items-center justify-center p-4">
                <FontAwesomeIcon icon={faLayerGroup} size="xl" className="text-white" />
              </div>
              <h3 className="dark:text-white text-xl font-bold">{t('knowledge.designer.title')}</h3>
              <p className="text-neutral-800 dark:text-white text-center">{t('knowledge.designer.subtitle')}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sky-500 text-center dark:text-sky-400">{`${t('knowledge.designer.things.title')}:`}</p>
              <p className="text-neutral-800 text-center dark:text-gray-100">{t('knowledge.designer.things.list')}</p>
            </div>

            <div className="flex flex-col gap-5 xl:gap-0 justify-between h-full">
              <div>
                <p className="text-sky-500 text-center dark:text-sky-400">{`${t('knowledge.designer.tools.title')}:`}</p>

                {t('knowledge.designer.tools.list', { returnObjects: true }).map((tool) => (
                  <p key={tool} className="text-neutral-800 text-center dark:text-gray-100">{tool}</p>
                ))}
              </div>

              <p className="text-xs text-neutral-500 dark:text-gray-300 text-center">{`Disclaimer: ${t('knowledge.designer.disclaimer')}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
