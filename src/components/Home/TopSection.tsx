import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export const TopSection = ({
  isHamburgerMenuOpen,
  setIsHamburgerMenuOpen,
}: any) => {
  return (
    <div className="h-[10%] absolute w-full flex p-[2%] justify-between items-center">
      <div
        className="w-[15%] h-full flex justify-center items-center"
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
      >
        {!isHamburgerMenuOpen ? (
          <RxHamburgerMenu className="w-6 h-6" />
        ) : (
          <IoClose className="w-6 h-6" />
        )}
      </div>
      <div
        className="w-[30%] h-full text-center flex justify-center items-center text-3xl font-semibold"
        style={{
          text: '#cccccc',
        }}
      >
        <h2>TripSync</h2>
      </div>
    </div>
  );
};
