import React, { useState } from 'react';
import styles from '../PageLayout.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Custom Software Development',
    budget: '$50,000 - $100,000',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.projectType}\nBudget: ${formData.budget}\nMessage: ${formData.message}\n\nThank you for your enquiry. We will get back to you within 12 hours.`);
    setFormData({
      name: '',
      email: '',
      projectType: 'Custom Software Development',
      budget: '$50,000 - $100,000',
      message: ''
    });
  };

  return (
    <div>
      {/* Background Glow */}
      <div className="pulse-glow" style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(196, 192, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Get In Touch</span>
          <h1 className={styles.title}>
            Let's Build Something <span className={styles.gradientText}>Visionary</span>
          </h1>
          <p className={styles.subtitle}>
            We build custom, enterprise-grade software and automated cloud infrastructures. Contact our lead software architects today.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        {/* Call Now Card (Primary CTA) */}
        <div className={styles.glassCard} style={{ padding: '48px', marginBottom: '48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(196, 192, 255, 0.04) 0%, transparent 60%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <span className="material-symbols-outlined text-primary text-[48px] mb-4">call</span>
            <h2 className={styles.cardTitle} style={{ fontSize: '32px', marginBottom: '16px' }}>Call Us to Discuss Your Project</h2>
            <p className={styles.cardDesc} style={{ fontSize: '16px', lineHeight: '28px', marginBottom: '32px' }}>
              We highly recommend discussing your requirements over a phone call first. This allows us to understand your business objectives, high-level features, and timeline constraints in real-time before you submit detailed technical requirements.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="tel:+18005550199" 
                style={{
                  background: 'linear-gradient(135deg, #ffb785 0%, #db761f 100%)',
                  color: '#301400',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-label)',
                  fontSize: '15px',
                  fontWeight: '600',
                  padding: '16px 36px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(255, 183, 133, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 183, 133, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 183, 133, 0.3)';
                }}
              >
                <span className="material-symbols-outlined text-[20px]">phone</span>
                Call Now: +1 (800) 555-0199
              </a>
              
              <a 
                href="https://wa.me/18005550199" 
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--on-surface)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-label)',
                  fontSize: '15px',
                  fontWeight: '600',
                  padding: '16px 36px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                WhatsApp Contact
              </a>
            </div>
          </div>
        </div>

        {/* Details and Form Grid */}
        <div className={styles.grid}>
          {/* Left Column: Details & Map */}
          <div className={styles.col6} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Contact Details Card */}
            <div className={styles.glassCard}>
              <h3 className={styles.cardTitle} style={{ fontSize: '20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="material-symbols-outlined text-primary">business</span>
                Contact Information
              </h3>
              
              <ul className={styles.list} style={{ gap: '20px' }}>
                <li className={styles.listItem}>
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--outline)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</div>
                    <a href="mailto:info@vksoftwaresolutions.com" style={{ color: 'var(--on-surface)', textDecoration: 'none', fontWeight: '500' }}>info@vksoftwaresolutions.com</a>
                  </div>
                </li>
                
                <li className={styles.listItem}>
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--outline)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Business Hours</div>
                    <span style={{ color: 'var(--on-surface)', fontWeight: '500' }}>Monday – Friday: 9:00 AM – 6:00 PM (GMT)</span>
                  </div>
                </li>
                
                <li className={styles.listItem} style={{ alignItems: 'flex-start' }}>
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--outline)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Corporate Offices</div>
                    <div style={{ color: 'var(--on-surface-variant)', fontSize: '14px', marginTop: '6px', lineHeight: '22px' }}>
                      <strong>London HQ:</strong> 128 City Road, London, EC1V 2NX, UK<br/>
                      <strong>San Francisco:</strong> 548 Market St, San Francisco, CA 94104, USA<br/>
                      <strong>Singapore:</strong> Marina Boulevard, Singapore 018981
                    </div>
                  </div>
                </li>
              </ul>

              {/* Social links */}
              <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--on-surface)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--on-surface)';
                  }}
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
                <a 
                  href="mailto:info@vksoftwaresolutions.com" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--on-surface)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--on-surface)';
                  }}
                >
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </a>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className={styles.glassCard} style={{ position: 'relative', overflow: 'hidden', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(var(--surface-container-high) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                opacity: 0.3
              }}></div>
              <span className="material-symbols-outlined text-primary text-[36px] mb-2" style={{ zIndex: 1 }}>map</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--on-surface)', marginBottom: '4px', zIndex: 1 }}>Google Map Location</h4>
              <p style={{ fontSize: '12px', color: 'var(--outline)', zIndex: 1 }}>Interactive map placeholder representing our global office coordinates.</p>
            </div>
          </div>

          {/* Right Column: Form (Secondary CTA) */}
          <div className={styles.col6}>
            <div className={styles.glassCard} style={{ height: 'auto', background: 'rgba(21, 28, 47, 0.5)' }}>
              <h3 className={styles.cardTitle} style={{ fontSize: '20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="material-symbols-outlined text-tertiary">send</span>
                Send an Enquiry
              </h3>
              
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Your Name</label>
                  <input 
                    className={styles.input} 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email Address</label>
                  <input 
                    className={styles.input} 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="projectType">Service Area</label>
                  <select 
                    className={styles.select} 
                    id="projectType" 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option>Custom Software Development</option>
                    <option>Web Application Development</option>
                    <option>Mobile Application Development</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>Full Stack Development</option>
                    <option>API Development</option>
                    <option>Cloud Deployment</option>
                    <option>DevOps Solutions</option>
                    <option>Maintenance &amp; Support</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="budget">Project Budget Range</label>
                  <select 
                    className={styles.select} 
                    id="budget" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Project Requirements Overview</label>
                  <textarea 
                    className={styles.textarea} 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your requirements, server load expectations, or database scaling needs..." 
                    required
                  ></textarea>
                </div>

                <button 
                  className={styles.submitBtn} 
                  type="submit"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--on-surface)',
                    fontFamily: 'var(--font-label)',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
