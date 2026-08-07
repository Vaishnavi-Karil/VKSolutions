import React from 'react';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '15%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Expertise Redefined</span>
          <h1 className={styles.title}>
            Full-Cycle <span className={styles.gradientText}>Engineering</span> Excellence
          </h1>
          <p className={styles.subtitle}>
            We bridge the gap between vision and reality through high-performance software engineering, cinematic design, and intelligent infrastructure.
          </p>
        </div>
      </header>

      {/* Main Services Capabilities */}
      <main className={styles.container}>
        {/* 1. Custom Software */}
        <section className={styles.section} id="custom-software">
          <div className={styles.infoCol}>
            <div className={styles.stickyHeadline}>
              <span className={styles.sectionNum}>01 — Core Engineering</span>
              <h2 className={styles.sectionTitle}>Custom Software Development</h2>
              <p className={styles.sectionDesc}>End-to-end bespoke solutions designed to solve complex business challenges with scalable architecture.</p>
            </div>
          </div>
          <div className={styles.cardsCol}>
            <div className={styles.glassCard}>
              <div className={styles.cardHeader}>
                <span className={`material-symbols-outlined ${styles.cardIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <h3 className={styles.cardTitle}>Enterprise Systems</h3>
              </div>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}><span className={styles.bullet}></span> ERP &amp; CRM Development</li>
                <li className={styles.cardListItem}><span className={styles.bullet}></span> Legacy System Modernization</li>
                <li className={styles.cardListItem}><span className={styles.bullet}></span> High-Availability Distributed Systems</li>
              </ul>
            </div>
            
            <div className={styles.imageCard}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className={styles.imageCardContent}>
                <h3 className={styles.cardTitle} style={{ marginBottom: '8px' }}>Scalable Microservices</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px' }}>Building modular components that grow with your user base.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Web & Mobile */}
        <section className={styles.section} id="platforms">
          <div className={styles.infoCol}>
            <div className={styles.stickyHeadline}>
              <span className={styles.sectionNum} style={{ color: 'var(--tertiary)' }}>02 — Experience Platforms</span>
              <h2 className={styles.sectionTitle}>Web &amp; Mobile Ecosystems</h2>
              <p className={styles.sectionDesc}>Crafting high-performance digital interfaces that captivate users across every screen size.</p>
            </div>
          </div>
          <div className={styles.cardsCol}>
            <div className={styles.bentoGrid}>
              <div className={`${styles.glassCard} ${styles.gridCol7}`}>
                <span className="material-symbols-outlined text-tertiary text-[32px] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
                <h3 className={styles.cardTitle} style={{ marginBottom: '8px' }}>Mobile Apps</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', marginBottom: '16px' }}>Native iOS, Android, and cross-platform solutions using React Native and Flutter.</p>
                <div className={styles.tagGroup}>
                  <span className={styles.tag}>Biometrics</span>
                  <span className={styles.tag}>Offline First</span>
                  <span className={styles.tag}>Real-time Sync</span>
                </div>
              </div>
              <div className={`${styles.glassCard} ${styles.gridCol5}`}>
                <span className="material-symbols-outlined text-tertiary text-[32px] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
                <h3 className={styles.cardTitle} style={{ marginBottom: '8px' }}>Web Apps</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>Progressive Web Apps and high-speed React/Next.js platforms.</p>
              </div>
            </div>
            
            <div className={styles.glassCard}>
              <h3 className={styles.cardTitle} style={{ marginBottom: '24px' }}>Cross-Device Features</h3>
              <div className={styles.subFeatures}>
                <div className={styles.featureBox}>
                  <h4 className={styles.featureTitle}>Performance</h4>
                  <p className={styles.featureDesc}>99+ Lighthouse scores and sub-second load times.</p>
                </div>
                <div className={styles.featureBox}>
                  <h4 className={styles.featureTitle}>Accessibility</h4>
                  <p className={styles.featureDesc}>Full WCAG compliance for inclusive digital products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AI & Cloud */}
        <section className={styles.section} id="intelligence">
          <div className={styles.infoCol}>
            <div className={styles.stickyHeadline}>
              <span className={styles.sectionNum}>03 — Intelligence &amp; Scale</span>
              <h2 className={styles.sectionTitle}>AI &amp; Cloud Infrastructure</h2>
              <p className={styles.sectionDesc}>Powering your growth with predictive intelligence and resilient cloud-native architectures.</p>
            </div>
          </div>
          <div className={styles.cardsCol}>
            <div className={styles.glassCard} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-80px', top: '-80px', width: '250px', height: '250px', background: 'rgba(196,192,255,0.15)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className={styles.cardHeader}>
                  <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h3 className={styles.cardTitle}>Artificial Intelligence</h3>
                </div>
                <div className={styles.subFeatures}>
                  <div>
                    <h4 className={styles.featureTitle} style={{ color: 'var(--primary)', marginBottom: '8px' }}>LLM Integration</h4>
                    <p className={styles.sectionDesc} style={{ fontSize: '14px' }}>Custom fine-tuning and deployment of Large Language Models for automated workflows.</p>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle} style={{ color: 'var(--primary)', marginBottom: '8px' }}>Predictive Analytics</h4>
                    <p className={styles.sectionDesc} style={{ fontSize: '14px' }}>Data-driven insights to forecast trends and optimize business operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.glassCard}>
              <h3 className={styles.cardTitle} style={{ marginBottom: '24px' }}>Cloud DevOps</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className={styles.listAction}>
                  <span className={styles.listActionText}>AWS/Azure/GCP Management</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>
                </div>
                <div className={styles.listAction}>
                  <span className={styles.listActionText}>Kubernetes &amp; Docker Orchestration</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>
                </div>
                <div className={styles.listAction}>
                  <span className={styles.listActionText}>CI/CD Pipeline Automation</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Product Design & UX */}
        <section className={styles.section} id="design">
          <div className={styles.infoCol}>
            <div className={styles.stickyHeadline}>
              <span className={styles.sectionNum} style={{ color: 'var(--tertiary)' }}>04 — Visual Identity</span>
              <h2 className={styles.sectionTitle}>Product Design &amp; UX</h2>
              <p className={styles.sectionDesc}>Crafting interfaces that are simple, responsive, and delightful to interact with.</p>
            </div>
          </div>
          <div className={styles.cardsCol}>
            <div className={styles.glassCard}>
              <div className={styles.cardHeader}>
                <span className="material-symbols-outlined text-tertiary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                <h3 className={styles.cardTitle}>User Interface Design</h3>
              </div>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}><span className={`${styles.bullet} ${styles.bulletSecondary}`}></span> Component Design Systems</li>
                <li className={styles.cardListItem}><span className={`${styles.bullet} ${styles.bulletSecondary}`}></span> Interactive Prototypes</li>
                <li className={styles.cardListItem}><span className={`${styles.bullet} ${styles.bulletSecondary}`}></span> Responsive Layout Frameworks</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
