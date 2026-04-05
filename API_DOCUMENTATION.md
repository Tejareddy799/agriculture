# API Documentation

## Overview
This document provides comprehensive documentation for all API endpoints related to the Agriculture project.

### Base URL
```
https://api.example.com/v1/
```

## Authentication
All API requests require authentication through an API key. Include the API key in the header:
```
Authorization: Bearer YOUR_API_KEY
```

## Rate Limiting
- Maximum requests per minute: 100
- Exceeding the limit will result in a `429 Too Many Requests` error.

## Endpoints

### 1. GET /crops
- **Description**: Retrieve a list of crops.
- **Request**: 
    ```
    GET /crops
    ```
- **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "Wheat",
        "season": "Rabi"
      },
      {
        "id": 2,
        "name": "Rice",
        "season": "Kharif"
      }
    ]
    ```

### 2. POST /crops
- **Description**: Add a new crop.
- **Request**:
    ```json
    {
      "name": "Corn",
      "season": "Kharif"
    }
    ```
- **Response**:
    ```json
    {
      "id": 3,
      "name": "Corn",
      "season": "Kharif"
    }
    ```

### 3. GET /crops/{id}
- **Description**: Get details about a specific crop.
- **Request**:
    ```
    GET /crops/1
    ```
- **Response**:
    ```json
    {
      "id": 1,
      "name": "Wheat",
      "season": "Rabi"
    }
    ```

### Error Handling
- Common Error Responses:
  - `400 Bad Request`: Invalid input.
  - `401 Unauthorized`: Authentication failed.
  - `404 Not Found`: Resource not found.
  - `500 Internal Server Error`: Server error.

---

## Conclusion
This documentation serves as a guide for interacting with the Agriculture API. For any further questions or issues, please contact support.