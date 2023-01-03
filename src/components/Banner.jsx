import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Banner() {
  return (
    <div className="w-full h-[50vh] 2xl:h-[30vh] grid grid-cols-4 relative bg-banner bg-cover shadow-xl border-b-2 border-sky-400">
      <div className="col-span-4 lg:col-span-4 2xl:col-span-3 z-20 py-14 px-6 xl:px-10 xl:py-10">
        <div className="w-full h-full flex flex-col items-center xl:items-start justify-between">
          <h1 className="text-3xl xl:text-6xl text-white font-black">Discover the Road of my Career!</h1>
          <div className="text-white flex gap-x-1 text-sm xl:text-lg items-center">
            <div>
              &lt;
              <span className="text-sky-400">code</span>
              &gt;
            </div>
            I build
            <TypeAnimation
              sequence={[
                'Web Applications',
                2000,
                'REST APIs',
                2000,
                'Design Mockups',
                2000,
              ]}
              speed={10}
              repeat={Infinity}
            />
            <div>
              &lt;
              <span className="text-sky-400">code</span>
              &gt;
            </div>
          </div>
          <a
            href="#experience"
            className="bg-sky-400 text-accent-500/80 font-bold tracking-wider px-6 py-4
              w-fit uppercase text-sm transition-all hover:-translate-y-1 hover:bg-sky-300"
          >
            Explore now
          </a>
        </div>
      </div>
      <div className="z-20 hidden 2xl:block 2xl:col-span-2 2xl:col-span-1 relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="195" className="absolute top-0 lg:left-0 xl:left-auto xl:right-96">
          <polygon points="0,0 195,0 195,195" className="fill-white" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="195" className="absolute bottom-0 right-12">
          <polygon points="0,0 195,0 0,195" className="fill-sky-400" />
        </svg>
        <img src="./standing.png" className="absolute bottom-0 right-12 h-[37vh]" alt="me standing" />
      </div>
      <div className="w-full h-full bg-accent-500/80 top-0 left-0 absolute z-10" />
    </div>
  );
}

export default Banner;
