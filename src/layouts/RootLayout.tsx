import React from 'react';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <>
      <main className="overflow-hidden flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
}
