'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { useIsSmallMobile, useIsExtraSmall } from '@/hooks/useMediaQuery';

export default function VecinoLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isSmallMobile = useIsSmallMobile();
  const isExtraSmall = useIsExtraSmall();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Determine responsive padding
  const containerPadding = isExtraSmall ? '0 0.5rem' : isSmallMobile ? '0 0.75rem' : '0 2rem';
  const containerMargin = isSmallMobile ? '1rem auto' : '2rem auto';
  const containerGap = isSmallMobile ? '1rem' : '2rem';

  return (
    <div className="layout vecino-layout">
      <Header onToggleSidebar={toggleSidebar} />
      <div
        className="layout-container vecino-layout-container"
        style={{
          maxWidth: '1600px',
          margin: containerMargin,
          padding: containerPadding,
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: containerGap,
          flex: 1,
          width: '100%'
        }}
      >
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
