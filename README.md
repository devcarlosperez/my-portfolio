# Portfolio

A personal portfolio website showcasing my skills, projects, and professional experience as a Junior Developer specializing in React, Node.js, and REST APIs. This project is designed to be responsive, accessible, supports dark mode, and multiple languages (English and Spanish).

---

## Overview

This application serves as a digital curriculum vitae and showcase. It includes sections for:
- **Introduction**: A dynamic welcome section with typing effects.
- **My Profile**: Details about my technical skills (hard skills), soft skills, languages, and work experience.
- **Projects**: A gallery of my recent web development projects with links to GitHub repositories and live demos.
- **Contact**: Information on how to reach me, including social media links and a contact form or details.
- **Settings**: Users can toggle between Light and Dark mode, and switch languages (EN/ES).

---

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devcarlosperez/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` directory.

---

## Project Structure

```
portfolio/
├── public/                 # Static assets (images, favicon, robots.txt, CV)
├── src/
│   ├── assets/             # Component-specific assets
│   ├── components/         # Reusable React components
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Introduction.jsx
│   │   ├── MyProfile.jsx
│   │   └── Projects.jsx
│   ├── locales/            # Translation files (i18n)
│   │   ├── en.json
│   │   └── es.json
│   ├── App.css
│   ├── App.jsx             # Main application component
│   ├── i18n.js             # Internationalization configuration
│   ├── index.css           # Global styles (Tailwind imports)
│   └── main.jsx            # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js       # (Implicit with Tailwind/Vite)
├── tailwind.config.js      # (Implicit/v4 in CSS)
└── vite.config.js
```

---

## Technologies and Libraries Used

### Main Technologies

- **[React](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.

### Additional Libraries & Tools

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[i18next](https://www.i18next.com/)** & **[react-i18next](https://react.i18next.com/)**: Internationalization framework for React.
- **[i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)**: Language detection for i18next.
- **[Typed.js](https://github.com/mattboldt/typed.js/)**: A JavaScript typing animation library.
- **[FontAwesome](https://fontawesome.com/)**: Icon set and toolkit.
- **[ESLint](https://eslint.org/)**: Pluggable JavaScript linter.

---

## Acknowledgments

Special thanks to all the open-source contributors whose tools made this project possible. Also, thanks to friends and professional colleagues for their support and advice on the website design.

---

## Author

**Carlos Luis Perez Santana**