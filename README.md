# StayVista

StayVista is a full-featured accommodation booking platform where users can browse property listings, create accounts, manage their own property listings, upload images, and write reviews.

![Screenshot (581)](https://github.com/user-attachments/assets/966b4f44-299b-41c2-8b4f-2c4dee4d091d)

## Live Demo

[Visit StayVista](https://stayvista-um5k.onrender.com/listings)

## Features

- **User Authentication**: Secure signup and login with Passport.js
- **Property Management**: Create, read, update, and delete property listings
- **Image Upload**: Cloudinary integration for property image storage
- **Reviews System**: Users can leave ratings and reviews on listings
- **Search & Filter**: Search listings by location and filter by price or country
- **Responsive Design**: Mobile-friendly interface built with Bootstrap
- **Flash Messages**: Real-time feedback for user actions

## Technology Stack

- **Frontend**: 
  - EJS (Embedded JavaScript templates)
  - Bootstrap 5
  - CSS3
  - JavaScript

- **Backend**: 
  - Node.js
  - Express.js
  - Mongoose ODM

- **Database**: 
  - MongoDB Atlas

- **Authentication**: 
  - Passport.js
  - Express-session

- **File Storage**: 
  - Cloudinary
  - Multer

- **Other Tools**: 
  - Joi (Data validation)
  - Method-override
  - Connect-flash
  - Dotenv

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/stayvista.git
   cd stayvista
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   SECRET=your_session_secret_key
   ATLASDB_URL=your_mongodb_connection_string
   ```

4. Start the application
   ```bash
   node app.js
   ```

5. Open your browser and navigate to `http://localhost:8080`

## Usage

### As a Guest:
- Browse all property listings
- View property details and reviews
- Register for an account

### As a Registered User:
- Create new property listings
- Upload images for your properties
- Edit and delete your own listings
- Leave ratings and reviews on properties
- View your profile

## Project Structure

```
stayvista/
├── controllers/         # Route controllers
│   ├── listings.js      # Property listing controllers
│   ├── review.js        # Review controllers
│   └── user.js          # User authentication controllers
├── models/              # Database models
│   ├── listing.js       # Property listing model
│   ├── review.js        # Review model
│   └── user.js          # User model
├── public/              # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # Client-side scripts
│   └── images/          # Static images
├── routes/              # Express routes
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # User routes
├── utils/               # Utility functions
│   ├── ExpressError.js  # Custom error handler
│   └── wrapAsync.js     # Async error wrapper
├── views/               # EJS templates
│   ├── listings/        # Listing-related views
│   ├── users/           # User-related views
│   ├── includes/        # Partial templates
│   └── layouts/         # Layout templates
├── app.js               # Express app setup
├── middleware.js        # Custom middleware
├── cloudConfig.js       # Cloudinary configuration
├── schema.js            # Joi validation schemas
└── package.json         # Project dependencies
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the responsive design components
- [Cloudinary](https://cloudinary.com/) for image storage solutions
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting
- [Font Awesome](https://fontawesome.com/) for the icons used throughout the site
