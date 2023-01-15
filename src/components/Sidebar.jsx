import React, { useEffect, useState } from 'react';
import {
  Check, GitCommit, GitHub, Linkedin, Mail, Send,
} from 'react-feather';

const pi = 3.14;
const radius = 45;
const dashArray = 2 * pi * radius;

const skills = [
  'React Redux',
  'JavaScript, TypeScript',
  'TailwindCSS',
  'MongoDB, SQL & MYSQL',
  'Laravel',
  'Java',
];

const knowledges = [
  'GIT Knowledge',
  'Jest',
  'Agile & Scrum',
  'MVC Framework',
  'OOP Development',
];

const languages = [
  {
    language: 'English',
    level: 'B2/C1',
  },
  {
    language: 'Dutch',
    level: 'C2',
  },
  {
    language: 'German',
    level: 'A2/B1',
  },
];

function Sidebar() {
  const [age, setAge] = useState(0);
  const [dashOffset, setDashOffset] = useState(dashArray);

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date('2002-12-02');
    let a = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      a -= 1;
    }
    return a;
  };

  useEffect(() => {
    const maxAge = getAge();
    for (let i = 0; i <= maxAge; i += 1) {
      setTimeout(() => {
        setAge(i);
      }, 50 * i);
    }
  }, []);

  useEffect(() => {
    const length = (2 * radius * pi) + 1;
    for (let i = 0; i <= length; i += 1) {
      setTimeout(() => {
        setDashOffset(length - i);
      }, 5 * i);
    }
  }, []);

  return (
    <div className="w-full xl:sticky xl:top-0 bg-accent-500 h-screen xl:w-96 text-white shadow-xl">
      <div className="flex flex-col w-full min-h-screen h-full relative">
        <div className="flex flex-col gap-y-1 items-center justify-center w-full py-6 bg-accent-400">
          <div className="relative pb-4">
            <span className="flex h-4 w-4 absolute bottom-3 right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-full w-full bg-sky-500" />
            </span>
            <img src="./profile.png" alt="avatar" className="rounded-full w-20 h-20 ring-2 ring-offset-4 ring-offset-accent-400 ring-sky-400 bg-sky-400/10" />
          </div>
          <h1 className="text-lg font-bold">Kevin Vink</h1>
          <h3 className="text-neutral-400">Front-end Developer</h3>
          <h3 className="text-neutral-400">UI/UX Designer</h3>
        </div>
        <div className="flex flex-col px-6 py-4 gap-y-2 lg:overflow-y-auto min-h-[75vh] h-full pb-20 relative">
          <div className="hidden border-neutral-600 border-b pb-4 flex-col gap-y-2 xl:flex">
            <div className="flex flex-col xl:flex-row xl:justify-between items-center">
              <p className="font-medium">Residence</p>
              <p className="text-neutral-400">The Netherlands</p>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between items-center">
              <p className="font-medium">City</p>
              <p className="text-neutral-400">Groesbeek</p>
            </div>
            <div className="flex flex-col xl:flex-row xl:justify-between items-center">
              <p className="font-medium">Age</p>
              <p className="text-neutral-400">{age}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-y-2 border-b border-neutral-600">
            <h2 className="text-lg font-bold">Languages</h2>
            <div className="grid grid-cols-3 gap-x-4">
              {languages.map((language) => (
                <div key={language.language} className="p-2 flex flex-col gap-y-2 justify-center items-center">
                  <div className="relative w-20 lg:w-14 2xl:w-20 h-full">
                    <p className="absolute text-sm lg:text-xs 2xl:text-sm top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{language.level}</p>
                    <svg viewBox="0 0 100 100" className="-rotate-90">
                      <circle
                        className="fill-none stroke-neutral-400"
                        strokeWidth="5"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r={radius}
                      />
                      <circle
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        className="fill-none stroke-sky-400"
                        strokeWidth="5"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r={radius}
                      />
                    </svg>
                  </div>
                  <p>{language.language}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="py-4 flex flex-col gap-y-2 border-b border-neutral-600">
            <h2 className="text-lg font-bold">Coding</h2>
            <ul className="flex flex-col gap-y-1">
              {skills.map((skill, index) => (
                <li
                  key={skill}
                  className={`relative flex items-center gap-x-2 text-sm 
                  ${index !== skills.length - 1 && 'after:h-3 after:w-px after:bg-sky-400 after:absolute after:left-[7px] after:top-[17px]'}`}
                >
                  <GitCommit size={15} className="text-sky-400 rotate-90" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4 flex flex-col gap-y-2 border-b border-neutral-600">
            <h2 className="text-lg font-bold">Knowledge</h2>
            <ul className="flex flex-col gap-y-1">
              {knowledges.map((knowledge) => (
                <li key={knowledge} className="flex items-center gap-x-2 text-sm text-neutral-400 tracking-wide">
                  <Check size={12} strokeWidth={4} className="text-sky-400" />
                  {knowledge}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-neutral-400 py-4 hover:text-sky-400 w-fit transition-all">
            <a href="https://www.linkedin.com/in/kevin-vink2/" target="_blank" className="flex gap-x-2 items-center border-b border-transparent hover:border-sky-400 pb-1" aria-label="download cv" rel="noreferrer">
              <Send size={20} />
              Send me a message
            </a>
          </div>
        </div>
        <div className="flex absolute bottom-0 left-0 gap-x-4 items-center justify-center w-full bg-accent-400 py-6 text-neutral-400">
          <a href="https://www.linkedin.com/in/kevin-vink2/" target="_blank" aria-label="linkedin" className="hover:text-sky-400 transition-all" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="https://github.com/Kef100" target="_blank" aria-label="github" className="hover:text-sky-400 transition-all" rel="noreferrer"><GitHub size={20} /></a>
          <a href="mailto:kevinvink2002@gmail.com" target="_blank" aria-label="mail" className="hover:text-sky-400 transition-all" rel="noreferrer"><Mail size={20} /></a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
