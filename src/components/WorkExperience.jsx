import React from 'react';

const projects = [
  {
    title: 'Mr. Smith',
    role: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    tags: ['Jul 2022 - Currently', 'React Redux', 'Typescript', 'MongoDB'],
  },
  {
    title: 'Dimerce',
    role: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    tags: [
      'Mei. 2021 - Mei 2022', 'Parttime', 'C# .NET', 'Flutter', 'OOP Principles', 'GIT',
    ],
  },
  {
    title: 'De Diepen',
    role: 'Waiter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    tags: [
      'Jun. 2018 - Jul 2021', 'Parttime', 'Social skills', 'Teamwork',
    ],
  },
  {
    title: 'Qubiqx',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    tags: [
      'Nov. 2020 - Apr 2021', 'Internship', 'Laravel', 'TailwindCSS', 'Blade', 'MVC',
    ],
  },
  {
    title: 'Suppliance B.V.',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    tags: [
      'Aug. 2019 - Jan. 2020', 'Internship', 'PHP', 'MYSQL', 'HTML/CSS', 'JavaScript',
    ],
  },
];

function WorkExperience() {
  return (
    <div id="experience" className="flex flex-col gap-y-3">
      <h2 className="text-white font-bold text-2xl pb-4">Work Experience</h2>
      <div className="grid xl:grid-cols-3 gap-16">
        {projects.map((project) => (
          <div key={project.title} className="w-full h-full bg-accent-300 px-6 py-4 flex flex-col gap-y-4 relative">
            <h3 className="text-white font-bold pt-4">{project.title}</h3>
            <p className="absolute bg-sky-400/75 w-fit text-white px-2 py-1 rounded-md -top-4 right-4 shadow-lg">{project.role}</p>
            <p className="text-neutral-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-accent-600 w-fit text-center text-white px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
