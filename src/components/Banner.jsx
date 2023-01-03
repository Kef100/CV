import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Banner() {
  return (
    <div className="w-full h-[50vh] 2xl:h-[30vh] grid grid-cols-4 relative bg-banner bg-cover shadow-xl border-b-2 border-sky-400">
      <div className="col-span-4 xl:col-span-3 z-20 px-6 xl:px-10 py-14">
        <div className="w-full h-full flex flex-col justify-between">
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
      <div className="z-20 hidden xl:block">
        <img src="https://bslthemes.com/arter/wp-content/uploads/2020/09/face-2-min.png" className="absolute bottom-0 right-12 h-[32vh]" alt="me standing" />
      </div>
      <div className="w-full h-full bg-accent-500/80 top-0 left-0 absolute z-10" />
    </div>
  );
}

export default Banner;
