# Backend Setup Instructions

## MongoDB Connection Issue - RESOLVED

The error `ENOTFOUND ac-vyoskr2-shard-00-01.dsmkpzj.mongodb.net` or similar DNS errors indicate network connectivity issues. This typically happens when:

1. **Network Connectivity Issues** - Your internet connection or firewall is blocking MongoDB Atlas
2. **MongoDB Atlas IP Whitelist** - Your current IP address is not whitelisted
3. **MongoDB Atlas Cluster** - The cluster might be paused or experiencing issues

## ⚠️ IMPORTANT: The app shows "MongoDB Connected Successfully" but still fails!
This is because:
- Initial connection succeeds briefly
- But actual database operations (queries) fail due to DNS resolution timeouts
- The connection drops before completing the operation

## Solutions:

### Option 1: Check MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Log in with your credentials
3. Check if the cluster `dietnut` is running
4. Ensure your IP address is whitelisted (Network Access → IP Access List → Add Current IP)

### Option 2: Use Local MongoDB (For Testing)
```bash
# Install MongoDB locally or update .env to:
MONGODB_URI=mongodb://localhost:27017/nutritrack
```

## Running the Backend

1. Install dependencies:
```bash
cd backend
yarn install
# or
npm install
```

2. Start the server:
```bash
node server.js
```

The server will run on `http://localhost:5000` even if MongoDB connection fails.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Health Check
- `GET /api/health` - Check server and database status

## Environment Variables

The `.env` file contains:
- `PORT=5000` - Server port
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
