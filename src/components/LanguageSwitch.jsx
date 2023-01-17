import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation('common');
  const [rotated, setRotated] = useState(false);
  const { language } = i18n;

  const changeLanguage = async (lng) => {
    setRotated(!rotated);
    await i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`fixed top-1/4 left-0 w-20 h-20 shadow-sm bg-white rounded-full overflow-hidden transition-all duration-300 -translate-x-1/2 z-40 flex ${!rotated ? 'rotate-180' : 'rotate-0'}`}
    >
      <button
        type="button"
        className={`w-full h-full items-center justify-center rotate-180 uppercase ${language === 'nl' && 'bg-sky-500 text-white'}`}
        onClick={() => changeLanguage('en')}
      >
        nl
      </button>
      <button
        type="button"
        className={`w-full h-full items-center justify-center uppercase ${language === 'en' && 'bg-sky-500 text-white'}`}
        onClick={() => changeLanguage('nl')}
      >
        en
      </button>
    </div>
  );
}

export default LanguageSwitch;
