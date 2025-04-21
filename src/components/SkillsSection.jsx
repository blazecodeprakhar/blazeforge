import React from 'react';

const skills = [
  { category: "Web Development", level: 40 },
  { category: "Server Management", level: 60 },
  { category: "Cloud & Hosting", level: 33 },
  { category: "UI/UX Design", level: 40 },
  { category: "Problem Solving", level: 60 },
  { category: "SEO & Digital Marketing", level: 55 },
  { category: "Video Editing (Premiere Pro)", level: 85 },
  { category: "Photo Editing (Photoshop)", level: 90 },
];

// Loop through each skill to render the progress bar
const skillsContainer = document.querySelector('.skills-container'); // Assuming you have a container for skills
skills.forEach(skill => {
  const skillElement = document.createElement('div');
  skillElement.classList.add('skill');

  const skillTitle = document.createElement('h3');
  skillTitle.innerText = skill.category;

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.style.width = `${skill.level}%`; // Set the progress bar width dynamically

  skillElement.appendChild(skillTitle);
  skillElement.appendChild(progressBar);
  skillsContainer.appendChild(skillElement);
});



function SkillsSection() {
  return (
    <div style={{ padding: '30px', fontFamily: 'serif', backgroundColor: '#fff', color: '#000' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold' }}>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{skill.category}</div>
          <div style={{
            width: '100%',
            height: '10px',
            backgroundColor: '#ccc',
            position: 'relative',
            borderRadius: '2px'
          }}>
            <div style={{
              width: `${skill.level}%`,
              height: '10px',
              backgroundColor: '#000',
              position: 'absolute',
              top: 0,
              left: 0,
              borderRadius: '2px'
            }} />
          </div>
          <div style={{ fontSize: '12px', marginTop: '4px' }}>{skill.level}%</div>
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
