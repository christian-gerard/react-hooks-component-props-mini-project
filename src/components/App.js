import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from './About.js'

import Articlelist from './Articlelist.js'




function App() {

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About key={'about'} about={blogData.about} image={blogData.image} />
      <Articlelist posts={blogData.posts} />
    </div>
  );
}

export default App;
