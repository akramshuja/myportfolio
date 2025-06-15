# Personal Portfolio Website

This project is a **static, JSON‑driven portfolio website** built with Vite, React, TypeScript, Tailwind CSS, and shadcn‑ui. All content is configured via the JSON files in `src/data/`; no component code needs to change when updating your profile.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Content Management](#content-management)
4. [Development Scripts](#development-scripts)
5. [Deployment](#deployment)
6. [Custom Domains](#custom-domains)
7. [Tech Stack](#tech-stack)

---

## Quick Start

```bash
# 1 – Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2 – Install dependencies
npm install

# 3 – Start the development server
npm run dev
```

The app will be available at [**http://localhost:5173**](http://localhost:5173) (or the next free port) with hot‑reload enabled.

---

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── data/            # 🔑 All JSON content lives here
│   │   ├── about.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   ├── education.json
│   │   ├── awards.json
│   │   ├── portfolio.json
│   │   └── contact.json
│   ├── components/      # Re‑usable UI components
│   └── ...              # Pages, hooks, utils, etc.
└── README.md
```

---

## Content Management

Edit any of the JSON files inside `src/data/` to update the corresponding section on the site. Below are the expected schemas and a minimal example for each file.

### `about.json`

```json
{
  "highlights": [
    {
      "icon": "Code",
      "title": "Full‑Stack Development",
      "description": "Brief description of your expertise"
    }
  ]
}
```

**Allowed icons:** `Code`, `Server`, `Brain`, `Users`

### `skills.json`

```json
{
  "skillCategories": [
    {
      "title": "Programming Languages",
      "skills": ["Java", "Python"],
      "color": "from-blue-500 to-blue-600"
    }
  ]
}
```

Use any valid Tailwind gradient such as `from-pink-500 to-red-600`.

### `experience.json`

```json
{
  "experiences": [
    {
      "title": "Senior Software Engineer",
      "company": "Company Name",
      "duration": "Sept 2024 – Present (6 mos)",
      "achievements": [
        "Key achievement or responsibility 1"
        "Key achievement or responsibility 2"
      ]
    }
  ]
}
```

### `education.json`

```json
{
  "education": {
    "college": "University Name",
    "duration": "YEAR-YEAR",
    "degree": "Degree",
    "specialization": "Specialization"
  },
  "courses": [
    "Certified ScrumMaster",
    "Docker Certified Associate by Edurek"
  ]
}
```

### `awards.json`

```json
{
  "awards": [
    "Award or Recognition 1"
    "Award or Recognition 2"
  ]
}
```

### `portfolio.json`

```json
{
  "projects": [
    {
      "title": "Project Title",
      "description": "Short project summary",
      "image": "/placeholder.svg",
      "link": "https://github.com/you/yourproject"
    }
  ]
}
```

### `contact.json`

```json
{
  "contactInfo": [
    {
      "icon": "Phone",
      "title": "Phone",
      "value": "123-456-7890",
      "href": "tel:123-456-7890"
    },
    {
      "icon": "Mail",
      "title": "Email",
      "value": "you@example.com",
      "href": "mailto:you@example.com"
    }
  ]
}
```

**Allowed icons:** `Phone`, `Mail`

---

## Development Scripts

| Command           | Purpose                                |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start local dev server with hot reload |
| `npm run build`   | Generate an optimized production build |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint on source files             |

---

## Deployment

1. **Build the site**

   ```bash
   npm run build
   ```

   This outputs a static site to the `dist/` directory.
2. **Deploy** the contents of `dist/` to any static hosting provider:

   * **Vercel** – `vercel --prod`
   * **Netlify** – drag‑and‑drop `dist/` or push to a connected repo
   * **GitHub Pages** – serve `dist/` from the `gh-pages` branch
   * **AWS S3 + CloudFront**, **Cloudflare Pages**, or any traditional web host

---

## Custom Domains

Configure your DNS to point to your hosting provider, then follow their instructions to map your domain to the deployed site.

---

## Tech Stack

* **Vite** – Lightning‑fast dev server & bundler
* **React + TypeScript** – Component‑driven UI with type safety
* **Tailwind CSS** – Utility‑first styling
* **shadcn‑ui** – Accessible, unstyled UI primitives

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
