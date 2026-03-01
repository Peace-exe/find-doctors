# Find Doctors — Dermatologist Discovery Web App

A responsive web application that helps users discover nearby dermatologists, understand available treatments, and directly contact clinics without paying any platform booking fees.

The project focuses on clean UI, accessibility, and responsive design while following proper React architecture (layout routes, reusable components, and state management patterns).

---

## Features

- Responsive landing page with hero section
- Dermatologist discovery concept interface
- Testimonials section
- Contact form UI
- Direct clinic communication (no intermediary booking)
- Reusable UI components
- Accessible UI elements (tooltips, labels, form inputs)
- Mobile-first responsive layout
- Consistent design system using component-based architecture

---

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite

### UI & Styling
- Tailwind CSS
- shadcn/ui component system
- Lucide React icons

### Routing & State
- React Router DOM (nested routing using `Outlet`)
- React Query (`@tanstack/react-query`)

### Development Tools
- ESLint
- Prettier
- Git & GitHub

---

## Project Architecture

```
src/
 ├── components/        reusable UI components
 │    ├── HeroSection
 │    ├── Navbar
 │    ├── Testimonials
 │    ├── ConditionsTreated
 │    ├── TopDoctors
 │    ├── FAQSection
 │    ├── Footer
 │    ├── ContactUs
 │    └── CTAButtons
 
 │
 ├── pages/             route-level pages
 │    ├── Home
 │    ├── Layout
 │    └── NotFound
 │
 ├── components/ui/     shadcn generated components
 ├── lib/               utility functions
 ├── App.tsx            routing & global providers
 └── main.tsx           application entry point
```

The application uses a layout route pattern where persistent UI (Navbar, Toaster, Providers) remains mounted while page content changes inside `<Outlet />`.

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/find-doctors.git
cd find-doctors
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Screenshots

Add images inside a `/screenshots` folder, then reference them:

```
screenshots/home-desktop.png
screenshots/home-mobile.png
screenshots/testimonials.png
```

Then in README:

```md
![Desktop](./screenshots/home-desktop.png)
![Mobile](./screenshots/home-mobile.png)
```

---

## What I Learned

- Implemented nested routing using React Router and layout routes
- Built reusable UI components using shadcn/ui
- Managed application providers and global state using React Query
- Designed responsive layouts using Tailwind CSS breakpoints
- Understood layout patterns (full-bleed hero vs container sections)
- Structured a scalable React project architecture

---

## Future Improvements

- Location-based doctor search
- Filter by treatment type
- Appointment booking system
- Authentication for clinics
- Admin dashboard for managing doctors
- Backend API integration

---

## Author

**Aman Yadav**  
B.Tech Computer Science — Gautam Buddha University

GitHub: https://github.com/yourusername  
LinkedIn: https://linkedin.com/in/yourprofile

---

## License
This project is for educational and demonstration purposes.