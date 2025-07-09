# Portfolio

This repository contains a basic MERN (MongoDB, Express, React, Node) stack project using TypeScript. The project is split into two parts:

- **server**: Express API written in TypeScript. It handles authentication and exposes CRUD routes for managing portfolio projects.
- **client**: React application built with Vite and TypeScript. It has an admin dashboard for editing projects and a viewer section to showcase them.

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance

### Installation

1. Install dependencies (requires internet access):
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
2. Create a `.env` file in `server` with the following keys:
   ```env
   MONGO_URI=your_mongo_connection
   JWT_SECRET=your_jwt_secret
   ```
3. Build and start the server:
   ```bash
   cd server
   npm run build
   npm start
   ```
4. In another terminal, start the client:
   ```bash
   cd client
   npm start
   ```

The client will be available at `http://localhost:3000` and the API at `http://localhost:5000`.

## License

MIT
