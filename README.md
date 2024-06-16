# Tasty_Hub

Tasty_Hub is a web application that offers users a variety of recipes categorized by type. The frontend of the application is built using Next.js, while the backend is powered by Node.js and Express, with MongoDB used for storing and authenticating user information.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

## Features

- User authentication and registration.
- Browse recipes by categories.
- View detailed recipes.
- Add recipes to favorites.
- Responsive design for mobile and desktop users.

## Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/divspark/tasty_hub.git
cd tasty_hub
```

2. Install dependencies for both frontend and backend

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables

Create a `.env` file in the `backend` directory and add the following:

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Usage

1. Run the backend server

```bash
cd backend
npm start
```

2. Run the frontend server

```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

