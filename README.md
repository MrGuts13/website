# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## Editing Content

All content is stored in TypeScript files under `src/data/`. Edit these files to update your information:

### Experience (`src/data/experienceData.ts`)
- Work history
- Job responsibilities
- Technologies used
- Time periods

### Education (`src/data/educationData.ts`)
- Degrees and certifications
- Institutions
- Coursework
- Achievements

### Projects (`src/data/projectsData.ts`)
- Project titles and descriptions
- Technologies used
- Key features
- Outcomes

### Leadership (`src/data/leadershipData.ts`)
- Leadership positions
- Organizations
- Achievements
- Skills gained

### Skills (`src/data/skillsData.ts`)
- Technical skills by category
- Proficiency levels
- Tools and technologies

## Customizing Appearance

- Colors and styling: Edit `tailwind.config.js`
- Layout and components: Modify files in `src/components/`
- Global styles: Update `src/index.css`

## Building for Production

Build the website for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/     # React components
├── data/          # Content files
├── utils/         # Utility functions
├── App.tsx        # Main app component
└── index.css      # Global styles
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)