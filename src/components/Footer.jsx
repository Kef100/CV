import React from 'react';

const year = new Date().getFullYear();
function Footer() {
  return (
    <div className="w-full bg-accent-300 py-4 rounded-b-lg px-10 flex items-center justify-center text-lg font-bold text-white">
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
