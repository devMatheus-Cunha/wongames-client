# Boilerplate Next.js

This repository serves as a Next.js boilerplate, offering a foundational structure for web development projects. A boilerplate is a predefined set of code and configurations designed to expedite the development process, enabling you to focus on building features rather than setting up the project from scratch.

## What is Included?

This boilerplate incorporates essential libraries to enhance your development experience. Here are the key dependencies:

### Core Dependencies

- **Next.js**: A React framework for building web applications.
- **React**: A JavaScript library for building user interfaces.
- **Styled-components**: A popular styling library for React applications.
- **TypeScript**: A superset of JavaScript that adds static typing.

### State Management

- **React Query**: A library for managing and caching server state in React applications.

### Form Handling

- **React Hook Form**: A library for efficient form management in React.

### HTTP Requests

- **Axios**: A promise-based HTTP client for the browser and Node.js.

### Validation

- **Zod**: A TypeScript-first schema declaration and validation library.

### Development Tools

- **Storybook**: An open-source tool for developing UI components in isolation.
- **Prettier**: An opinionated code formatter for consistent code styling.
- **ESLint**: A pluggable JavaScript linter for identifying and fixing problems.
- **Plop**: A micro-generator toolkit that helps scaffold new files and components.

### Git Hooks

- **Husky**: A library that enables running scripts in response to Git events, facilitating pre-commit and pre-push hooks.

### Testing

- **Jest**: A JavaScript testing framework.
- **Testing Library**: A set of utilities for testing React components.

## GitHub Actions (CI)

This project also includes continuous integration (CI) with GitHub Actions. GitHub Actions workflows are configured to automatically run tests, build, lint, and more whenever there is a change in the repository. This ensures everything is correct before making pull requests or performing merges.

## Getting Started

Follow these steps to create a project based on this boilerplate:

1. **Create a new Next.js project using `create-next-app`:**

   ```bash
   npx create-next-app project-name -e https://github.com/devMatheus-Cunha/boilerplate-next
   ```

   Replace `project-name` with your desired project name.

2. **Navigate to the project folder:**

   ```bash
   cd project-name
   ```

3. **Install dependencies:**

   ```bash
   yarn install
   ```

4. **Start the development server:**

   ```bash
   yarn dev
   ```

Now you have a solid foundation for your Next.js project. Customize it to suit your specific needs and start building amazing web applications! Feel free to reach out for any questions or suggestions. Happy coding!
