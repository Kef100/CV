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
      className={`${visible ? 'right-2 lg:right-4' : '-right-14'} 
       fixed flex justify-center items-center bottom-5 z-40 rounded-full lg:rounded-xl bg-white dark:bg-black shadow-xl
       p-px lg:p-2 ring-2 dark:ring-white ring-black transition-all duration-300`}
    >
      <ChevronUp size={30} className="dark:text-white text-black" />
    </button>
  );
}

export default ScrollTop;
