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

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` file and replace `your_unsplash_access_key_here` with your actual Unsplash access key:
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

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client for API requests
- **Unsplash API** - Image search service

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   └── ImageList.jsx
├── services/
│   └── unsplashApi.js
├── App.jsx
└── main.jsx
```

## Usage

1. Enter a search term in the search bar
2. Click "Search" or press Enter
3. View the results displayed in a grid layout
4. Click "View on Unsplash" to see the full-size image on Unsplash

## Error Handling

The app handles various error scenarios:
- Missing API key configuration
- Invalid API key
- Network errors
- Empty search results

## Contributing

Feel free to submit issues and enhancement requests!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
