import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'react-feather';
import useScrollPosition from '../hooks/scrollposition';

function ScrollTop() {
  const scrollOffset = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (scrollOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollOffset]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${visible ? 'right-3' : '-right-14'} 
       fixed flex justify-center items-center bottom-5 z-40 rounded-xl bg-sky-500/25 shadow-xl
    p-2 ring-2 ring-sky-500 transition-all duration-300 hover:bg-sky-500/50`}
    >
      <ChevronUp size={30} className="text-sky-500" />
    </button>
  );
}

export default ScrollTop;
