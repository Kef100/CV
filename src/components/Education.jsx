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
        {t('education.institutions', { returnObjects: true }).map((education) => (
          <div
            key={education.title}
            className="w-full h-96 z-20 transition-all bg-white dark:bg-neutral-800 rounded-xl
            group flex items-center justify-center relative overflow-hidden bg-cover"
          >
            <h3 className="text-white font-bold">{education.institution}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
