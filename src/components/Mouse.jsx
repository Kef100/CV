import React from 'react';

function Mouse() {
  return (
    <div className="hidden border-2 mt-4 border-white rounded-full p-3 w-10 h-16 xl:flex justify-center relative">
      <span className="absolute w-2.5 h-6 bg-white/50 left-1 top-1.5 rounded-tl-full" />
      <span className="absolute w-1 h-3 rounded-full animate-scroll bg-white" />
      <span className="absolute w-2.5 h-6 bg-white/50 right-1 top-1.5 rounded-tr-full" />
      <span className="absolute w-7 h-5 bg-white/25 left-1 bottom-1 rounded-b-full" />
    </div>
  );
}

export default Mouse;
