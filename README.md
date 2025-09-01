# Image Search App

A simple ReactJS application that allows users to search for images using the Unsplash API and display them in a responsive grid layout.

## Features

- **SearchBar Component**: Allows users to enter search terms and submit queries
- **ImageList Component**: Displays search results in a responsive grid
- **Image Details**: Shows image name, photographer, and link to Unsplash page
- **Loading States**: Displays loading spinner during API requests
- **Error Handling**: Provides user-friendly error messages
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Get Unsplash API Key

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Create an account or log in
3. Create a new application
4. Copy your Access Key

### 2. Configure Environment Variables

1. Create an environment file:

2. Open `.env` file and add `your_unsplash_access_key_here` :
   ```
   VITE_UNSPLASH_ACCESS_KEY=your_actual_access_key_here
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Components

### SearchBar
- Located in `src/components/SearchBar.jsx`
- Handles user input and form submission
- Validates input before triggering search

### ImageList
- Located in `src/components/ImageList.jsx`
- Displays images in a responsive grid
- Shows loading states and empty states
- Each image card includes:
  - Image thumbnail
  - Image title/description
  - Photographer name
  - Link to view on Unsplash

## API Service

The Unsplash API integration is handled in `src/services/unsplashApi.js`, which includes:
- Axios configuration with proper headers
- Search endpoint integration
- Error handling and validation
- Environment variable support

## Usage

1. Enter a search term in the search bar
2. Click "Search" or press Enter
3. View the results displayed in a grid layout
4. Click "View on Unsplash" to see the full-size image on Unsplash
