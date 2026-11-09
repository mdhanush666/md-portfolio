/**
 * ============================================================================
 * MVC MODEL: Portfolio Data & State Management (js/models/portfolioModel.js)
 * Holds developer profile, technical skills, projects, experience, and state.
 * ============================================================================
 */
window.PortfolioModel = (function () {
  const PROFILE = {
    name: 'Manomohan Dhanush',
    role: 'Software Developer | Flutter & Full-Stack Development',
    location: 'Sri Lanka',
    phone: '+94 75 956 1933',
    whatsappUrl: 'https://wa.me/94759561933',
    email: 'm.dhanush666dhanu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dhanush666/',
    github: 'https://github.com/mdhanush666',
    summary:
      'Software Developer with nearly two years of professional experience developing cross-platform business applications and full-stack solutions. Experienced in Flutter (Android and Windows), React.js, Node.js, Express.js, REST APIs, and MongoDB. Contributed to production-used sales management software, including authentication, business workflows, reporting, and deployment. Currently pursuing a part-time B.Tech in Software and Intelligent Systems.'
  };

  const SKILLS = [
    { name: 'Flutter', category: 'frontend', tag: 'Cross-Platform', detail: 'Android & Windows production apps' },
    { name: 'Dart', category: 'languages', tag: 'Language', detail: 'Async streams, state & desktop/mobile UI' },
    { name: 'React.js (Vite)', category: 'frontend', tag: 'Frontend Web', detail: 'Redux Toolkit, hooks & analytics dashboards' },
    { name: 'JavaScript (ES6+)', category: 'languages', tag: 'Language', detail: 'Full-stack web & REST integrations' },
    { name: 'Node.js', category: 'backend', tag: 'Backend Runtime', detail: 'Scalable RESTful microservices & APIs' },
    { name: 'Express.js', category: 'backend', tag: 'API Framework', detail: 'Middleware, routing & auth controllers' },
    { name: 'MongoDB & Mongoose', category: 'backend', tag: 'NoSQL Database', detail: 'Schemas for orders, routes, carts & users' },
    { name: 'REST APIs', category: 'backend', tag: 'Architecture', detail: 'End-to-end client-server integration' },
    { name: 'JWT & Device Auth', category: 'backend', tag: 'Security', detail: 'Token security & device-restricted login' },
    { name: 'Tailwind CSS', category: 'frontend', tag: 'Styling', detail: 'Responsive utility-first design systems' },
    { name: 'Bootstrap & Responsive UI', category: 'frontend', tag: 'UI Design', detail: 'Mobile-first fluid layouts' },
    { name: 'Java', category: 'languages', tag: 'Language', detail: 'Object-oriented desktop & academic systems' },
    { name: 'MySQL & SQL', category: 'backend', tag: 'Relational DB', detail: 'Normalized schemas & role queries' },
    { name: 'HTML5 & CSS3', category: 'languages', tag: 'Web Core', detail: 'Semantic markup & modern animations' },
    { name: 'Git & GitHub', category: 'tools', tag: 'Version Control', detail: 'Branch workflows & collaborative repos' },
    { name: 'Figma', category: 'tools', tag: 'UI/UX Design', detail: 'Wireframing user flows & screen specs' },
    { name: 'Vercel', category: 'tools', tag: 'Cloud Hosting', detail: 'Frontend production deployments' },
    { name: 'Railway & Firebase', category: 'tools', tag: 'Cloud & BaaS', detail: 'Live backend & app service deployment' }
  ];

  const PROJECTS = [
    {
      id: 'sales-dashboard',
      category: 'fullstack',
      badge: 'Full-Stack Web App',
      statusBadge: 'Live on Vercel',
      accentColor: 'emerald',
      title: 'Sales Management Dashboard',
      image: 'assets/images/sales_dashboard.jpg',
      summary:
        'Full-stack order management, sales leaderboards, and login history analytics platform built with a React/Vite + Redux Toolkit frontend and an Express.js + Mongoose REST backend.',
      bullets: [
        'React/Vite dashboard with Redux Toolkit state management & Tailwind CSS UI',
        'Express.js & Mongoose backend powering real-time sales analytics & order tracking'
      ],
      highlights: [
        'Engineered a responsive React/Vite dashboard for real-time order management, sales rep leaderboards, and user login history auditing.',
        'Implemented centralized state management with Redux Toolkit and styled responsive components using Tailwind CSS.',
        'Built an Express.js and Mongoose REST backend serving aggregated sales dashboard metrics and order analytics.',
        'Deployed the production frontend on Vercel with separate modular GitHub repositories for frontend and backend.'
      ],
      stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Express.js', 'MongoDB'],
      links: [
        { label: 'Live Demo', url: 'https://sales-management-system-react.vercel.app/', primary: true },
        { label: 'FE Repo', url: 'https://github.com/mdhanush666/sales-management-system-react', primary: false },
        { label: 'BE Repo', url: 'https://github.com/mdhanush666/sales-management-system-backend', primary: false }
      ]
    },
    {
      id: 'flutter-sales',
      category: 'flutter',
      badge: 'Flutter • Android & Windows',
      statusBadge: 'Production Enterprise',
      accentColor: 'indigo',
      title: 'Cross-Platform Sales Management System',
      image: 'assets/images/flutter_sales_app.jpg',
      summary:
        'Production-deployed enterprise application at Hedanship Asia supporting field sales representatives on Android and administrative teams on Windows desktop.',
      bullets: [
        'JWT authentication with device-restricted login security & role workflows',
        'End-to-end routes, carts, order processing & reporting deployed via Railway & Firebase'
      ],
      highlights: [
        'Built a unified Flutter codebase targeting both Android (for field sales reps) and Windows desktop (for administrative workflows).',
        'Designed MongoDB/Mongoose schemas and Node.js/Express.js REST endpoints for customers, products, delivery routes, carts, and orders.',
        'Secured company data with JWT authentication and custom device-restricted login validation.',
        'Designed UI/UX flows in Figma and deployed live backend/application services using Railway and Firebase.'
      ],
      stack: ['Flutter', 'Dart', 'Node.js / Express', 'JWT', 'Railway & Firebase'],
      links: [
        { label: 'GitHub Profile', url: 'https://github.com/mdhanush666', primary: false }
      ]
    },
    {
      id: 'student-system',
      category: 'java',
      badge: 'Java & MySQL',
      statusBadge: 'Academic Project',
      accentColor: 'amber',
      title: 'Student Management System',
      image: 'assets/images/student_system.jpg',
      summary:
        'Relational database-driven Java application engineered for student registration, attendance tracking, and multi-role institutional workflows.',
      bullets: [
        'Role-based workflows tailored for Administrators, Teachers, and Students',
        'Normalized MySQL schema for student records, enrollments, and attendance logs'
      ],
      highlights: [
        'Created dedicated role-based workflows for Administrators, Teachers, and Students.',
        'Implemented student registration, course enrollment, and daily attendance record management.',
        'Designed a relational MySQL database schema ensuring data integrity across academic records.'
      ],
      stack: ['Java', 'MySQL', 'SQL', 'RBAC Workflows'],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/mdhanush666/Student-Management-System-JAVA', primary: true }
      ]
    }
  ];

  const STORAGE_KEY = 'md_portfolio_messages';

  function getSkillsByCategory(category) {
    if (!category || category === 'all') return SKILLS;
    return SKILLS.filter(function (item) {
      return item.category === category;
    });
  }

  function getProjectsByCategory(category) {
    if (!category || category === 'all') return PROJECTS;
    return PROJECTS.filter(function (proj) {
      return proj.category === category;
    });
  }

  function getProjectById(id) {
    return PROJECTS.find(function (proj) {
      return proj.id === id;
    });
  }

  function getMessages() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveMessage(entry) {
    const list = getMessages();
    list.unshift(entry);
    const trimmed = list.slice(0, 5);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch (e) {}
    return trimmed;
  }

  function clearMessages() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    return [];
  }

  return {
    PROFILE: PROFILE,
    SKILLS: SKILLS,
    PROJECTS: PROJECTS,
    getSkillsByCategory: getSkillsByCategory,
    getProjectsByCategory: getProjectsByCategory,
    getProjectById: getProjectById,
    getMessages: getMessages,
    saveMessage: saveMessage,
    clearMessages: clearMessages
  };
})();
