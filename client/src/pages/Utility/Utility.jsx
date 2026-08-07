import React, { useState } from 'react';
import styles from '../PageLayout.module.css';

export default function Utility() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const faqs = [
    {
      id: 1,
      q: 'How do you handle project scalability?',
      a: 'We design architectures with a "cloud-first" mindset, leveraging microservices and serverless components that automatically adjust to traffic demands. Our engineering standards ensure your product remains performant from 100 to 10 million users.'
    },
    {
      id: 2,
      q: 'What is your typical engagement model?',
      a: 'We offer both project-based fixed scope and dedicated team models. Most of our partners prefer the dedicated team approach, which allows for agile iteration and deep integration with your internal roadmap.'
    },
    {
      id: 3,
      q: 'Do you provide ongoing support after launch?',
      a: 'Absolutely. We provide Service Level Agreements (SLAs) for maintenance, security monitoring, and progressive feature development to ensure your software remains modern and bug-free.'
    }
  ];

  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero} style={{ paddingBottom: '32px' }}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Information Center</span>
          <h1 className={styles.title}>
            Utility &amp; <span className={styles.gradientText}>Legal</span> Hub
          </h1>
          <p className={styles.subtitle}>
            Find answers to common operational questions, review our privacy policy, and check terms of service guidelines.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        {/* Accordion Inquiries */}
        <section style={{ maxWidth: '720px', margin: '0 auto 80px auto' }}>
          <h2 className={styles.cardTitle} style={{ fontSize: '28px', textAlign: 'center', marginBottom: '32px' }}>Common Inquiries</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={styles.glassCard} 
                style={{ 
                  padding: '24px', 
                  cursor: 'pointer',
                  borderColor: activeAccordion === faq.id ? 'rgba(196, 192, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)'
                }}
                onClick={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className={styles.cardTitle} style={{ fontSize: '18px', margin: 0, color: activeAccordion === faq.id ? 'var(--primary)' : 'var(--on-surface)' }}>
                    {faq.q}
                  </h3>
                  <span 
                    className="material-symbols-outlined text-primary"
                    style={{ 
                      transform: activeAccordion === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    expand_more
                  </span>
                </div>
                {activeAccordion === faq.id && (
                  <div style={{ marginTop: '16px', color: 'var(--on-surface-variant)', fontSize: '14px', lineHeight: '22px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Policies */}
        <section className={styles.grid}>
          <div className={`${styles.col6} ${styles.glassCard}`}>
            <h2 className={styles.cardTitle} style={{ fontSize: '28px', marginBottom: '8px' }}>Privacy Policy</h2>
            <div style={{ fontSize: '12px', color: 'var(--outline)', marginBottom: '32px' }}>Last Updated: October 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p className={styles.cardDesc} style={{ flexGrow: 0, margin: 0 }}>
                At VK Software Solutions, we prioritize the integrity and security of your digital footprint. This document outlines our protocols for data handling and user confidentiality.
              </p>
              <div>
                <h4 className={styles.label} style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>01. Data Collection</h4>
                <p className={styles.cardDesc} style={{ fontSize: '13px', margin: 0 }}>
                  We collect minimal metadata required for service delivery, including technical logs and voluntary contact information. We do not sell or monetize user data under any circumstances.
                </p>
              </div>
              <div>
                <h4 className={styles.label} style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>02. Encryption Standards</h4>
                <p className={styles.cardDesc} style={{ fontSize: '13px', margin: 0 }}>
                  All sensitive data is encrypted at rest and in transit using industry-standard AES-256 protocols. Access is restricted through multi-factor authentication and role-based permissions.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.col6} ${styles.glassCard}`}>
            <h2 className={styles.cardTitle} style={{ fontSize: '28px', marginBottom: '8px' }}>Terms of Service</h2>
            <div style={{ fontSize: '12px', color: 'var(--outline)', marginBottom: '32px' }}>Compliance Version: 2.4.0</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p className={styles.cardDesc} style={{ flexGrow: 0, margin: 0 }}>
                By engaging with our platform or services, you agree to adhere to our operational standards and intellectual property guidelines.
              </p>
              <div>
                <h4 className={styles.label} style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>01. Intellectual Property</h4>
                <p className={styles.cardDesc} style={{ fontSize: '13px', margin: 0 }}>
                  Unless otherwise agreed in a separate SOW, all original code and designs produced by VK Software Solutions remain our property until final milestone fulfillment.
                </p>
              </div>
              <div>
                <h4 className={styles.label} style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>02. Liability Limits</h4>
                <p className={styles.cardDesc} style={{ fontSize: '13px', margin: 0 }}>
                  VK Software Solutions is not liable for indirect or consequential damages arising from software downtime, provided reasonable engineering care was exercised.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
