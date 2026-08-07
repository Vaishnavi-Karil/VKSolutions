import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Home.module.css';
import NetworkAnimation from './NetworkAnimation';

export default function Home() {
  const navigate = useNavigate();

  const handleBook = () => navigate('/contact');
  const handlePortfolio = () => navigate('/portfolio');

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroTextCol}>
            <div className={styles.badge}>VK Software Solutions</div>
            <h1 className={styles.title}>
              Scalable Software &amp; Cloud Engineering <span className={styles.titleItalic}>for Startups.</span>
            </h1>
            <p className={styles.subtitle}>
              We provide professional custom software development, high-performance web and mobile application engineering, and automated DevOps &amp; cloud solutions. Specializing in React.js, Next.js, Node.js, Express, AWS, Docker, and Kubernetes, we build secure, scalable digital products that power critical business workloads.
            </p>
            <div className={styles.btnGroup}>
              <button className={styles.primaryBtn} onClick={handleBook}>
                Book a Consultation
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button className={styles.secondaryBtn} onClick={handlePortfolio}>
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className={styles.visualsCol} style={{ position: 'relative', minHeight: '400px' }}>
            <NetworkAnimation />
            <div className={styles.floatingContainer} style={{ zIndex: 10 }}>
              <div className={`${styles.floatingCard} ${styles.card1} floating`}>
                <span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>developer_board</span>
              </div>
              <div className={`${styles.floatingCard} ${styles.card2} floating`}>
                <span className="material-symbols-outlined text-[36px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
              </div>
              <div className={`${styles.floatingCard} ${styles.card3} floating`}>
                <span className="material-symbols-outlined text-[28px] text-secondary">database</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By Marquee */}
      <section className={styles.trustedSection}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeGroup} animate-scroll`}>
              <div className={styles.logoItem}><span className="material-symbols-outlined">api</span> QUANTUM</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">all_inclusive</span> NEXUS</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">bolt</span> VOLT</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">radar</span> PULSE</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">token</span> CRYPTO</div>
            </div>
            <div className={`${styles.marqueeGroup} animate-scroll`}>
              <div className={styles.logoItem}><span className="material-symbols-outlined">api</span> QUANTUM</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">all_inclusive</span> NEXUS</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">bolt</span> VOLT</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">radar</span> PULSE</div>
              <div className={styles.logoItem}><span className="material-symbols-outlined">token</span> CRYPTO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Capabilities */}
      <section className={styles.bentoSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Our Capabilities</h2>
            <p style={{ color: 'var(--on-surface-variant)', maxWidth: '600px' }}>
              We build custom software, web platforms, and mobile ecosystems using React.js, Next.js, Node.js, and AWS. Here is why ambitious businesses partner with us.
            </p>
          </div>
          <Link to="/services" className={styles.exploreLink}>
            Explore all services <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Custom Software */}
          <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
            <div className={styles.bentoFlex}>
              <div className={styles.bentoText}>
                <span className={`material-symbols-outlined ${styles.cardIcon} ${styles.iconPrimary}`} style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <h3 className={styles.cardTitle}>Custom Software &amp; Web Solutions</h3>
                <p className={styles.cardDesc}>We design secure, high-throughput backend applications and REST APIs using Node.js and PostgreSQL to solve your core operational bottlenecks.</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> Full Stack Web Applications (React/Next.js)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> Custom Backend Engines &amp; APIs (Node/Express)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span> High-Availability Database Architectures
                  </li>
                </ul>
              </div>
              <div className={styles.bentoCode}>
                <div className={styles.codeDotGroup}>
                  <div className={`${styles.codeDot} ${styles.dotRed}`}></div>
                  <div className={`${styles.codeDot} ${styles.dotYellow}`}></div>
                  <div className={`${styles.codeDot} ${styles.dotGreen}`}></div>
                </div>
                <code className={styles.codeBlock}>
                  <span style={{ color: 'var(--tertiary)' }}>async function</span> <span style={{ color: 'var(--primary)' }}>deploySystem</span>() &#123;<br/>
                  &nbsp;&nbsp;<span style={{ color: 'var(--on-surface-variant)' }}>const</span> cluster = <span style={{ color: 'var(--tertiary)' }}>await</span> Kubernetes.init();<br/>
                  &nbsp;&nbsp;cluster.scale(&#123; <span style={{ color: 'var(--primary)' }}>replicas</span>: 50 &#125;);<br/>
                  &nbsp;&nbsp;<span style={{ color: 'rgba(228, 225, 238, 0.4)' }}>// Auto-healing enabled</span><br/>
                  &nbsp;&nbsp;<span style={{ color: 'var(--tertiary)' }}>return</span> cluster.status;<br/>
                  &#125;
                </code>
              </div>
            </div>
          </div>

          {/* Card 2: Cloud & DevOps */}
          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <span className={`material-symbols-outlined ${styles.cardIcon} ${styles.iconSecondary}`}>cloud_done</span>
            <h3 className={styles.cardTitle}>DevOps &amp; Cloud Infrastructure</h3>
            <p className={styles.cardDesc}>Automated server deployments, CI/CD pipelines, and Kubernetes orchestrations on AWS to guarantee 99.99% uptime and zero-downtime releases.</p>
            <div className={styles.tags}>
              <span className={styles.tag}>AWS</span>
              <span className={styles.tag}>Docker &amp; Kubernetes</span>
              <span className={styles.tag}>CI/CD</span>
            </div>
          </div>

          {/* Card 3: AI & Data */}
          <div className={`${styles.bentoCard} ${styles.cardMediumWide}`}>
            <span className={`material-symbols-outlined ${styles.cardIcon} ${styles.iconTertiary}`}>psychology</span>
            <h3 className={styles.cardTitle}>Why Choose VK Software Solutions</h3>
            <p className={styles.cardDesc}>Our systems are engineered by senior software architects with a focus on data security, absolute codebase stability, and transparent communication.</p>
            <div className={styles.dataVizContainer}>
              <div className={styles.dataBar}></div>
              <div className={styles.dataBar}></div>
              <div className={styles.dataBar}></div>
              <div className={styles.dataBar}></div>
              <div className={styles.dataBar}></div>
            </div>
          </div>

          {/* Card 4: Dedicated Tech */}
          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <span className={`material-symbols-outlined ${styles.cardIcon} ${styles.iconPrimary}`}>code</span>
            <h3 className={styles.cardTitle}>On-Time Delivery</h3>
            <p className={styles.cardDesc}>We follow strict milestone tracking and sprint-based agile delivery to ensure your software is fully tested and launched according to schedule.</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Agile Sprints</span>
              <span className={styles.tag}>On-Time Release</span>
              <span className={styles.tag}>Secure Launch</span>
            </div>
          </div>

          {/* Card 5: Mobile App Dev */}
          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <span className={`material-symbols-outlined ${styles.cardIcon} ${styles.iconSecondary}`}>phone_iphone</span>
            <h3 className={styles.cardTitle}>Mobile Application Development</h3>
            <p className={styles.cardDesc}>High-performance, secure cross-platform mobile applications for iOS and Android engineered using React Native.</p>
            <div className={styles.tags}>
              <span className={styles.tag}>React Native</span>
              <span className={styles.tag}>iOS / Android</span>
              <span className={styles.tag}>Secure Offline Sync</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Arsenal */}
      <section className={styles.techSection}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: '32px' }}>Our Technology Arsenal</h2>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            We use only the most reliable and modern technologies to ensure your product stands the test of time.
          </p>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <span className={`material-symbols-outlined ${styles.techIcon}`} style={{ color: '#61DAFB' }}>rebase</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '14px' }}>React</span>
          </div>
          <div className={styles.techItem}>
            <span className={`material-symbols-outlined ${styles.techIcon}`}>deployed_code</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '14px' }}>Next.js</span>
          </div>
          <div className={styles.techItem}>
            <span className={`material-symbols-outlined ${styles.techIcon}`} style={{ color: '#339933' }}>settings_input_component</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '14px' }}>Node.js</span>
          </div>
          <div className={styles.techItem}>
            <span className={`material-symbols-outlined ${styles.techIcon}`} style={{ color: '#FF9900' }}>cloud_queue</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '14px' }}>AWS</span>
          </div>
          <div className={styles.techItem}>
            <span className={`material-symbols-outlined ${styles.techIcon}`} style={{ color: '#326CE5' }}>group_work</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '14px' }}>Kubernetes</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testiSection}>
        {/* Background Glow */}
        <div className="pulse-glow" style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(255, 183, 133, 0.08) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className={styles.testiContainer}>
          <div className={styles.testiHeader}>
            <h2 className={styles.sectionTitle}>Client Spotlights</h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              How our dedicated engineering support translates directly to tangible client business metrics.
            </p>
          </div>
          <div className={styles.testiCardsWrapper}>
            <div className={`${styles.testiCard} ${styles.cardA}`}>
              <p className={styles.quote}>"VK Software Solutions migrated our legacy CRM to a microservices architecture. It reduced database latency by 60% and improved our transaction success rate. Their engineering discipline is outstanding."</p>
              <div className={styles.profile}>
                <div className={`${styles.avatar} ${styles.avatarA}`}>
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <div className={styles.profileName}>Marcus Chen</div>
                  <div className={styles.profileTitle}>CTO, Nexus Corp</div>
                </div>
              </div>
            </div>
            <div className={`${styles.testiCard} ${styles.cardB}`}>
              <p className={styles.quote}>"Their DevOps team automated our entire AWS pipeline with Kubernetes. They resolved critical deployment bottlenecks within four weeks, leading to stable, zero-downtime releases."</p>
              <div className={styles.profile}>
                <div className={`${styles.avatar} ${styles.avatarB}`}>
                  <span className="material-symbols-outlined text-secondary">person</span>
                </div>
                <div>
                  <div className={styles.profileName}>Sarah Jenkins</div>
                  <div className={styles.profileTitle}>VP Engineering, Volt</div>
                </div>
              </div>
            </div>
            <div className={`${styles.testiCard} ${styles.cardC}`}>
              <p className={styles.quote}>"VK Software Solutions helped us integrate secure LLM engines. Their deep understanding of database performance and API scaling enabled us to launch our SaaS three weeks ahead of schedule."</p>
              <div className={styles.profile}>
                <div className={`${styles.avatar} ${styles.avatarC}`}>
                  <span className="material-symbols-outlined text-tertiary">person</span>
                </div>
                <div>
                  <div className={styles.profileName}>Elena Rodriguez</div>
                  <div className={styles.profileTitle}>Founder, Pulse AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Block */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: '38px', marginBottom: '16px' }}>Accelerate Your Engineering Roadmap</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '16px', lineHeight: '28px', marginBottom: '32px', opacity: 0.8 }}>
            Partner with VK Software Solutions to build secure, high-availability custom software systems, manage automated cloud infrastructure, and deploy intelligent software tools.
          </p>
          <div className={styles.btnGroup} style={{ justifyContent: 'center' }}>
            <button className={styles.primaryBtn} onClick={handleBook}>
              Book a Consultation
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button className={styles.secondaryBtn} onClick={handlePortfolio}>
              Explore Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
