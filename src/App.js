
import React, { useContext } from 'react'
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList"
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/header/Home";
import Post from "./components/Post"
import Project from "./components/header/Project";
// import SinglePost from "./components/contact/SinglePost";
import NavBar from "./components/header/NavBar"


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      {/* <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path='/' exact />
         
          <Route component={Post} path='/post' />
          <Route component={Project} path='/project' />
        </Switch>
      </BrowserRouter> */}

      <Toggle />
      <Intro />
      <About />
      <Post/>
      <ProductList />
      <Contact />
   
    </div>
  );
};
export default App

