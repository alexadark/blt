import React from 'react';
import Link from 'next/link';
import { useGlobalData } from 'lib/context/globalDataContext';
import { Menu } from './Menu';

export const Header = () => {
  const globalData = useGlobalData();
  console.log('globaldata', globalData);
  return (
    <header className=" bg-darkBlue">
      <div className="container flex items-center justify-between">
        <h1 className="text-white text-[48px] font-light">
          <Link href="/">
            <a className="text-white hover:text-white hover:no-underline">
              bucket list{' '}
              <span className="ml-4 text-gold font-script"> travels</span>
            </a>
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};
