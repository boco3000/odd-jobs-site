# OddJobs New York — Portfolio Project

A marketing site and demo submission flow for **OddJobs New York**, a NYC-focused gig platform.  
This project was built as a **portfolio piece** to demonstrate modern frontend architecture, accessible form handling, and client/server patterns using Next.js App Router.

**Live site:** https://odd-jobs-site-eta.vercel.app/

---

## Overview

OddJobs New York connects people in NYC with fast, reliable help for everyday tasks.  
This site serves as:

- A marketing landing page
- A demo request flow for people needing help
- A demo application flow for workers
- A technical showcase (not a production backend)

All submissions are **demo-only** and clearly labeled as such.

---

## Goals of the Project

- Build a clean, modern landing site with clear calls to action
- Implement accessible, well-structured forms
- Demonstrate client/server separation using Next.js App Router
- Show realistic API route handling without unnecessary complexity
- Deploy and maintain the project as a portfolio artifact

---

## Tech Stack

- **Next.js** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment + CI/CD)
- **GitHub** (source control)

---

## Architecture Highlights

### App Router Structure

src/app/
├─ layout.tsx # Shared layout (banner, header, footer)
├─ page.tsx # Homepage
├─ request-help/ # Client-side form
├─ become-a-worker/ # Client-side form
├─ case-study/ # Portfolio explanation
├─ submissions/ # Server-rendered demo data
└─ api/ # API routes

- Pages are file-based routes
- Shared layout wraps all pages
- API routes live alongside UI (no separate backend)

---

### Client vs Server Components

**Client Components (`"use client"`)**
- Used for forms, validation, interactivity
- Examples:
  - Request Help form
  - Become a Worker form
  - Active navigation state

**Server Components (default)**
- Used for static content and data rendering
- Examples:
  - Homepage sections
  - Case study page
  - Mock submissions page

This minimizes unnecessary JavaScript sent to the browser.

---

## Forms & Validation Pattern

Each form follows a consistent, production-style approach:

1. Controlled inputs with React state
2. Client-side validation
3. Server-side validation via API routes
4. Inline, accessible error messaging
5. Clear success states
6. Explicit demo-mode messaging

Accessibility considerations include:
- `aria-invalid`
- `aria-describedby`
- `role="alert"`
- Keyboard focus states
- Semantic grouping (`fieldset`, `legend`)

---

## API Routes (Demo)

The project includes two API routes:

- `/api/request-help`
- `/api/worker-application`

These routes demonstrate:
- Request parsing
- Input validation
- Structured error responses
- Clear client/server boundaries

No database is used; responses are logged and handled in demo mode.

---

## Portfolio Enhancements

To make this project interview-ready, several portfolio-focused additions were included:

### Demo Mode Banner
A site-wide banner clarifies that forms do not create real jobs.

### Case Study Page
Explains goals, stack, architecture decisions, and future improvements.

### Mock Submissions Page
Server-rendered page displaying static JSON data to demonstrate:
- Data modeling
- Server-side rendering
- UI for structured data

---

## What I’d Add Next (Production)

If this were a real consumer-facing product, next steps would include:
- Email notifications or persistent storage for submissions
- Authentication and role-based access
- Analytics for CTA and conversion tracking
- Mobile navigation and deeper UX polish

---

## Running Locally
- ``bash
- npm instal
- npmp run dev
- Open http://localhost:3000 in your browser.

### Notes

This project is intentionally scoped as a portfolio demonstration, not a full production system.
The focus is on architecture, accessibility, clarity, and maintainability rather than feature volume.

# Author

Built by Bo Cochran as a portfolio project.


