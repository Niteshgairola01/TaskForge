# TaskForge

A scalable, modular Project Management System built with React and TypeScript.

Designed to simulate real-world enterprise architecture including protected routing, lazy loading, modular state management, and performance optimization patterns.


## Live Demo

Coming Soon



## Purpose

This project was built to practice and implement:

- Feature-based architecture
- Protected routing
- Code splitting and lazy loading
- Error boundaries
- useReducer + useContext patterns
- Performance optimization techniques
- Scalable folder structure
- Reusable component system



## Architecture

The application follows a feature-based modular architecture:

- Each business domain lives inside `/features`
- Shared reusable components live in `/shared`
- Global providers and configuration live in `/app`
- Routing logic is isolated in `/routes`
- Layouts are separated from business logic



## Modules

- Authentication (Login / Register)
- Dashboard
- Projects Management
- Task Management
- Team Management
- Settings



## Tech Stack

- React
- TypeScript
- React Router
- Tailwind CSS
- Context API + useReducer
- Vite



## Advanced Concepts

- Protected Routes
- Route-level Code Splitting
- React.lazy + Suspense
- Error Boundaries
- Custom Hooks
- Memoization (useMemo / useCallback)
- Virtualized Lists
- Modular Reducer Pattern



## Installation

1. Clone the repository
2. Install dependencies

   npm install

3. Start development server

   npm run dev



## Folder Structure

src/
 ├── app/
 ├── features/
 ├── shared/
 ├── routes/
 ├── layouts/
 ├── services/
 └── context/



## Author

Nitesh Gairola
