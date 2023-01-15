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
    <div className="fixed z-50 text-white top-0 left-0 w-full h-fit p-2 bg-sky-500 grid grid-cols-3">
      <div className="justify-center items-center inline-flex gap-x-2 col-start-2">
        <AlertTriangle />
        This page is still under development,
        some functionality might be missing or added at some later point.
      </div>
      <X className="justify-self-end cursor-pointer" onClick={handleClose} />
    </div>
    )
  );
}

export default Lint;
