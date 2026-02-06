# Red Explorer Nexus


A modern travel blog web application built with Next.js, TypeScript, Prisma, and NextAuth. Share your adventures, explore destinations, and connect with fellow travelers.

🔗 **Live Site**: [red-explorer-nexus.vercel.app](https://red-explorer-nexus.vercel.app)  
🔐 **Admin Panel**: [red-explorer-nexus.vercel.app/admin](https://red-explorer-nexus.vercel.app/admin)

## 📸 Screenshots

![Red Explorer Nexus Homepage](./public/screenshot-home.png)
![Red Explorer Nexus Admin](./public/screenshot-admin.png)

<!-- Alternative ways to add images: -->

<!-- From public folder -->
<!-- ![App Screenshot](./public/images/screenshot.png) -->

<!-- From external URL -->
<!-- ![App Preview](https://your-image-url.com/image.png) -->

<!-- Multiple screenshots in a row -->
<!-- 
<div align="center">
  <img src="./public/screenshot-1.png" width="30%" />
  <img src="./public/screenshot-2.png" width="30%" />
  <img src="./public/screenshot-3.png" width="30%" />
</div>
-->

<!-- Using HTML for more control -->
<!-- 
<p align="center">
  <img src="./public/logo.png" alt="Logo" width="200"/>
</p>
-->

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [License](#license)

## 🎯 Overview

Red Explorer Nexus is a full-stack travel blogging platform that enables users to document their journeys, share experiences, and discover new destinations. Built with cutting-edge web technologies, it offers a seamless experience for travel enthusiasts to create, manage, and explore travel content.

## ✨ Features

- 🌍 **Travel Blog Platform** - Create and share travel stories with rich content
- 🔐 **Authentication** - Secure user authentication powered by NextAuth
- 👨‍💼 **Admin Panel** - Comprehensive admin dashboard at `/admin` for content management
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS and Radix UI
- 📊 **Analytics & Charts** - Visualize travel data with Recharts
- 📝 **Form Management** - Robust form handling with React Hook Form
- 📁 **File Uploads** - Drag-and-drop file upload with React Dropzone
- 🗺️ **Interactive Features** - Smooth animations with Motion (Framer Motion)
- 🔄 **Real-time Updates** - Client-side data fetching with SWR
- 🎯 **State Management** - Efficient global state with Zustand
- 🔔 **Notifications** - User-friendly toast notifications
- 🗄️ **Database Integration** - Type-safe database operations with Prisma ORM
- 🚀 **Optimized Performance** - Server-side rendering and automatic optimizations
- 📱 **Mobile Responsive** - Fully responsive design for all devices
- 🔒 **Type Safety** - Full TypeScript support throughout the application

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.3 (with React 19.2)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **UI Components**: 
  - Radix UI
  - Lucide React (icons)
  - React Icons
- **Forms**: React Hook Form 7.71
- **File Uploads**: React Dropzone 14.3
- **Charts**: Recharts 2.15
- **Utilities**:
  - clsx & tailwind-merge (className management)
  - class-variance-authority (variant styles)

### Backend & Data
- **Authentication**: NextAuth 4.24 with Prisma Adapter
- **Database ORM**: Prisma 6.19 with Prisma Client
- **Password Hashing**: bcrypt 6.0
- **HTTP Client**: Axios 1.13
- **Data Fetching**: SWR 2.3

### State & Notifications
- **State Management**: Zustand 5.0
- **Notifications**: React Hot Toast 2.6

### DevOps & Tools
- **Deployment**: Vercel
- **Version Control**: Git/GitHub
- **Linting**: ESLint 9 with Next.js config
- **Compiler**: Babel React Compiler 1.0
- **Build Tool**: PostCSS with Tailwind

## 📁 Project Structure

```
Red-Explorer-Nexus/
├── actions/              # Server actions for data mutations
├── app/                  # Next.js App Router (pages, layouts, API routes)
├── components/
│   └── ui/              # Reusable UI components (Radix UI)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── libs/                # Additional libraries and helpers
├── prisma/              # Database schema and migrations
│   └── schema.prisma    # Prisma schema definition
├── public/              # Static assets (images, fonts, etc.)
├── .gitignore
├── components.json      # UI components configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── prisma.config.ts     # Prisma configuration
├── tsconfig.json        # TypeScript configuration
└── README.md
```

## 📚 Key Technologies

### Authentication & Security
- **NextAuth** with Prisma adapter for database sessions
- **bcrypt** for secure password hashing
- Environment-based configuration

### UI & Styling
- **Tailwind CSS 4** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **Lucide React** & **React Icons** for comprehensive iconography

### Data Management
- **Prisma ORM** for type-safe database queries
- **SWR** for efficient client-side data fetching and caching
- **Zustand** for lightweight state management
- **React Hook Form** for performant form handling

### Developer Experience
- **TypeScript** for type safety
- **ESLint** for code quality
- **React Compiler** for optimized builds
- **Hot reload** for rapid development

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kored28**

- GitHub: [@Kored28](https://github.com/Kored28)
- Live Site: [red-explorer-nexus.vercel.app](https://red-explorer-nexus.vercel.app)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org) and [React](https://react.dev)
- Authentication by [NextAuth.js](https://next-auth.js.org)
- UI components from [Radix UI](https://www.radix-ui.com)
- Database management with [Prisma](https://www.prisma.io)
- Animations powered by [Motion](https://motion.dev)
- Deployed on [Vercel](https://vercel.com)
