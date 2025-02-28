import React from 'react'
import { Outlet } from 'react-router-dom';

export default function TermsLayout() {
  return (
      <main className="max-w-screen-lg mx-auto md:my-2 p-6 bg-white rounded-lg flex">
          <Outlet />
    </main>
  );
}
