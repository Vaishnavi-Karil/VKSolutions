import React from 'react';
import styles from '../PageLayout.module.css';

export default function CaseStudy() {
  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero} style={{ paddingBottom: '32px' }}>
        <div className={styles.heroContent} style={{ textAlign: 'left', margin: '0 auto 0 0', maxWidth: '1000px' }}>
          <span className={styles.badge}>Fintech Case Study</span>
          <h1 className={styles.title} style={{ fontSize: '56px', lineHeight: 1.15 }}>
            Redefining <span className={styles.gradientText}>Digital Banking</span> for LuminaPay
          </h1>
          <p className={styles.subtitle} style={{ margin: '0', fontSize: '18px', color: 'var(--on-surface-variant)' }}>
            Building the next generation of frictionless cross-border payments through high-performance engineering and visceral user experiences.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        {/* Cover Photo */}
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(21, 28, 47, 0.7)',
          height: '450px',
          marginBottom: '80px'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=1200&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6
          }}></div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)'
          }}></div>
        </div>

        {/* The Challenge */}
        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          <div className={styles.col4}>
            <h2 className={styles.cardTitle} style={{ fontSize: '32px', position: 'sticky', top: '120px' }}>The Challenge</h2>
          </div>
          <div className={styles.col8} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p style={{ fontSize: '18px', lineHeight: '32px', color: 'var(--on-surface-variant)' }}>
              LuminaPay approached us with a fragmented legacy infrastructure that struggled with transaction latency and high dropout rates in cross-border transfers. Their existing mobile application failed to resonate with a modern, tech-savvy demographic, lacking the speed and visual feedback required for high-stakes financial operations.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div className={styles.glassCard}>
                <span className="material-symbols-outlined text-primary text-[32px] mb-4">speed</span>
                <h3 className={styles.cardTitle} style={{ fontSize: '20px' }}>Latency Issues</h3>
                <p className={styles.cardDesc} style={{ fontSize: '14px', marginBottom: 0 }}>
                  Transaction confirmation times averaged over 12 seconds, leading to user anxiety and failed state synchronization.
                </p>
              </div>
              <div className={styles.glassCard}>
                <span className="material-symbols-outlined text-primary text-[32px] mb-4">security</span>
                <h3 className={styles.cardTitle} style={{ fontSize: '20px' }}>Scale &amp; Trust</h3>
                <p className={styles.cardDesc} style={{ fontSize: '14px', marginBottom: 0 }}>
                  Scaling to 500k concurrent users required a radical shift in backend architecture and real-time security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Bento Grid */}
        <div>
          <h2 className={styles.cardTitle} style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>Project Impact</h2>
          <div className={styles.grid}>
            {/* 450% ROI */}
            <div className={styles.glassCard} style={{ gridColumn: 'span 7', height: '320px', justifyContent: 'flex-end', position: 'relative' }}>
              <span className="material-symbols-outlined text-primary/10 text-[120px]" style={{ position: 'absolute', top: '16px', right: '16px' }}>trending_up</span>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '64px', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>450%</div>
                <h3 className={styles.cardTitle} style={{ fontSize: '20px', marginBottom: '8px' }}>ROI Realized</h3>
                <p className={styles.cardDesc} style={{ fontSize: '14px', maxWidth: '320px', marginBottom: 0 }}>
                  Direct impact on operational efficiency through automated reconciliation and reduced support tickets.
                </p>
              </div>
            </div>

            {/* 500k Active */}
            <div className={styles.glassCard} style={{ gridColumn: 'span 5', height: '320px', background: 'var(--primary)', color: 'var(--on-primary)', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>User Adoption</div>
              <div>
                <div style={{ fontSize: '64px', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1 }}>500k</div>
                <div style={{ fontSize: '20px', fontWeight: 600 }}>Active Users</div>
              </div>
            </div>

            {/* 0.4s Latency */}
            <div className={styles.glassCard} style={{ gridColumn: 'span 4', height: '240px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--tertiary)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>0.4s</div>
              <div style={{ fontSize: '15px', color: 'var(--on-surface-variant)' }}>Average Latency</div>
            </div>

            {/* Global Distribution */}
            <div className={styles.glassCard} style={{ gridColumn: 'span 8', height: '240px', position: 'relative', overflow: 'hidden', justifyContent: 'flex-end' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2
              }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 className={styles.cardTitle} style={{ fontSize: '20px', marginBottom: '8px' }}>Global Distribution</h4>
                <p className={styles.cardDesc} style={{ fontSize: '14px', marginBottom: 0 }}>Active in 42 countries with seamless regulatory compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
