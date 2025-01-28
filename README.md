# HNG12 Stage 0 Backend - Public API

## **Project Description**

This project is a simple public API developed as part of the HNG12 internship program. It provides basic information in JSON format, including:

- registered email address used for HNG 12 Slack workspace
- current date and time is ISO 8601 format (UTC)
- github repo url of the project's codebase

## **Features**

- **GET Endpoint**: Fetches the required information in JSON format.
- **Dynamic Timestamp**: Returns the current date and time dynamically.
- **CORS Support**: Ensures the API is accessible across multiple origins.
- Fast response time (<500ms).

## **Technologies Used**

- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express.js**: A lightweight framework for building APIs and web applications.
- **CORS**: Middleware to handle Cross-Origin Resource Sharing (CORS).
- **JavaScript**: The programming language used for this project.

## **How to Set Up the Project Locally**

### **Prerequisites**

- [Node.js](https://nodejs.org/) installed on your machine.

### **Steps**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/emekach/hng12-api.git
   cd hng12-api

   ```

2. **Install Dependencies**:

   ```bash
    npm install

   ```

3. **Run the Server**:
   ```bash
    npm start
   ```

The Api will be accessible at:
http://localhost:3000/

# API Documentation

## Endpoint

- **GET** /

## Response

- **Status**: 200 OK
- **Content-Type**: application/json

### Example Response:

```json
     {
       "email": "chukwuemeka.chukwuma11@gmail.com",
       "current_datetime": "2025-01-30T09:30:00Z",
       "github_url": "https://github.com/emekach/hng12-stage-0"
     }
```
# Live API
The live version of the API is deployed and accessible at:
https://hng12-internship-task-0-0974ffa8bb84.herokuapp.com/

## Hire Developers
- [Python Developers](https://hng.tech/hire/python-developers)
- [C# Developers](https://hng.tech/hire/csharp-developers)
- [Golang Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)