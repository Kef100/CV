import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation('common');
  const [rotated, setRotated] = useState(false);

  const changeLanguage = async (lng) => {
    setRotated(!rotated);
    await i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`fixed top-1/4 ring-2 ring-sky-500 left-0 w-20 h-20 shadow-sm rounded-full overflow-hidden 
      transition-all duration-300 -translate-x-1/2 z-40 flex ${!rotated ? 'rotate-180' : 'rotate-0'}`}
    >
      <button
        type="button"
        className="w-full h-full items-center justify-center rotate-180 uppercase
        transition-all bg-sky-500/25 hover:bg-sky-500/40 font-bold text-black dark:text-white"
        onClick={() => changeLanguage('en')}
      >
        en
      </button>
      <button
        type="button"
        className="w-full h-full items-center justify-center uppercase
        transition-all bg-sky-500/25 hover:bg-sky-500/40 font-bold text-black dark:text-white"
        onClick={() => changeLanguage('nl')}
      >
        nl
      </button>
    </div>
  );
}

export default LanguageSwitch;
