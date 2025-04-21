import React, { useState, useEffect } from 'react';
import './index.css';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const skills = [
    { category: 'Web Development', level: 30 },
    { category: 'Server Management', level: 40 },
    { category: 'Cloud & Hosting', level: 33 },
    { category: 'UI/UX Design', level: 20 },
    { category: 'Problem Solving', level: 60 },
    { category: 'SEO & Digital Marketing', level: 45 },
    { category: 'Video Editing (Premiere Pro)', level: 75 },
    { category: 'Photo Editing (Photoshop)', level: 80 },
  ];

  // Animate skill bars
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll('.fill')
        .forEach((bar, i) => (bar.style.width = `${skills[i].level}%`));
    }, 100);
  }, [skills]);

  return (
    <div className="app" style={{ padding: 20 }}>
      <header
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 10,
          borderBottom: '2px solid',
          borderColor: darkMode ? '#444' : '#333',
          background: darkMode ? '#000' : '#fff',
          color: darkMode ? '#fff' : '#000',
        }}
      >
        <h1 style={{ fontSize: '2rem' }}>⚡ BlazeForge</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 20,
            cursor: 'pointer',
            background: darkMode ? '#fff' : '#000',
            color: darkMode ? '#000' : '#fff',
          }}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <section className="hero" style={{ textAlign: 'center', padding: '40px 0' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: 10 }}>BlazeForge</h2>
        <p>Crafting your digital presence with style and performance.</p>
      </section>

      <section className="about" style={{ padding: '30px 0' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: 10, color: darkMode ? '#fff' : '#333' }}>
          About Me
        </h3>
        <p>
          I'm <strong>Prakhar Yadav</strong>, a passionate developer and founder of BlazeForge. With expertise in modern web
          technologies and game server infrastructure, I build fast, reliable, and beautiful digital experiences.
        </p>
      </section>

      <section className="skills" style={{ background: darkMode ? '#2a2a2a' : '#f4f4f4', padding: 30, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: 30 }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: 20, color: darkMode ? '#eee' : '#333' }}>Skills</h3>
        {skills.map((skill, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: 4, color: darkMode ? '#ddd' : '#000' }}>
              <span>{skill.category}</span>
              <span>{skill.level}%</span>
            </div>
            <div style={{ width: '100%', height: 12, background: darkMode ? '#444' : '#ddd', borderRadius: 4, overflow: 'hidden' }}>
              <div className="fill" style={{ width: 0, height: 12, background: darkMode ? '#fff' : '#000', borderRadius: 4, transition: 'width 1s ease' }} />
            </div>
          </div>
        ))}
      </section>

      <section className="projects" style={{ padding: '30px 0' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: 20, color: darkMode ? '#fff' : '#333' }}>Projects</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {[
            { icon: '🔥', title: 'BlazeHost', desc: 'High-performance Game Hosting Platform' },
            { icon: '📱', title: 'Portfolio', desc: 'Responsive personal website (this one!)' },
            { icon: '💡', title: 'AI Blog Generator', desc: 'Fast content with GPT tech' },
          ].map((p, i) => (
            <div key={i} style={{ border: '1px solid', borderColor: darkMode ? '#333' : '#ccc', borderRadius: 8, padding: 16, background: darkMode ? '#1a1a1a' : '#fff' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 6, color: darkMode ? '#fff' : '#000' }}>
                {p.icon} {p.title}
              </h4>
              <p style={{ color: darkMode ? '#ddd' : '#333' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="socials" style={{ padding: '30px 0', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: 10, color: darkMode ? '#fff' : '#333' }}>Connect with Me</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, fontSize: '1.8rem' }}>
          <a href="https://www.instagram.com/iitzprakhar/" target="_blank" rel="noreferrer"><FaInstagram color={darkMode ? '#fff' : '#000'} /></a>
          <a href="https://github.com/blazecodeprakhar" target="_blank" rel="noreferrer"><FaGithub color={darkMode ? '#fff' : '#000'} /></a>
          <a href="https://www.linkedin.com/in/prakhar-yadav-0963s8299/" target="_blank" rel="noreferrer"><FaLinkedin color={darkMode ? '#fff' : '#000'} /></a>
          <a href="https://www.youtube.com/@iitzprakhar" target="_blank" rel="noreferrer"><FaYoutube color={darkMode ? '#fff' : '#000'} /></a>
          <a href="mailto:prakharyadav096@gmail.com"><FaEnvelope color={darkMode ? '#fff' : '#000'} /></a>
        </div>
      </section>

      <footer className="footer" style={{ textAlign: 'center', padding: 20, borderTop: '2px solid', borderColor: darkMode ? '#444' : '#333', marginTop: 40, color: darkMode ? '#fff' : '#555' }}>
        <p>Founder – Prakhar Yadav</p>
        <p>© {new Date().getFullYear()} BlazeForge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
