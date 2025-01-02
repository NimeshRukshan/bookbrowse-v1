# BookBrowse v1

A simple book search application built with React, Vite, Material-UI (MUI), React Query, and utilizing the Google Books API for data fetching.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **Vite** - A modern, fast development tool for React.
- **MUI** (Material-UI) - A library of React components for faster and easier web development.
- **React Query** - A data-fetching and caching library for React.
- **Google Books API** - Used to fetch book data.
- **Toast** - For showing notifications and toasts.
- **.env** - For managing environment variables.

## Project Setup

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/book-search-app.git
   cd book-search-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add the following environment variables:

   ```env
   REACT_APP_GOOGLE_BOOKS_API_KEY=your_google_books_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## File Structure

```bash
src/
├── assets/            # Static assets such as images, icons, etc.
├── components/        # Reusable UI components
├── pages/             # Contains page components for routing
├── routes/            # Routes for the application
├── services/          # API service for data fetching (e.g., Google Books API)
├── theme/             # Custom theme configuration for MUI
└── App.js             # Main entry point of the application
```

## Environment Variables

The following environment variable is required to use the Google Books API:

- **REACT_APP_GOOGLE_BOOKS_API_KEY**: Your API key for accessing the Google Books API. You can get your API key from [Google Cloud Console](https://console.developers.google.com/).

## Usage

1. **Fetching Data**:

   - The application uses React Query to fetch data from the Google Books API.
   - A custom service inside `src/services/` handles API requests to Google Books using the API key.

2. **Notification**:

   - Toast notifications are used to inform users of the app’s status (e.g., book search success or error).

3. **Styling**:
   - MUI is used for UI components like buttons, grids, and text fields.
   - Custom themes can be modified in `src/theme/`.

Feel free to explore the app and customize it further!

---
