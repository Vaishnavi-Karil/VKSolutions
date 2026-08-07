import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SpaceBackground from './SpaceBackground';
import PreFooterCTA from './PreFooterCTA';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <SpaceBackground />
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
