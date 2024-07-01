
# Parking Management API

This is a Node.js-based API for managing parking sessions in various cities and areas. It allows users to start and stop parking sessions, and it ensures that no duplicate cities or areas are added.

## Features

- Manage cities and their areas with specific parking pricing strategies.
- Start and stop parking sessions for users.
- Prevent users from starting a new parking session if one is already ongoing.
- Calculate parking fees based on city and area-specific strategies.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Cities](#cities)
  - [Parking](#parking)
- [Seeding the Database](#seeding-the-database)
- [Example Requests](#example-requests)
- [Running Tests](#running-tests)

## Installation

1. Clone the repository:
    \`\`\`sh
    git clone https://github.com/your-repo/parking-management-api.git
    cd parking-management-api
    \`\`\`

2. Install dependencies:
    \`\`\`sh
    npm install
    \`\`\`

3. Create a \`.env\` file in the root directory and add your MongoDB URI:
    \`\`\`plaintext
    MONGO_URI=mongodb://localhost:27017/parking
    \`\`\`

## Configuration

Ensure your MongoDB server is running and the \`MONGO_URI\` in the \`.env\` file points to your MongoDB instance.

## API Endpoints

### Cities

- **Add City**
  - **URL:** \`/api/cities/add\`
  - **Method:** \`POST\`
  - **Body:**
    \`\`\`json
    {
        "name": "New York City",
        "areas": [
            {
                "name": "Manhattan",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 5
                }
            },
            {
                "name": "Brooklyn",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 4
                }
            }
        ]
    }
    \`\`\`

- **Get All Cities**
  - **URL:** \`/api/cities\`
  - **Method:** \`GET\`

- **Add Areas to Existing City**
  - **URL:** \`/api/cities/add-areas\`
  - **Method:** \`POST\`
  - **Body:**
    \`\`\`json
    {
        "cityName": "New York City",
        "newAreas": [
            {
                "name": "Queens",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 3
                }
            },
            {
                "name": "Bronx",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 2.5
                }
            }
        ]
    }
    \`\`\`

### Parking

- **Start Parking**
  - **URL:** \`/api/parking/start\`
  - **Method:** \`POST\`
  - **Body:**
    \`\`\`json
    {
        "userId": "123",
        "city": "New York City",
        "area": "Manhattan"
    }
    \`\`\`

- **Stop Parking**
  - **URL:** \`/api/parking/stop\`
  - **Method:** \`PUT\`
  - **Body:**
    \`\`\`json
    {
        "parkingId": "60d5f7f65b5e4e35d4a6a6e3"
    }
    \`\`\`

- **Get All Parking Sessions for a User**
  - **URL:** \`/api/parking/:userId\`
  - **Method:** \`GET\`

## Seeding the Database

To seed the database with initial data, use the provided seeding script:

1. Ensure your MongoDB server is running.
2. Run the seeding script:
    \`\`\`sh
    node scripts/seedCities.js
    \`\`\`

## Example Requests

Here are some example requests you can use in Postman or any other API testing tool:

### Add City

- **Request:**
  - **URL:** \`http://localhost:5000/api/cities/add\`
  - **Method:** \`POST\`
  - **Body:**
    \`\`\`json
    {
        "name": "New York City",
        "areas": [
            {
                "name": "Manhattan",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 5
                }
            },
            {
                "name": "Brooklyn",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 4
                }
            }
        ]
    }
    \`\`\`

### Add Areas to Existing City

- **Request:**
  - **URL:** \`http://localhost:5000/api/cities/add-areas\`
  - **Method:** \`POST\`
  - **Body:**
    \`\`\`json
    {
        "cityName": "New York City",
        "newAreas": [
            {
                "name": "Queens",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 3
                }
            },
            {
                "name": "Bronx",
                "pricingStrategy": "fixedRate",
                "parameters": {
                    "rate": 2.5
                }
            }
        ]
    }
    \`\`\`

### Start Parking

- **Request:**
  - **URL:** \`http://localhost:5000/api/parking/start\`
  - **Method:** \`POST\`
  - **Body:**
    \`\`\`json
    {
        "userId": "123",
        "city": "New York City",
        "area": "Manhattan"
    }
    \`\`\`

### Stop Parking

- **Request:**
  - **URL:** \`http://localhost:5000/api/parking/stop\`
  - **Method:** \`PUT\`
  - **Body:**
    \`\`\`json
    {
        "parkingId": "60d5f7f65b5e4e35d4a6a6e3"
    }
    \`\`\`

### Get All Parking Sessions for a User

- **Request:**
  - **URL:** \`http://localhost:5000/api/parking/123\`
  - **Method:** \`GET\`

## Running Tests

You can write and run tests for your API to ensure everything works correctly. Use a testing framework like Mocha or Jest to create and run your tests.
