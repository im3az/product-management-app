# Product Management App

## Description

The Product Management App is a simple Node.js application that provides API endpoints for managing products. It uses Express as the web framework and Mongoose for MongoDB integration.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository_url>
   cd product-management-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the necessary environment variables. For example:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/product-management
   ```

## Running the Application

### In Production Mode

To run the application in production mode:

```bash
npm run start:prod
```

### In Production Mode

To run the application in development mode with automatic restarts on code changes:

```bash
npm run start:dev
```

## Linting and Formatting

### Lint the Code

To check the code for linting errors using ESLint:

```bash
npm run lint
```

### Fix Linting Errors

To automatically fix linting errors:

```bash
npm run lint:fix
```

### Format the Code

To format the code using Prettier:

```bash
npm run prettier
```

### Fix Formatting

To automatically fix formatting issues:

```bash
npm run prettier:fix
```
