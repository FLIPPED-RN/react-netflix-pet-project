import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/screens/home/App";
import { MovieDetails } from "./components/screens/movie/MovieDetails";
import { Layout } from "./components/Layout";

export function MainRoutes(){
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path='/'
            element={<App />}
          />
          <Route 
            path='/movie/:id'
            element={<MovieDetails />}
          />
        </Route>
      </Routes>
    </Router>
  )
}