import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../PageLayout.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'absolute', zIndex: 0, opacity: 0.05, fontSize: '20rem', fontWeight: 900, fontFamily: 'var(--font-display)', select: 'none', userSelect: 'none' }}>
        404
      </div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '600px' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 180, 171, 0.1)',
          color: 'var(--error)',
          padding: '6px 16px',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          border: '1px solid rgba(255, 180, 171, 0.2)',
          marginBottom: '24px'
        }}>
          STATUS_CODE: ERR_NODE_NOT_FOUND
        </div>
        <h1 className={styles.title} style={{ fontSize: '40px', marginBottom: '16px' }}>
          Resource Not Found
        </h1>
        <p className={styles.cardDesc} style={{ marginBottom: '32px' }}>
          The path you are attempting to access does not resolve to an active node in our system routing table.
        </p>
        <button 
          className={styles.primaryBtn} 
          onClick={() => navigate('/')}
          style={{ margin: '0 auto', width: 'fit-content' }}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
