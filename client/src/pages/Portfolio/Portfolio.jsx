import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../PageLayout.module.css';

export default function Portfolio() {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 'luminapay',
      title: 'LuminaPay: Global Micro-Transactions Platform',
      category: 'Fintech / Scale',
      desc: 'How we engineered a transaction system capable of handling 50k+ request/sec with sub-millisecond database updates.',
      icon: 'account_balance_wallet',
      badge: 'Featured Project'
    },
    {
      id: 'quantum-ai',
      title: 'Quantum Analytics: Predictive Health Tracker',
      category: 'AI / Healthcare',
      desc: 'Custom fine-tuning and deployment of diagnostic machine learning pipelines inside HIPAA compliant cloud sectors.',
      icon: 'neurology',
      badge: 'Completed'
    },
    {
      id: 'nexus-logistics',
      title: 'Nexus: Distributed Fleet Tracking Hub',
      category: 'Supply Chain / IoT',
      desc: 'Architecting an event-driven telemetry tracker processing real-time vehicle routes across five global regions.',
      icon: 'explore',
      badge: 'Completed'
    }
  ];

  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Our Work</span>
          <h1 className={styles.title}>
            Proven Solutions, <span className={styles.gradientText}>Architected</span> to Scale
          </h1>
          <p className={styles.subtitle}>
            A curated showcase of custom software architectures, cloud transformations, and AI deployments built for high-performance companies.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.grid}>
          {caseStudies.map((cs) => (
            <div key={cs.id} className={`${styles.col6} ${styles.glassCard}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className={`material-symbols-outlined ${styles.cardIcon}`} style={{ fontVariationSettings: "'FILL' 1", marginBottom: 0 }}>{cs.icon}</span>
                <span style={{ fontSize: '12px', color: 'var(--primary)', border: '1px solid rgba(196,192,255,0.2)', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(196,192,255,0.05)' }}>
                  {cs.badge}
                </span>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>{cs.category}</span>
              <h3 className={styles.cardTitle}>{cs.title}</h3>
              <p className={styles.cardDesc}>{cs.desc}</p>
              {cs.id === 'luminapay' ? (
                <button 
                  onClick={() => navigate('/case-study/luminapay')}
                  className={styles.cardLink}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Read Case Study <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              ) : (
                <span className={styles.cardLink} style={{ opacity: 0.6, cursor: 'default' }}>
                  Case Study coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
