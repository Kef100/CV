import React from 'react';

const year = new Date().getFullYear();
function Footer() {
  return (
    <div className="w-full dark:bg-neutral-800 bg-white py-4 rounded-b-lg px-10 flex items-center justify-center xl:text-lg dark:text-white">
      <div className="flex gap-x-2">
        <p>&copy;</p>
        <p>
          {year}
          {' '}
          - All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
