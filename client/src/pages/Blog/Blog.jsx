import React from 'react';
import styles from '../PageLayout.module.css';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Architecting Event-Driven Ledger Systems at Scale',
      date: 'July 28, 2026',
      author: 'Marcus Chen',
      category: 'Backend / Scale',
      excerpt: 'How we leverage Apache Kafka and PostgreSQL logical replication to construct high-throughput double-entry ledger databases.'
    },
    {
      id: 2,
      title: 'Why We Transitioned Our Custom UI Library to Vanilla CSS Modules',
      date: 'July 15, 2026',
      author: 'Elena Rodriguez',
      category: 'Design Systems',
      excerpt: 'An in-depth look at CSS performance bottlenecks in server-rendered applications and how CSS Modules provide the ultimate balance of utility and optimization.'
    },
    {
      id: 3,
      title: 'Auto-Healing Kubernetes Clusters: Strategies and Implementation',
      date: 'June 30, 2026',
      author: 'Sarah Jenkins',
      category: 'DevOps / Cloud',
      excerpt: 'Establishing custom health checks, controller operators, and node-termination handlers inside AWS EKS infrastructures.'
    }
  ];

  return (
    <div>
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Technical Insights</span>
          <h1 className={styles.title}>
            The engineering <span className={styles.gradientText}>Chronicles</span>
          </h1>
          <p className={styles.subtitle}>
            In-depth guides, architectural blueprints, and engineering strategies penned directly by our design studio's core builders.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.id} className={`${styles.col4} ${styles.glassCard}`}>
              <span style={{ fontSize: '11px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', display: 'block' }}>{post.category}</span>
              <h3 className={styles.cardTitle} style={{ fontSize: '20px', lineHeight: '28px' }}>{post.title}</h3>
              <p className={styles.cardDesc}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', fontSize: '12px', color: 'var(--on-surface-variant)', opacity: 0.7 }}>
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
