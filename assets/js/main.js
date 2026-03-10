const STUDENT_PROFILE = {
  name: "Wafae Boufri",
  title: "Étudiante en Marketing Digital & UX",
  location: "Dakhla, Maroc",
  email: "wafae.boufri.36@edu.uiz.ac.ma",
  github: "https://github.com/wafaeboufri36-bit",
  linkedin: "https://www.linkedin.com/in/wafae-boufri-76b1033b6/",
  about: "Étudiante en Marketing Digital et Expérience Utilisateur à l'EST Dakhla, motivée et organisée, cherchant à développer des compétences pratiques en marketing et en UX à travers des projets académiques et une expérience professionnelle.",
  education: [
    {
      degree: "Marketing Digital & Expérience Utilisateur",
      school: "École Supérieure de Technologie – Dakhla",
      years: "2024 – 2026"
    },
    {
      degree: "Baccalauréat en Économie",
      school: "Lycée Technique Lalla Khadija",
      years: "2024"
    }
  ],
  experience: {
    role: "Stagiaire (1 mois)",
    company: "Cabinet Comptable – Tan-Tan",
    tasks: [
      "Accueil et orientation des clients",
      "Classement des dossiers administratifs",
      "Assistance dans les tâches bureautiques"
    ]
  },
  projects: [
    {
      title: "Création et gestion d'une page Instagram",
      description: "Stratégie de contenu, publication de posts et stories, analyse des performances."
    },
    {
      title: "Analyse UX d'un site web",
      description: "Évaluation de l'expérience utilisateur et identification d'améliorations possibles."
    },
    {
      title: "Campagne d'email marketing",
      description: "Création d'une campagne emailing et analyse de son impact."
    }
  ],
  skills: {
    marketing: ["Gestion des réseaux sociaux", "Stratégie de contenu"],
    ux: ["Bases en expérience utilisateur"],
    tools: ["Word", "Excel", "PowerPoint"],
    soft: ["Communication", "Travail en équipe"]
  },
  languages: ["Arabe – langue maternelle", "Français – bon niveau", "Anglais – notions"]
};

// Populate Data
document.addEventListener("DOMContentLoaded", () => {
  // Basic Texts
  document.getElementById('nav-name').textContent = STUDENT_PROFILE.name;
  document.getElementById('hero-name').textContent = STUDENT_PROFILE.name;
  document.getElementById('hero-title').textContent = STUDENT_PROFILE.title;
  document.getElementById('hero-about-short').textContent = STUDENT_PROFILE.about;
  document.getElementById('about-text').textContent = STUDENT_PROFILE.about;
  document.getElementById('about-location').textContent = STUDENT_PROFILE.location;

  document.getElementById('footer-name').textContent = STUDENT_PROFILE.name;
  document.getElementById('contact-email').textContent = STUDENT_PROFILE.email;

  // Links
  document.getElementById('hero-linkedin').href = STUDENT_PROFILE.linkedin;
  document.getElementById('hero-github').href = STUDENT_PROFILE.github;
  document.getElementById('contact-linkedin').href = STUDENT_PROFILE.linkedin;
  document.getElementById('contact-github').href = STUDENT_PROFILE.github;

  // Education
  const eduContainer = document.getElementById('education-container');
  STUDENT_PROFILE.education.forEach((edu, index) => {
    const div = document.createElement('div');
    if (index !== STUDENT_PROFILE.education.length - 1) {
      div.className = 'mb-3 pb-3 border-bottom';
    }

    let yearsHtml = edu.years ? `<span class="badge bg-secondary mb-2">${edu.years}</span>` : '';
    div.innerHTML = `
      <h5 class="card-title">${edu.degree}</h5>
      <h6 class="text-muted mb-2">${edu.school}</h6>
      ${yearsHtml}
    `;
    eduContainer.appendChild(div);
  });

  // Experience
  document.getElementById('exp-role').textContent = STUDENT_PROFILE.experience.role;
  document.getElementById('exp-company').textContent = STUDENT_PROFILE.experience.company;

  const expTasks = document.getElementById('exp-tasks');
  STUDENT_PROFILE.experience.tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    expTasks.appendChild(li);
  });

  // Skills helper
  const createBadges = (elementId, array) => {
    const container = document.getElementById(elementId);
    array.forEach(item => {
      const span = document.createElement('span');
      span.className = 'skill-badge';
      span.textContent = item;
      container.appendChild(span);
    });
  };

  createBadges('skills-marketing', STUDENT_PROFILE.skills.marketing);
  createBadges('skills-ux', STUDENT_PROFILE.skills.ux);
  createBadges('skills-tools', [...STUDENT_PROFILE.skills.tools, ...STUDENT_PROFILE.skills.soft]);
  createBadges('skills-languages', STUDENT_PROFILE.languages);

  // Projects
  const projectsContainer = document.getElementById('projects-container');
  STUDENT_PROFILE.projects.forEach(cert => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card h-100 p-4 border-0 shadow-sm">
        <h5 class="card-title text-primary mb-3">${cert.title}</h5>
        <p class="card-text">${cert.description}</p>
      </div>
    `;
    projectsContainer.appendChild(col);
  });
});
