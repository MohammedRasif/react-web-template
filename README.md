r r
# React + Vite + TypeScript Template

This project uses a scalable, feature-based architecture optimized for React and Vite, utilizing TypeScript for strong typing and better developer experience.

## Project Architecture

Below is the complete, organized folder structure of the application:

```text
src/
├── app/
│   ├── App.tsx
│   ├── ErrorPage.tsx
│   ├── providers.tsx
│   ├── router.tsx
│   └── store.ts
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── styles/
│       ├── App.css
│       └── index.css
│
├── components/            
│   ├── ui/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Loader/
│   │   ├── Modal/
│   │   └── Table/
│   │
│   ├── layout/
│   │   ├── DashboardLayout/
│   │   │   └── DashboardLayout.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── UserDashboardNavbar.tsx
│   │   └── Sidebar/
│   │       └── Sidebar.tsx
│
├── features/
│   ├── auth/
│   │   └── pages/
│   │       ├── ChangePassword.tsx
│   │       ├── ForgotPassword.tsx
│   │       ├── Login.tsx
│   │       ├── Register.tsx
│   │       ├── ResetPassword.tsx
│   │       └── VerifyOTP.tsx
│   │
│   ├── home/
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   │
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── FAQ.tsx
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       └── Tour.tsx
│   │   
│   ├── dashboard/
│   │   ├── components/
│   │   └── pages/
│   │       └── Dashboard.tsx
│
├── redux/
│   ├── api/
│   │   └── baseApi.ts
│   ├── slices/
│   └── store.ts
│
├── hooks/
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   ├── usePagination.ts
│   └── useToggle.ts
│
├── main.tsx
└── vite-env.d.ts
```

## Running the Application

To start the development server:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```
