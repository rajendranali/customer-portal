# Customer Portal

This project is a customer management portal built using React. It allows users to view a list of customers, see detailed information about each customer, and view associated images in a grid layout. The project is designed with a modern, responsive UI to enhance user experience.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rajendranali/customer-portal.git
   cd customer-portal
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Project Structure

```bash
customer-portal/
├── public/                # Public assets (index.html, favicon, etc.)
├── src/
│   ├── components/        # Reusable components (CustomerList, CustomerDetails, PhotoGrid)
│   ├── hooks/             # Custom hooks for fetching and managing state
│   ├── reduxToolkit/      # Redux slices and store configuration
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Application entry point
│   └── style.css          # Global styles
├── .gitignore             # Git ignore file
├── package.json           # NPM package configuration
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

## Features

- **Customer Management:** View a list of customers and detailed information for each.
- **Responsive Design:** The layout is designed to be fully responsive, ensuring a good user experience on all devices.
- **Photo Grid:** Display associated customer images in a grid layout with interactive hover effects.
- **Redux State Management:** The application state is managed using Redux Toolkit for scalable and maintainable code.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** A set of tools to simplify Redux state management.
- **TypeScript:** A superset of JavaScript that adds static types.
- **Axios:** A promise-based HTTP client for making API requests.
- **CSS:** Custom styles for a modern, clean UI.
- **Create React App:** A tool to set up a modern web app by running one command.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Open a pull request.

Please ensure your code follows the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
