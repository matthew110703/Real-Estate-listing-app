# Real Estate Listing App (UK)


## Description and Overview

The Real Estate Listing App is a comprehensive platform that lists UK real estate properties. The app offers users an intuitive interface to explore property listings, view detailed property information, and connect with property owners and agents. Whether you are a home buyer, seller, or real estate agent, this app provides all the tools you need to manage your real estate connections efficiently.

#### [Click Here to View Live DEMO](https://real-estate-listing-app-psi.vercel.app/)

## Features Showcase

- **Property Listings**: Browse through a wide range of property listings with detailed descriptions, images, and pricing information.
- **Advanced Search**: Utilize advanced search filters to find properties that match your specific criteria, including location, price range, property type, and more.
- **Property Details**: Access comprehensive details about each property, including floor plans, amenities, and neighborhood information.
- **User Authentication**: A secure user authentication system for property owners, agents, and buyers, powered by Firebase Auth.
- **Favorites**: Save favorite properties for quick access and comparison.
- **Contact Agents**: Easily connect with property agents or owners through the in-app messaging system. (coming soon)
- **Responsive Design**: Fully responsive design that works seamlessly on both desktop and mobile devices.


## Tech Stack Used

- **Frontend**: React, React-Router-Dom, Redux-Toolkit Query, React-Toastify
- **Backend**: Firebase Authentication, [RapidAPI Zoopla](https://rapidapi.com/apidojo/api/zoopla/playground/apiendpoint_b5f140aa-870c-4606-9e56-771a0cae0c47)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Vite React App Setup and Install Instructions for Local

To set up and run the Real Estate Listing App locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/matthew110703/Real-Estate-listing-app.git
    cd Real-Estate-listing-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure Environmental Variables**:
   - Create `.env.local` in the project root directory.
   - Initialize new project in [Firebase Console](https://console.firebase.google.com/) and get your credentials.
   - Visit [RapidAPI](https://rapidapi.com/hub), create an account and get RapidAPI key.
    ```env
    VITE_FIREBASE_API_KEY=<your_firebase_api_key>
    VITE_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
    VITE_FIREBASE_PROJECT_ID=<your_firebase_project_id>
    VITE_RAPIDAPI_KEY=<your_rapiapi_key>
    ```

4. **Run the development server**:
    ```sh
    npm run dev
    ```

5. **Build for production**:
    ```sh
    npm run build
    ```

6. **Preview the production build**:
    ```sh
    npm run preview
    ```

---

Feel free to customize this content as per your requirements.
