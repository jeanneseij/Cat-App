# cat-app

cat-app is a React TypeScript project that showcases the use of the Cat API (https://docs.thecatapi.com/) to fetch and display adorable cat images. This README provides an overview of the project structure, the technologies used, and important notes regarding design choices.

Site URL: https://jeanneseij.github.io/cat-app

## Technologies Used

- React with TypeScript: I've built the project using Create React App with TypeScript. TypeScript brings strong typing to your project, enhancing code quality and development experience.

- Styled Components: I've used Styled Components to manage and style my components in separate files. This approach promotes component reusability and maintainability.

- Axios: I've used Axios for making HTTP requests to the Cat API. It provides a clean and promise-based way to fetch data from external sources.

- Context API: I've implemented the Context API for state management in the application. It allows me to efficiently share and manage state across different components.

- Lottie Animations: I've utilized Lottie for adding engaging animations to the Loading and Coming Soon components, enhancing the user experience.

## React Functions vs. React.FC

In this project, I've chosen to use React functions over React.FC (Functional Components). Here's why:

- React functions are the newer and recommended way to create functional components. They are simpler and provide better type inference when using TypeScript.

- React.FC has some limitations, such as unexpected behavior with defaultProps and children props. By using React functions, I avoid these potential issues.

## Type vs. Interface

You may have noticed that I've opted for TypeScript `type` instead of `interface` for defining custom types. Here's the rationale:

- TypeScript `type` and `interface` serve similar purposes, but `type` provides more flexibility. I can use `type` for creating union types, intersections, and mapped types, making it versatile for complex type definitions.

- `type` is more suitable for cases where I need to define combinations of types or create aliases for existing types.

## Placeholder Components

The Votes and Favorites route and components are included as placeholders in the project. They serve the purpose of populating the navigation bar, ensuring there is more than one link available. These components are intentionally left empty, as they are meant to be filled in with future features or functionalities.

## Getting Started

To get started with the Cat-App project, follow these steps:

1. Clone the repository to your local machine:

```shell
git clone https://github.com/yourusername/Cat-App.git
cd cat-app
npm install
npm start
