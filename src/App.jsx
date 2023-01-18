import React from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
// import Properties from './components/Properties';
// import Preferences from './components/Preferences';
import Testimonials from './components/Testimonials';
import Landing from './components/Landing';
import ScrollTop from './components/ScrollTop';
import DarkMode from './components/DarkMode';
import LanguageSwitch from './components/LanguageSwitch';

import commonNL from './translations/nl/common.json';
import commonEN from './translations/en/common.json';
import Footer from './components/Footer';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    fallbackLng: 'en',
    resources: {
      en: {
        common: commonEN, // 'common' is our custom namespace
      },
      nl: {
        common: commonNL,
      },
    },
  });

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <div className="flex flex-col font-roboto relative w-full h-full min-h-screen overflow-hidden">
        <Landing />
        <div className="pb-10 flex p-6 flex-col gap-y-10 h-full px-12 lg:px-32
        dark:bg-neutral-900 bg-gray-200"
        >
          <WorkExperience />
          <Education />
          {/* <Properties /> */}
          {/* <Preferences /> */}
          <Testimonials />
          <Footer />
        </div>
      </div>
      <ScrollTop />
      <DarkMode />
      <LanguageSwitch />
    </I18nextProvider>
  );
}

export default App;
