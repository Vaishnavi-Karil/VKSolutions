import React from 'react';
import styles from '../PageLayout.module.css';

export default function Industries() {
  const industriesList = [
    {
      id: 1,
      icon: 'payments',
      title: 'Fintech & Digital Banking',
      desc: 'Developing secure, transaction-heavy platforms, custom payment gateways, and fraud prevention engines with zero downtime.',
      points: ['PCI-DSS Compliance', 'Smart Contract Integrations', 'Real-Time Ledger Audits']
    },
    {
      id: 2,
      icon: 'local_hospital',
      title: 'Healthcare & HealthTech',
      desc: 'Building patient care systems, analytical medical dashboards, and interoperable networks that respect strict data standards.',
      points: ['HIPAA / GDPR Compliance', 'HL7 / FHIR Standards', 'AI Diagnostic Assists']
    },
    {
      id: 3,
      icon: 'local_shipping',
      title: 'Logistics & Supply Chain',
      desc: 'Architecting distributed real-time inventory systems and automated supply chain flows for maximum delivery speed.',
      points: ['Route Optimization APIs', 'IOT Telemetry Trackers', 'Predictive Supply Models']
    },
    {
      id: 4,
      icon: 'shopping_bag',
      title: 'E-Commerce Suites',
      desc: 'Powering high-traffic retail portals with robust caching, rapid search indices, and integrated marketing APIs.',
      points: ['Global Inventory Sync', 'Cinematic Storefronts', 'Elasticsearch Systems']
    }
  ];

  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Domain Expertise</span>
          <h1 className={styles.title}>
            Tailored Engineering for <span className={styles.gradientText}>High-Impact</span> Sectors
          </h1>
          <p className={styles.subtitle}>
            We combine software excellence with deep domain knowledge to deliver platforms that redefine industry standards.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.grid}>
          {industriesList.map((ind) => (
            <div key={ind.id} className={`${styles.col6} ${styles.glassCard}`}>
              <span className={`material-symbols-outlined ${styles.cardIcon}`} style={{ fontVariationSettings: "'FILL' 1" }}>{ind.icon}</span>
              <h3 className={styles.cardTitle}>{ind.title}</h3>
              <p className={styles.cardDesc}>{ind.desc}</p>
              <ul className={styles.list}>
                {ind.points.map((pt, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
