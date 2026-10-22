# Masum's Portfolio

A responsive personal portfolio built with Vue 3 and Vite. It presents Masum's background, skills, projects, education, experience, certificates, and contact information.

## Features

- Responsive layout for desktop, tablet, and mobile
- Light and dark themes
- Mobile navigation
- Project cards with image previews
- Contact form with client-side validation
- Downloadable CV

## Requirements

- Node.js (LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy that directory to a static web host. If using GitHub Pages for a repository site, configure Vite's `base` path to match the repository name before building.

## Update portfolio content

- Edit profile details, social links, skills, projects, education, experience, and certificates in `src/data/portfolioData.js`.
- Add or replace project and profile images in `src/assets/images/`, then update the imports and project data as needed.
- The CV is currently imported from `src/assets/images/`; replace the file or update its import in `src/data/portfolioData.js` to use a different CV.

## Contact form

The contact form submits through FormSubmit to the email address configured as `profile.email` in `src/data/portfolioData.js`. The sender's email is included as the reply-to address. FormSubmit may require recipient verification before messages are delivered; check the recipient inbox and spam folder after testing the deployed form.

## Tech stack

- Vue 3
- Vite
- JavaScript
- HTML and CSS
