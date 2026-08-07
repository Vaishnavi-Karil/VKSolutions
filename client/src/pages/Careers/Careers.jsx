import React from 'react';
import styles from '../PageLayout.module.css';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Distributed Systems Architect',
      type: 'Full-time / Remote',
      dept: 'Backend Core',
      desc: 'Lead the design of high-availability payment routing architectures and event-driven clusters.'
    },
    {
      id: 2,
      title: 'Senior Frontend Engineer (React/Next.js)',
      type: 'Full-time / London / Hybrid',
      dept: 'Experience Team',
      desc: 'Build high-fidelity custom design systems and optimize frontend performances for core SaaS platforms.'
    },
    {
      id: 3,
      title: 'Cloud DevOps Engineer (Kubernetes/AWS)',
      type: 'Full-time / Remote',
      dept: 'Infrastructure',
      desc: 'Manage global multi-region clusters, secure deployment pipelines, and configure IAC with Terraform.'
    }
  ];

  return (
    <div>
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '25%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Join Us</span>
          <h1 className={styles.title}>
            Shape the Future of <span className={styles.gradientText}>Engineering</span>
          </h1>
          <p className={styles.subtitle}>
            We are looking for visionary software engineers, cloud architects, and product designers who value precision, scalability, and artistic execution.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className={styles.cardTitle} style={{ fontSize: '32px' }}>Open Positions</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px' }}>Come pair-program with the best minds in digital product engineering.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {jobs.map((job) => (
            <div key={job.id} className={styles.glassCard} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
              <div style={{ flex: '1 1 500px' }}>
                <span style={{ fontSize: '12px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>{job.dept}</span>
                <h3 className={styles.cardTitle} style={{ fontSize: '22px', marginBottom: '8px' }}>{job.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', marginBottom: '8px' }}>{job.type}</p>
                <p className={styles.cardDesc} style={{ marginBottom: 0 }}>{job.desc}</p>
              </div>
              <button 
                onClick={() => alert(`Apply page for ${job.title} will open shortly.`)}
                className={styles.primaryBtn} 
                style={{ height: 'fit-content', whiteSpace: 'nowrap' }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
