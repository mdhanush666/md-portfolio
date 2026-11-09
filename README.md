# Manomohan Dhanush — Personal Portfolio Website (MVC Architecture)

Responsive Software Developer portfolio built with clean **Model–View–Controller (MVC)** separation and multi-page structure.

## 1. Project Folder Structure

```text
manomohan-dhanush-portfolio/
├── index.html                        # Home / Hero Landing Page
├── pages/
│   ├── about.html                    # About, Skills Matrix & Experience Page
│   ├── projects.html                 # Project Showcase & Architecture Modal Page
│   └── contact.html                  # Contact Form & Direct Connect Page
├── styles/
│   ├── variables.css                 # Design tokens, fonts & dark/light theme variables
│   ├── layout.css                    # Responsive grids, glassmorphism & scrollbar styles
│   └── components.css                # Reusable cards, code windows & animations
├── js/
│   ├── models/
│   │   └── portfolioModel.js         # Profile, skills, projects data & localStorage state
│   ├── views/
│   │   └── portfolioView.js          # DOM rendering for skills, projects, modals & toasts
│   └── controllers/
│       └── portfolioController.js    # Event listeners, filtering, form validation & theme toggle
└── assets/
    └── images/
        ├── sales_dashboard.jpg
        ├── flutter_sales_app.jpg
        └── student_system.jpg
```
