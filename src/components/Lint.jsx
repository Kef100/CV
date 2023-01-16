import React, { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'react-feather';

function Lint() {
  const [showLint, setShowLint] = useState(true);
  const localStorageShowLint = localStorage.getItem('showLint');
  const handleClose = () => {
    setShowLint(false);
    localStorage.setItem('showLint', false);
  };

  useEffect(() => {
    if (localStorageShowLint === 'false') {
      setShowLint(false);
    }
  }, [localStorageShowLint]);

  return (
    (!localStorageShowLint || showLint) && (
    <div className="fixed z-50 text-white top-0 left-0 w-full h-full lg:h-20 2xl:h-16 py-4 bg-sky-500 grid lg:grid-cols-3">
      <div className="justify-center items-center inline-flex gap-2 px-10 lg:px-0 col-start-2 flex-col lg:flex-row">
        <AlertTriangle size={25} />
        This page is still under development,
        some functionality might be missing or added at some later point.
      </div>
      <X className="absolute lg:relative justify-self-end cursor-pointer m-2 lg:m-0 lg:mr-4" onClick={handleClose} />
    </div>
    )
  );
}

export default Lint;
