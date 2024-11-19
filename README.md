# EcoWander
### Live View: https://ecowander-5244c.web.app

## Purpose
EcoWander aims to provide users with a convenient, interactive platform for discovering eco-adventure experiences and connecting with travel experts. The application caters to adventure enthusiasts who want to explore eco-friendly tour options, view detailed information about various adventures, and get advice from experienced travelers. With secure user authentication, EcoWander ensures that personalized features, such as profile updates and exclusive adventure details, are available only to registered users. Additionally, the app offers a unique “Talk to Expert” feature, allowing users to consult travel experts within specific hours, fostering a community-driven and supportive adventure planning experience.

## Key Features
* User authentication with login and logout functionality using Firebase.
* Private routes accessible only by authenticated users (Profile, Update Profile, Adventure Details).
* Swiper banner displaying a carousel of three components with "View Details" buttons.
* Profile update functionality for logged-in users.
* Password reset functionality using Firebase.
* Adventure section with cards and an "Explore More" button, redirecting to login if the user is not authenticated.
* Talk to Expert" button to connect with an expert via Google Meet during specific hours (10 AM to 8 PM).
* Dynamic title for every page

## NPM Packages
- react-router-dom - for handling routing and private routes in the application.
- date.fns - for handling and formatting dates if needed in the app.
- swiper.js - for the banner carousel in the adventure section.
- animate.css - for adding animations to elements.
- react-icons - for adding icons throughout the app, like the menu icon.
- firebase - for authentication and password reset functionality.