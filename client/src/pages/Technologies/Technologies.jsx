import React, { useState } from 'react';
import styles from '../PageLayout.module.css';

export default function Technologies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const techs = [
    // Frontend
    { name: 'React.js', icon: 'deployed_code', color: 'var(--primary)', category: 'Frontend' },
    { name: 'Next.js', icon: 'layers', color: 'var(--primary)', category: 'Frontend' },
    { name: 'JavaScript', icon: 'code', color: 'var(--primary)', category: 'Frontend' },
    { name: 'TypeScript', icon: 'terminal', color: 'var(--primary)', category: 'Frontend' },
    { name: 'HTML5', icon: 'html', color: 'var(--primary)', category: 'Frontend' },
    { name: 'CSS3', icon: 'css', color: 'var(--primary)', category: 'Frontend' },
    { name: 'Redux Toolkit', icon: 'schema', color: 'var(--primary)', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: 'settings_ethernet', color: 'var(--tertiary)', category: 'Backend' },
    { name: 'Express.js', icon: 'api', color: 'var(--tertiary)', category: 'Backend' },
    { name: 'REST APIs', icon: 'settings_input_component', color: 'var(--tertiary)', category: 'Backend' },
    { name: 'Authentication', icon: 'admin_panel_settings', color: 'var(--tertiary)', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'database', color: 'var(--tertiary)', category: 'Backend' },
    { name: 'MongoDB', icon: 'storage', color: 'var(--tertiary)', category: 'Backend' },

    // DevOps & Cloud
    { name: 'Docker', icon: 'directions_boat', color: 'var(--secondary)', category: 'DevOps & Cloud' },
    { name: 'Kubernetes', icon: 'hub', color: 'var(--secondary)', category: 'DevOps & Cloud' },
    { name: 'AWS', icon: 'cloud', color: 'var(--secondary)', category: 'DevOps & Cloud' },
    { name: 'CI/CD', icon: 'sync_alt', color: 'var(--secondary)', category: 'DevOps & Cloud' },
    { name: 'GitHub Actions', icon: 'play_circle', color: 'var(--secondary)', category: 'DevOps & Cloud' },
    { name: 'Nginx', icon: 'router', color: 'var(--secondary)', category: 'DevOps & Cloud' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'DevOps & Cloud'];

  const filteredTechs = activeFilter === 'All' 
    ? techs 
    : techs.filter(tech => tech.category === activeFilter);

  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Technology Stack</span>
          <h1 className={styles.title}>
            Our Engineering <span className={styles.gradientText}>Arsenal</span>
          </h1>
          <p className={styles.subtitle}>
            We build secure, business-critical software products using a modern, industry-proven technology stack. Organized across client interfaces, business logic layers, and automated container grids.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        {/* Interactive Filter Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
          <div>
            <h2 className={styles.cardTitle} style={{ marginBottom: '8px' }}>Technology Grid</h2>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>Every layer of the modern architecture, mastered and integrated.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', padding: '6px', borderRadius: 'var(--radius-md)', background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? 'var(--primary)' : 'none',
                  color: activeFilter === cat ? 'var(--on-primary)' : 'var(--on-surface-variant)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: '8px 16px',
                  fontFamily: 'var(--font-label)',
                  fontSize: '13px',
                  fontWeight: activeFilter === cat ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className={styles.grid}>
          {filteredTechs.map((tech) => (
            <div 
              key={tech.name} 
              className={`${styles.col2} ${styles.glassCard}`}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '24px 16px',
                minWidth: '120px',
                gridColumn: 'span 2'
              }}
            >
              <span 
                className="material-symbols-outlined text-[36px] mb-4" 
                style={{ color: tech.color, fontVariationSettings: "'FILL' 1" }}
              >
                {tech.icon}
              </span>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: '14px', fontWeight: 600, color: 'var(--on-surface)' }}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Spotlight */}
        <div style={{ marginTop: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <span className={styles.badge} style={{ marginBottom: '16px' }}>Frontend Mastery</span>
            <h2 className={styles.title} style={{ fontSize: '36px', marginBottom: '24px' }}>Next-Gen Interface Engineering</h2>
            <p className={styles.cardDesc} style={{ marginBottom: '32px' }}>
              We leverage **React.js** and **Next.js** to build fast, search-engine-optimized client user interfaces. Our frontend architecture prioritizes core web vitals and clean component separation for long-term support.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.bullet}></span> Server-Side Rendering (SSR) &amp; Static Generation</li>
              <li className={styles.listItem}><span className={styles.bullet}></span> Highly Scalable Atomic Component Libraries</li>
              <li className={styles.listItem}><span className={styles.bullet}></span> Predictable Redux &amp; Context State Flow</li>
            </ul>
          </div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(21, 28, 47, 0.7)', padding: '16px' }}>
            <img 
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block', opacity: 0.8 }} 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" 
              alt="Futuristic glowing code interface"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
