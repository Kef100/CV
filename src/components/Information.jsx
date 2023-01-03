import React, { useEffect, useState } from 'react';
import data from '../data.json';

function Information() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [workedJobs, setWorkedJobs] = useState(0);

  useEffect(() => {
    for (let i = 0; i <= data.information.years; i += 1) {
      setTimeout(() => {
        setYears(i);
      }, 100 * i);
    }

    for (let x = 0; x <= data.information.projects; x += 1) {
      setTimeout(() => {
        setProjects(x);
      }, 100 * x);
    }

    for (let z = 0; z <= data.information.worked_jobs; z += 1) {
      setTimeout(() => {
        setWorkedJobs(z);
      }, 100 * z);
    }
  }, []);

  return (
    <div className="flex flex-col text-white gap-y-4 xl:items-center xl:px-10 py-6 xl:flex-row xl:justify-between w-full">
      <p className="text-lg flex items-center gap-x-3 capitalize">
        <span className="font-bold text-2xl text-sky-400">
          {`${years}+`}
        </span>
        Years experience
      </p>
      <p className="text-lg flex items-center gap-x-3 capitalize">
        <span className="font-bold text-2xl text-sky-400">
          {`${projects}+`}
        </span>
        Projects
      </p>
      <p className="text-lg flex items-center gap-x-3 capitalize">
        <span className="font-bold text-2xl text-sky-400">
          {workedJobs}
        </span>
        Worked Jobs / Internships
      </p>
    </div>
  );
}

export default Information;
