# Dog Management App

## Live Demo

Check out the live site: [Dog Management App](https://dog-app-api-fsu.netlify.app/)

## Project Overview

This project is a Dog Management Application built as a part of a school project. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of dogs. The application consists of a frontend built with React and a backend built with Node.js and Express, connected to a MongoDB database.

## Features

- **User Registration & Login**
- **JWT-Based Authentication**
- **Protected Routes**
- **Add a New Dog**: Users can add new dogs to the list by providing details such as name, breed, and age.
- **View Dogs**: Users can view a list of all the dogs added to the application.
- **Edit Dog Details**: Users can edit the details of existing dogs.
- **Delete a Dog**: Users can delete dogs from the list.

## Technologies Used

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express, Mongoose, MongoDB, JWT
- **Database**: MongoDB Atlas
- **Deployment**: Render (Backend), Netlify (Frontend)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- Git
- MongoDB Atlas Account

### Local Development

#### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gorvok/dog-app-api.git
   cd dog-app-api/backend
   ```
   
2. **Install Dependencies:**
    ```bash
    npm install
    ```
   
3. **Create a `.env` File:**
    - Create a .env file in the backend directory with the following content:
        ```bash
        DATABASE_URL=mongodb+srv://<username>:<password>@dogs-app-api.0vfd0bb.mongodb.net/
        JWT_SECRET=your_jwt_secret
        ```
    - In your backend project folder run
      ```bash
      node generateSecret.js
      ```
    - This will create your JWT Secret Key!
4. **Start the Backend Server:**
    ```bash
    npm start
    ```
   
#### Frontend Setup
1. **Install Dependencies**
    ```bash
    npm install
    ```
   
2. **Create a`.env` file:**
    - Create a .env file in the frontend directory with the following content:
        ```bash
        REACT_APP_BACKEND_URL=http://localhost:5001
        ```
      
3. **Start the Frontend Server:**
    ```bash
    npm start
    ```
   
### Deployment
#### Backend Development on Render
1. **Sign Up for Render**
    - Go to [Render](https://www.render.com/) and sign up for a free account.

2. **Create a New Web Service:**
    - Click on "New" and select "Web Service".
    - Connect your GitHub repo containing the backend code
    - Specify the root directory if your backend is not in the root (e.g., `/backend`) which is how this should be set up.
    - Set the build command to `npm install` and the start command to `npm start`.

3. **Set Environment Variables:**
    - Add the `DATABASE_URL` environment variable with your MongoDB connection string. (I used MongoDB Atlas)

4. **Deploy**
    -Click "Create Web Service". Render will build and deploy your backend.

#### Frontend Deployment on Netlify
1. **Sign Up for Netlify:**
    - Go to [Netlify](https://www.netlify.com/) and sign up for a free account.

2. **Create a New Site:**
    - Click on "New site from Git".
    - Connect your GitHub repository containing the frontend code.

3. **Configure Build Settings:**
    - Set the build command to npm run build.
    - Set the publish directory to build.

4. **Set Environment Variables:**
    - Add REACT_APP_BACKEND_URL with the URL provided by Render for your backend service.

5. **Deploy:**
    - Click "Deploy site". Netlify will build and deploy your frontend.

### Usage

1. **Visit the Application:**
    - Go to the Netlify URL to access the frontend of the Dog Management App.
2. **Add a New Dog:**
    - Navigate to the "Add Dog" page and fill out the form to add a new dog.
3. **View Dogs:**
    - The home page displays a list of all dogs. Click on a dog's name to edit or delete it.
4. **Edit Dog Details:**
    - Click on a dog's name in the list, edit the details, and save.
5. **Delete a Dog:**
    - Click the "Delete" button next to a dog's name to remove it from the list.
6. **User**
    - Register a New User & Log In!

### License
This project is licensed under the MIT License.

### Acknowledgments
- Thanks to the course instructor for their guidance.
- Special thanks to MongoDB, Render, and Netlify for providing free tiers for deployment.

### Contact
For any inquires or issues, please message me or send an email.

[GJO.DEV](https://www.gjo.dev)

[Email](mailto:hello@gjo.dev)

[Instagram](https://www.instagram.com/gjo.dev)

[Linkedin](https://www.linkedin.com/gjovanigorvokaj)


### Final Notes

- Make sure to replace placeholders with actual values (e.g., `your_mongodb_connection_string`, `your_jwt_secret`, `https://your-backend-url.com`).
- Keep testing and refining your app to ensure a smooth user experience.
- Good luck with your submission! If you have any more questions or need further assistance, feel free to ask.

