import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Errors from "./components/Errors";
import MovieEdit from "./components/movies/MovieEdit";
import MovieForm from "./components/movies/MovieForm";
import MovieList from "./components/movies/MovieList";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import { MoviesProvider } from "./context/MoviesContext";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MoviesProvider>
        <Errors />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <MovieList /> } />
          <Route path="/movies/new" element={ <MovieForm /> } />
          <Route path="/movies/:id/edit" element={ <MovieEdit /> } />
        </Routes>
      </MoviesProvider>
    </Router>
  );
}

export default App;
