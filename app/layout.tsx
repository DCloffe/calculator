import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import '@/assets/styles/main.css';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App Description',
  keywords: 'My, App, Keywords',
};

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps): ReactNode => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
};

export default MainLayout;