# Movie App

A **React Native** application that allows users to search for movies using the **OMDb API**, view movie details, and save their favorite movies for later viewing.

## Features
- 🎬 **Search Movies**: Enter a movie title to fetch and display results.
- 📜 **Infinite Scrolling**: Automatically loads more movies by reaching at the end of the screen.
- ⭐ **Save Favorites**: Store favorite movies using AsyncStorage.
- 🔍 **View Saved Movies**: Access a list of saved movies anytime.

## Technologies Used
- **React Native**
- **Axios** (for API requests)
- **AsyncStorage** (for local storage)
- **react-navigation** (for navigation between screens)
- **FlatList** (for smooth scrolling and rendering lists)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ampandita03/MovieApp.git
   cd MovieApp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Install dependencies for React Navigation**
   ```sh
   npm install @react-navigation/native  
   npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons react-native-paper
   ```

4. **Install Bottom Tabs for Navigationn**
   ```sh
   npm install @react-navigation/bottom-tabs  
   ```
   
5. **Install AsyncStorage**
   ```sh
     npm install @react-native-async-storage/async-storage    
   ```
   
6. **Install Axios for API requests**
   ```sh
    npm install axios
   ```      

7. **Run the project:**
   ```sh
   npx react-native run-android
   ```

## Project Structure
```
MovieApp/
│── app/
│   ├── Home.js  # Search and display movies
│   ├── Saved.js  # Show saved favorite movies
│── assets/
    ├── images/  # for all the images which are used locally
│── components/
│   ├── MovieCards.js  # created the card so that we can reuse later
│   ├── Searchbar.js  # Created the UI part of search bar
│── screens/
│   ├── Details.js  # Show Details of the movie when clicked
│   ├── Home.js  # Home screen 
│   ├── Saved.js  # Show saved movies
│── navigation/
│   ├── StackNavigation.js  # For stack type navigation
│   ├── TabNavigation.js  # For tab bar navigation 
│── package.json
│── README.md
```

## API Integration
This project uses the **OMDb API**. Make sure to replace `API_KEY` in `Home.js` and `Details.js` in  with your own API key.
```js
const API_KEY = "your_api_key_here";
```

## Usage
- **Search for Movies**: Type a movie name in the search bar.
- **Load More Movies**: Automatically load more movies using the onEndReachedThreshold.
- **Save a Movie**: Press the save button on a movie to add it to favorites.
- **View Saved Movies**: Navigate to the **Saved** screen to see stored movies.


