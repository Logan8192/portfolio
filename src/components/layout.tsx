import React, { ReactNode } from 'react';
import '~styles/styles.scss';
import Navbar from './navbar';

interface Props {
    children: ReactNode,
}

export default function Layout({ children }: Props) {
    return (
      <div>
        <Navbar />
        <main>
          {children}
        </main>
      </div>
    );
}