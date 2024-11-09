# Moderate Jokes Microservice

This microservice enables moderators to review, edit, approve, or reject user-submitted jokes.

## Features

- Retrieve the next joke for moderation.
- Approve or edit a joke.
- Reject and delete jokes.

## Technologies

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: Relational database for storing jokes under moderation.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Laughfy/moderate-jokes-microservice.git
   cd moderate-jokes-microservice
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file with the following:

     ```plaintext
     JWT_SECRET=secret

     DB_HOST=localhost
     DB_USER=root
     DB_PASS=password
     DB_NAME=laughfy_moderation
     ```

4. **Start the service**:
   ```bash
   npm start
   ```

## Endpoints

- **GET /jokes/next**: Retrieve the next unapproved joke for moderation (requires JWT token).
- **PUT /jokes/:id**: Approve or edit a joke by ID (requires JWT token).
- **DELETE /jokes/:id**: Reject and delete a joke by ID (requires JWT token).

## Docker Instructions

1. **Build Docker image**:

   ```bash
   docker build -t moderate-jokes-service .
   ```

2. **Run Docker container**:
   ```bash
   docker run -p 3001:3001 --env-file .env moderate-jokes-service
   ```

## License

Licensed under the MIT License.
