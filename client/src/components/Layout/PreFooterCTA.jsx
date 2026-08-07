import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PreFooterCTA.module.css';

export default function PreFooterCTA() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Do not show the CTA on the contact page
  if (pathname === '/contact') {
    return null;
  }

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaCard}>
        {/* Background glow circle */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(196, 192, 255, 0.05) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Next Software Product?</h2>
          <p className={styles.ctaDesc}>
            Let's discuss your project over a phone call and understand your business requirements before starting development.
          </p>
          <div className={styles.btnGroup}>
            <a href="tel:+18005550199" className={styles.primaryBtn}>
              <span className="material-symbols-outlined text-[18px]">phone</span>
              Call Now
            </a>
            <button className={styles.secondaryBtn} onClick={() => navigate('/contact')}>
              Book a Consultation
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
