import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! ${email} has been subscribed to our newsletter.`);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.aboutCol}>
          <div className={styles.brand} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.png" alt="VK Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
            VK Software Solutions
          </div>
          <p className={styles.description}>
            We engineer secure, scalable, and high-performance custom software systems and automated cloud infrastructure for startups and enterprises.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a href="mailto:info@vksoftwaresolutions.com" className={styles.socialLink} aria-label="Email">
              <span className="material-symbols-outlined text-[18px]">alternate_email</span>
            </a>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Capabilities</div>
          <ul className={styles.linksList}>
            <li>
              <Link to="/services" className={styles.linkItem}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/industries" className={styles.linkItem}>
                Industries
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={styles.linkItem}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/technologies" className={styles.linkItem}>
                Technologies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Company &amp; Legal</div>
          <ul className={styles.linksList}>
            <li>
              <Link to="/about" className={styles.linkItem}>
                About
              </Link>
            </li>

            <li>
              <Link to="/blog" className={styles.linkItem}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.linkItem}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/utility" className={styles.linkItem}>
                Privacy &amp; Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Newsletter</div>
          <p className={styles.newsletterText}>
            Subscribe for regular technical insights on systems architecture, cloud infrastructure, and software scalability.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              className={styles.input} 
              placeholder="Email address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter"
            />
            <button className={styles.submitBtn} type="submit" aria-label="Subscribe">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div>© 2026 VK Software Solutions. Engineering Excellence.</div>
        <div className={styles.locations}>
          <span>London</span>
          <span>San Francisco</span>
          <span>Singapore</span>
        </div>
      </div>
    </footer>
  );
}
