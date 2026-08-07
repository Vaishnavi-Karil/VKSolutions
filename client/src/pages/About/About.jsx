import React from 'react';
import styles from '../PageLayout.module.css';
import QuantumCore from './QuantumCore';

export default function About() {
  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Our Story</span>
          <h1 className={styles.title}>
            Architecting the <span className={styles.gradientText}>Digital Future</span>
          </h1>
          <p className={styles.subtitle}>
            We are VK Software Solutions. We design, build, and deploy custom enterprise software applications, secure database systems, and automated cloud pipelines for startups and growing enterprises.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <h2 className={styles.cardTitle} style={{ fontSize: '32px', marginBottom: '24px' }}>Custom Software Experts</h2>
            <p className={styles.cardDesc}>
              We specialize in custom web and mobile engineering using the MERN Stack, React.js, Next.js, and Node.js. Our systems are engineered to prioritize core performance, data security, and long-term modularity.
            </p>
            <p className={styles.cardDesc}>
              From automating Kubernetes clusters on AWS to configuring secure database systems and integrating OpenAI LLM tools, we deliver high-availability software products that grow alongside your business roadmap.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(21, 28, 47, 0.5)', backdropFilter: 'blur(12px)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <QuantumCore />
          </div>
        </div>

        {/* Engineering Specialties */}
        <div style={{ marginBottom: '80px' }}>
          <h2 className={styles.cardTitle} style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>Our Engineering Specialties</h2>
          <div className={styles.grid}>
            <div className={`${styles.col4} ${styles.glassCard}`} style={{ marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-primary text-[32px] mb-4">deployed_code</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Frontend Web Application Development</h3>
              <p className={styles.cardDesc}>Creating pixel-perfect, highly responsive, and fast-loading web interfaces using React.js and Next.js.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`} style={{ marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">dns</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Backend Application Development</h3>
              <p className={styles.cardDesc}>Building high-performance, secure backend engines, REST APIs, and multi-tenant database systems.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`} style={{ marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-secondary text-[32px] mb-4">layers</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Full Stack Web Solutions</h3>
              <p className={styles.cardDesc}>End-to-end integration of frontend presentations with secure backend servers in perfect harmony.</p>
            </div>
            <div className={`${styles.col6} ${styles.glassCard}`} style={{ gridColumn: 'span 6' }}>
              <span className="material-symbols-outlined text-primary text-[32px] mb-4">phone_iphone</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Mobile Application Development</h3>
              <p className={styles.cardDesc}>Developing high-performance cross-platform iOS and Android mobile apps using React Native and Flutter with native speed.</p>
            </div>
            <div className={`${styles.col6} ${styles.glassCard}`} style={{ gridColumn: 'span 6' }}>
              <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">cloud_done</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>DevOps &amp; Cloud Deployment</h3>
              <p className={styles.cardDesc}>Automating build pipelines, CI/CD integrations, Docker environments, and Kubernetes server orchestrations on AWS.</p>
            </div>
          </div>
        </div>

        {/* Studio Principles */}
        <div>
          <h2 className={styles.cardTitle} style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>Our Core Pillars</h2>
          <div className={styles.grid}>
            <div className={`${styles.col4} ${styles.glassCard}`} style={{ marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-primary text-[32px] mb-4">groups</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Experienced Engineers</h3>
              <p className={styles.cardDesc}>A dedicated team of senior developers and systems architects specializing in modern web, mobile, and cloud environments.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`} style={{ marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">terminal</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Modern Stack</h3>
              <p className={styles.cardDesc}>Full mastery of React.js, Next.js, Node.js, Express, AWS Cloud, Docker, Kubernetes, and OpenAI LLM API integrations.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`} style={{ marginBottom: '24px' }}>
              <span className="material-symbols-outlined text-secondary text-[32px] mb-4">dataset</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Scalable Architecture</h3>
              <p className={styles.cardDesc}>Designing microservices, database structures, and high-performance server logic to support high traffic volumes safely.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`}>
              <span className="material-symbols-outlined text-primary text-[32px] mb-4">published_with_changes</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Agile &amp; On-Time</h3>
              <p className={styles.cardDesc}>Iterative sprint-based delivery with clear project milestones, routine progress checks, and a commitment to launching on schedule.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`}>
              <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">chat</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Transparent Communication</h3>
              <p className={styles.cardDesc}>Direct messaging via Slack/Teams, scheduled status updates, and direct developer communication—free of silos or delays.</p>
            </div>
            <div className={`${styles.col4} ${styles.glassCard}`}>
              <span className="material-symbols-outlined text-secondary text-[32px] mb-4">support_agent</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '18px', marginBottom: '12px' }}>Support &amp; Security</h3>
              <p className={styles.cardDesc}>Continuous security audits, performance monitoring, database tuning, and maintenance SLA services to scale your business.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
