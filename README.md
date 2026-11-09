# Manomohan Dhanush — Personal Portfolio Website

**Software Developer | Flutter & Full-Stack Development**  
📍 Sri Lanka | ✉️ [m.dhanush666dhanu@gmail.com](mailto:m.dhanush666dhanu@gmail.com) | 💬 [+94 75 956 1933 (WhatsApp)](https://www.google.com/search?q=https://wa.me/94759561933) | 🔗 [LinkedIn](https://www.linkedin.com/in/dhanush666/) | 💻 [GitHub (@mdhanush666)](https://github.com/mdhanush666)

A responsive, dark/light-themed Software Developer portfolio website engineered with a clean **Model–View–Controller (MVC)** multi-page architecture. Built to showcase cross-platform **Flutter (Android & Windows)** and **Full-Stack Web (React.js, Node.js, Express.js, MongoDB, Java, MySQL)** engineering work, technical skills, production experience, and direct WhatsApp/Email contact workflows.

## Key Portfolio Features

- **Modular MVC Architecture**: Clean separation between data models (`js/models/portfolioModel.js`), DOM rendering views (`js/views/portfolioView.js`), and event controllers (`js/controllers/portfolioController.js`).
- **Multi-Page Responsive Design**: Dedicated pages for **Home** (`index.html`), **About & Skills** (`pages/about.html`), **Projects Showcase** (`pages/projects.html`), and **Contact** (`pages/contact.html`), styled with Tailwind CSS and custom CSS design tokens.
- **Interactive Technical Skills Matrix**: Filterable across **All**, **Languages**, **Mobile & Frontend**, **Backend & DB**, and **Tools & DevOps**.
- **Project Showcase & Architecture Modals**: Category filters (**Full-Stack Web**, **Flutter Android/Windows**, **Java & MySQL**) plus interactive case-study modals detailing system architecture and engineering contributions.
- **Direct WhatsApp & Email Integration**: Clicking `+94 75 956 1933` opens a direct chat via the [WhatsApp Click to Chat API (`wa.me`)](https://faq.whatsapp.com/5913398998672934), and submitting the contact form logs messages locally while pre-filling a structured WhatsApp message to [+94 75 956 1933](https://www.google.com/search?q=https://wa.me/94759561933) or launching the default email client (`mailto:`).
- **Persistent Dark / Light Developer Theme**: Defaults to a sleek dark slate aesthetic with emerald and indigo accents and persists user preference in `localStorage`.

## Featured Projects Showcased

| Project Name | Category & Role | Core Tech Stack | Live Demo & Source Repositories |
| :--- | :--- | :--- | :--- |
| **Sales Management Dashboard** | Full-Stack Web Application | React.js (Vite), Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose | [Live Demo (Vercel)](https://sales-management-system-react.vercel.app/) · [Frontend GitHub](https://www.google.com/search?q=https://github.com/mdhanush666/sales-management-system-react) · [Backend GitHub](https://www.google.com/search?q=https://github.com/mdhanush666/sales-management-system-backend) |
| **Cross-Platform Sales Management System** | Production Enterprise Suite (Hedanship Asia) | Flutter (Android & Windows), Dart, Node.js, Express.js, REST APIs, JWT, MongoDB, Railway, Firebase | [Developer GitHub Profile](https://github.com/mdhanush666) |
| **Student Management System** | Academic Engineering Project | Java, MySQL, SQL, Role-Based Access Control (RBAC) | [GitHub Repository](https://github.com/mdhanush666/Student-Management-System-JAVA) |

## Technical Skills Arsenal

| Domain | Technologies & Tools |
| :--- | :--- |
| **Languages** | Dart, JavaScript (ES6+), Java, SQL, HTML5, CSS3 |
| **Mobile & Frontend** | Flutter (Android & Windows), React.js, Redux Toolkit, Tailwind CSS, Bootstrap, Responsive UI |
| **Backend & Databases** | Node.js, Express.js, REST APIs, JWT Authentication, MongoDB, Mongoose, MySQL |
| **Tools & Deployment** | Git, [GitHub](https://github.com/mdhanush666), Figma, [Vercel](https://vercel.com/docs/deployments), Railway, Firebase |

## Project Folder Structure (MVC)

1. **`manomohan-dhanush-portfolio/` (Project Root)**
   - `index.html` — Home / Hero landing page with developer profile code card and navigation.
   - `README.md` — Project overview, architecture documentation, and deployment guide.
2. **`pages/` (Multi-Page Views)**
   - `pages/about.html` — Professional summary, education timeline, interactive skills matrix, and work experience.
   - `pages/projects.html` — Filterable project showcase cards and interactive architecture case-study modal.
   - `pages/contact.html` — Validated contact form with direct WhatsApp (`wa.me`) and `mailto:` integration.
3. **`styles/` (Modular Stylesheets)**
   - `styles/variables.css` — Typography imports (`Inter` & `JetBrains Mono`), color tokens, and dark/light theme variables.
   - `styles/layout.css` — Responsive grid background, hero radial glow, glassmorphism header, and custom scrollbars.
   - `styles/components.css` — Project card hover transitions, developer code window styling, badges, and animations.
4. **`js/models/` (MVC Model Layer)**
   - `js/models/portfolioModel.js` — Central data store for profile details, 18 technical skills, 3 project case studies, and `localStorage` outbox state.
5. **`js/views/` (MVC View Layer)**
   - `js/views/portfolioView.js` — Pure DOM rendering functions for the skills grid, project filter cards, architecture modal, outbox log, and toast notifications.
6. **`js/controllers/` (MVC Controller Layer)**
   - `js/controllers/portfolioController.js` — Event listeners, category filtering, form validation, WhatsApp message forwarding, clipboard copy, and theme toggling.
7. **`assets/images/` (Visual Assets)**
   - `assets/images/sales_dashboard.jpg` — UI preview for the Sales Management Dashboard.
   - `assets/images/flutter_sales_app.jpg` — UI preview for the Cross-Platform Flutter Sales Application.
   - `assets/images/student_system.jpg` — UI preview for the Java & MySQL Student Management System.

## Professional Experience & Education Summary

- **Junior Software Developer — Hedanship Asia (Pvt) Ltd** *(Nov 2024 – Sep 2026)*
  - Developed a production cross-platform sales management application for Android and Windows using Flutter, supporting field sales representatives and administrative workflows.
  - Built and integrated REST APIs with Node.js and Express.js, and designed MongoDB/Mongoose data models for customers, products, routes, carts, and orders.
  - Implemented JWT-based authentication and device-restricted login security, designed interfaces in Figma, and deployed services via Railway and Firebase.
- **Bachelor of Technology in Software and Intelligent Systems** *(In Progress)*
  - University of Vocational Technology (UNIVOTEC), Ratmalana — Part-time weekend program.
- **NVQ Level 5 Diploma in Information and Communication Technology** *(2023)*
  - Vocational Training Authority (VTA), Nuwara Eliya.
- **Information and Communication Technology Technician Certification** *(2022)*
  - Vocational Training Authority (VTA).

## Local Setup & Deployment

### Run Locally
1. Clone the repository from [@mdhanush666 on GitHub](https://github.com/mdhanush666):
   ```bash
   git clone https://github.com/mdhanush666/mdhanush666.github.io.git
   cd mdhanush666.github.io
   ```
2. Open `index.html` directly in your browser or launch it with the **VS Code Live Server** extension.

### Deploy on GitHub Pages or Vercel
- **GitHub Pages**: Push the project to a public repository named `mdhanush666.github.io`, then navigate to **Settings → Pages → Build and deployment** and select **Deploy from a branch (`main` / `root`)** as outlined in the [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart).
- **Vercel**: Import your GitHub repository in the Vercel dashboard with the default static preset for automatic deployments on every push via [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github).

## Contact & Connect

- **Developer**: Manomohan Dhanush
- **Email**: [m.dhanush666dhanu@gmail.com](mailto:m.dhanush666dhanu@gmail.com)
- **Phone / WhatsApp**: [+94 75 956 1933](https://www.google.com/search?q=https://wa.me/94759561933)
- **LinkedIn**: [linkedin.com/in/dhanush666](https://www.linkedin.com/in/dhanush666/)
- **GitHub**: [github.com/mdhanush666](https://github.com/mdhanush666)
